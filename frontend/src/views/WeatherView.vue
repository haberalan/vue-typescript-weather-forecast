<template>
  <v-card v-if="!error && !loading" class="pa-3 d-flex flex-column" :width="cardWidth">
    <v-card-title class="text-h4 align-self-center">{{ items.data.name }}</v-card-title>
    <v-card-subtitle class="text-subtitle-1 align-self-center">{{ date }}, {{ items.data.data[0].description }}</v-card-subtitle>
    <v-card-text>
      <header class="header d-flex justify-space-between align-center">
        <div class="temp d-flex">
          <p class="temp-number text-h1">{{ items.data.data[0].temp.toFixed(0) }}</p>
          <p class="temp-cel text-h4">°C</p>
        </div>
        <img :src="`http://openweathermap.org/img/wn/10d@4x.png`" alt="weather icon" class="icon" />
      </header>
      <div class="details d-flex justify-space-between align-center">
        <p>
          <v-icon icon="mdi-water" size="large"></v-icon>
          <span class="text-body-1">{{ items.data.data[0].humidity }} %</span>
        </p>
        <p>
          <v-icon icon="mdi-weather-windy" size="large"></v-icon>
          <span class="text-body-1">{{ items.data.data[0].wind }} km/h</span>
        </p>
      </div>
    </v-card-text>
    <v-card-actions class="align-self-center">
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
    const loading = ref(true);
    const error = ref(false);
    const items = ref<WeatherType>();

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

    onMounted(() => {
      fetchWeather();
    });

    // Display
    const date = computed(() => {
      if (items.value) {
        return format(new Date(items.value.data.data[0].date), 'eeee k:mm');
      } else {
        return null;
      }
    });

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

    return {
      loading,
      error,
      items,
      date,
      cardWidth,
      fetchWeather,
    };
  },
});
</script>

<style scoped>
.details > p {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.icon {
  margin: -20px -40px;
}
</style>
