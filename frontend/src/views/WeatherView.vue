<template>
  <v-card v-if="!error && !loading" class="pa-3" :width="cardWidth">
    <v-card-title class="text-h4 text-center">{{ items.data.name }} </v-card-title>
    <v-card-subtitle class="text-subtitle-1 text-center">{{ formatDate(items.data.data[0].date) }}, {{ items.data.data[0].description }}</v-card-subtitle>
    <v-card-text class="py-0 mt-4">
      <v-row align="center" no-gutters>
        <v-col class="text-h1 d-flex" cols="6">{{ items.data.data[0].temp.toFixed(0) }}<span class="text-h3">°C</span></v-col>
        <v-col cols="6" class="text-right">
          <v-img :src="`http://openweathermap.org/img/wn/${items.data.data[0].icon}@4x.png`" alt="weather icon" class="icon" />
        </v-col>
      </v-row>
    </v-card-text>
    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle>{{ items.data.data[0].wind }} km/h</v-list-item-subtitle>
      </v-list-item>
      <v-list-item density="compact" prepend-icon="mdi-water">
        <v-list-item-subtitle>{{ items.data.data[0].humidity }} %</v-list-item-subtitle>
      </v-list-item>
    </div>
    <v-list class="d-flex overflow-x-auto my-3">
      <v-list-item v-for="item in items.data.data" :key="item.date">
        <v-card color="app1" width="200" height="160" class="pa-3">
          <v-card-text class="d-flex justify-center">
            <v-img :src="`http://openweathermap.org/img/wn/${item.icon}@4x.png`" height="100" alt="weather icon" class="icon" />
          </v-card-text>
          <v-card-subtitle class="d-flex justify-center mt-2"
            ><span class="text-h4">{{ item.temp.toFixed(0) }}</span> <span class="text-body-1">°C</span></v-card-subtitle
          >
          <v-card-title class="text-overline text-center">
            {{ formatDate(item.date) }}
          </v-card-title>
        </v-card>
      </v-list-item>
    </v-list>
    <v-card-actions class="d-flex justify-center">
      <v-btn to="/">Go back</v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else-if="!loading && error" class="pa-2">
    <v-card-title>Upss...</v-card-title>
    <v-card-text>{{ error }}</v-card-text>
    <v-card-actions>
      <v-btn to="/">Go back</v-btn>
    </v-card-actions>
  </v-card>
  <v-progress-circular indeterminate v-else></v-progress-circular>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import { WeatherType } from '../types/Weather';
import { format } from 'date-fns';
import { useDisplay } from 'vuetify/lib/framework.mjs';

// Components

export default defineComponent({
  name: 'WeatherView',
  props: {
    id: {
      required: true,
      type: String as PropType<string>,
    },
  },
  setup(props) {
    // Fetching
    const loading = ref(true);
    const error = ref(false);
    const items = ref<WeatherType | null>(null);

    const fetchWeather = async () => {
      const res = await fetch(`${process.env.VUE_APP_API}weather/${props.id}`);

      const data = await res.json();

      if (data.error) {
        error.value = data.error;
      } else {
        items.value = data;
      }

      loading.value = false;
    };

    // Display
    const formatDate = (val: string) => format(new Date(val), 'eeee k:mm');

    const { name } = useDisplay();

    const cardWidth = computed(() => {
      switch (name.value) {
        case 'xs':
          return 360;
        case 'sm':
        case 'md':
        case 'lg':
        case 'xl':
        case 'xxl':
          return 420;
      }
      return undefined;
    });

    onMounted(async () => {
      await fetchWeather();
    });

    return {
      loading,
      error,
      items,
      cardWidth,
      fetchWeather,
      formatDate,
    };
  },
});
</script>

<style scoped>
.icon {
  margin: -40px 0;
}
</style>
