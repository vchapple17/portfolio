<script lang="ts">
// const logoPath = require('../../img/logo.png');
import IconWrapper from '@assets/components/IconWrapper/IconWrapper.vue'
export default {
  name: "footbar",
  components: {
    IconWrapper,
  },
}
</script>

<template>
  <div class="footer">
    <div>
      <a class="icon" href="mailto:info@valeriechapple.com?Subject=Valerie%20Chapple%20Info" target="_top">
        <IconWrapper />
      </a>
      Valerie Chapple (C) {{ currentYear }}
    </div>
  </div>
</template>

<style scoped>

</style>
