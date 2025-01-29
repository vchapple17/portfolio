
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
      <h1>Coming soon!</h1>

      <p>Valerie Chapple</p>
      <p>Full Stack Software Developer</p>

      <div style="margin-bottom: 10px">
        This website launched on a Symfony platform within Docker containers. While this site is in its early stages, I have many goals for this site.
      </div>
      <div>&#x2713; Demo website for backend configuration in <a href="https://github.com/vchapple17/dockerlocal">Docker Local</a> - 01/03/25</div>
      <div>&#x2610; Demo website for Symfony and Vue project <a href="https://github.com/vchapple17/portfolio">Portfolio</a></div>
      <div>&#x2610; Share information about myself and demonstrate my skills</div>
      <div>&#x2610; Demo and link personal projects</div>
      <div>&#x2610; General playground for learning new languages</div>

      <br>
      <br>
      <div style="margin-top: 30px; margin-bottom: 10px">
        Devops Progress
      </div>
      <div>&#x2713; Setup VPS with configurations, firewall, and permissions - 12/27/24</div>
      <div>&#x2713; Install docker compose and php modules - 12/29/24</div>
      <div>&#x2713; Create local and server code repository to handle docker containers easily - 01/01/25</div>
      <div>&#x2713; Setup nginx and routing  - 01/08/25</div>
      <div>&#x2713; Setup SSL local and on server - 01/28/25</div>
      <div>&#x2610; Review Github Actions (or other options) and implement build processes</div>

      <br>
      <br>
      <div style="margin-top: 30px; margin-bottom: 10px">
        Portfolio Progress
      </div>
      <div>&#x2713; Init - 12/21/24</div>
      <div>&#x2713; Base Symfony and webpack setup - 01/01/25</div>
      <div>&#x2713; Simple landing page - 01/12/25</div>
      <div>&#x2713; Setup Vue 3 and Typescript - 01/13/25</div>
      <div>&#x2713; Setup Vue 3 and router - 01/21/25</div>
      <div>&#x2610; Wireframe and setup style guidelines</div>
      <div>&#x2610; Create basic vue components (e.g. navigation, inputs) or review using PrimeVue</div>
      <div>&#x2610; Setup postgres and security auth with Symfony and potentially SSO, such as Google and/or Apple</div>
      <div>&#x2610; Setup wrapper for axios and other third party packages</div>
      <div>&#x2610; Configure and implement Pinia, Fontawesome, Tailwind CSS</div>
      <div>&#x2610; Create prettier landing/home page</div>
      <div>&#x2610; Add Projects section as part of professional portfolio</div>

      <br>
      <br>
      <div style="margin-top: 30px; margin-bottom: 10px">
        Additional Project Ideas
      </div>
      <div>&#x2610; Remake my Physics Conservation of Momentum Demo</div>
      <div>&#x2610; Powerlifting Meet Manager</div>
      <div>&#x2610; Food and Beverage Rater</div>

      <br>
      <br>
      <br>
      <br>

      <!--      <transition name="fade">-->
<!--        <SplashScreen v-show="!hide" @click="hide = true"></SplashScreen>-->
<!--      </transition>-->

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
