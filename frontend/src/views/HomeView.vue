<template>
  <v-sheet class="pa-3 d-flex flex-column align-center container" rounded>
    <header class="d-flex flex-column align-center">
      <h1 class="text-md-h2 text-h4">Weather Forecast</h1>
      <p class="text-subtitle-1">Check weather of a selected city!</p>
    </header>
    <v-text-field label="City" class="align-self-stretch" :width="300" v-model.trim="city"></v-text-field>
    <v-btn :to="weatherLink" :disabled="disabled">Search</v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

// Components

export default defineComponent({
  name: 'HomeView',
  setup() {
    const city = ref('');

    const disabled = computed(() => city.value.length < 1);

    const weatherLink = computed(() => `/weather/${city.value}`);

    return {
      city,
      disabled,
      weatherLink,
    };
  },
});
</script>

<style scoped>
.container {
  gap: 1rem;
  background: transparent;
}
</style>
