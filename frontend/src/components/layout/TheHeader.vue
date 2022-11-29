<template>
  <header class="d-flex align-self-start pl-4">
    <v-switch :label="toggleMessage" v-model="toggle"></v-switch>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useTheme } from 'vuetify';

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const theme = useTheme();

    const savedMode = localStorage.getItem('VUE_TYPESCRIPT_WEATHER_FOREACAST-mode');

    const toggle = ref(savedMode === 'dark' ? true : false);

    const toggleMessage = computed(() => `${toggle.value ? 'Dark' : 'Light'} Mode`);

    watch(toggle, (newVal) => {
      theme.global.name.value = newVal ? 'dark' : 'light';
      localStorage.setItem('VUE_TYPESCRIPT_WEATHER_FOREACAST-mode', newVal ? 'dark' : 'light');
    });

    onMounted(() => {
      theme.global.name.value = savedMode === 'dark' ? 'dark' : 'light';
    });

    return {
      toggle,
      toggleMessage,
    };
  },
});
</script>
