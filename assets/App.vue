
<script setup lang="ts">
// import NavBar from '@assets/components/navbar/NavBar'
// import FootBar from '@assets/components/FootBar'
// import SplashScreen from '@assets/components/SplashScreen'
import {ref} from 'vue'
// import {ClientHttp} from "./utils/client.ts";
// import {debounce} from 'lodash'


const hide = ref(false)

// onMounted(() => {
//   http.get('/')
// })
</script>

<template>
  <div>
    <template v-if="$route.name === 'home'">
      <transition name="fade">
        <SplashScreen v-show="!hide" @click="hide = true"></SplashScreen>
      </transition>

<!--      <transition name="fade">-->
<!--        <NavBar v-show="hide"/>-->
<!--      </transition>-->

<!--      <div class="body-wrapper">-->
<!--        <router-view v-slot="{ Component }">-->
<!--          <transition name="fade">-->
<!--            <component :is="Component" v-show="hide"/>-->
<!--          </transition>-->
<!--        </router-view>-->
<!--      </div>-->

<!--      <transition name="fade">-->
<!--        <FootBar v-show="hide"/>-->
<!--      </transition>-->
<!--    </template>-->
<!--    <template v-else>-->
<!--      <NavBar/>-->

<!--      <div class="body-wrapper">-->
<!--        <router-view></router-view>-->
<!--      </div>-->

<!--      <FootBar/>-->
    </template>
  </div>
</template>
