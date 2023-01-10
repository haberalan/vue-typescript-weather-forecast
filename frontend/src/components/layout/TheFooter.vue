<template>
  <footer class="pb-1">
    <v-btn href="https://github.com/haberalan" variant="plain">&copy; {{ new Date().getFullYear() }} Alan Haber</v-btn>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
});
</script>
