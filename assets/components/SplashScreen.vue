<template>
  <div class="splash-screen">
    <div class="splash-logo">
      <SplashPicture size-png="lg"></SplashPicture>
    </div>
    <div class="splash-container">
      <div v-for="row in 30" class="splash-row">
        <div v-for="col in 40" :class="`splash-cell r-${row} c-${col}`">
          <div class="back">&nbsp;</div>
          <div class="front">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SplashPicture from '@assets/components/picture/SplashPicture.vue'
  export default {
    name: 'SplashScreen',
    components: {
      SplashPicture
    },
    computed: {
    },
  }
</script>
