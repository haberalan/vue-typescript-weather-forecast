<template>
  <v-app>
    <the-layout>
      <v-main class="d-flex flex-column justify-center">
        <router-view v-slot="{ Component }">
          <transition name="scroll-y-transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-main>
    </the-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheLayout from './components/layout/TheLayout.vue';

export default defineComponent({
  name: 'App',
  components: { TheLayout },
});
</script>
