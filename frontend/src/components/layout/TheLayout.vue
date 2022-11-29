<template>
  <div class="d-flex flex-column justify-space-between align-center h-screen">
    <the-header />
    <slot></slot>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';

export default defineComponent({
  name: 'TheLayout',
  components: { TheHeader, TheFooter },
});
</script>
