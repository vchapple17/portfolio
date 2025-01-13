<template>
  <picture>
      <!-- <source :srcset="svg" media="(min-width: 800px)"> -->
      <img :srcset="srcset" :src="svg" alt="" />
  </picture>
</template>

<script>
import svgPath from '@assets/static/img/vc-logo/vc-logo-220x178.svg';
import svgPath1 from '@assets/static/img/vc-logo/vc-logo-273x219.svg';
import svgPath2 from '@assets/static/img/vc-logo/vc-logo-420x335.svg';
import svgPath3 from '@assets/static/img/vc-logo/vc-logo-532x423.svg';
import pngXsPath1 from '@assets/static/img/vc-logo/vc-logo-38x30@1.png';
import pngSmPath1 from '@assets/static/img/vc-logo/vc-logo-76x60@1.png';
import pngMdPath1 from '@assets/static/img/vc-logo/vc-logo-267x210@1.png';
import pngMdPath3 from '@assets/static/img/vc-logo/vc-logo-267x210@3.png';
import pngLgPath1 from '@assets/static/img/vc-logo/vc-logo-400x315@1.png';
import pngLgPath2 from '@assets/static/img/vc-logo/vc-logo-400x315@2.png';
import pngXlPath1 from '@assets/static/img/vc-logo/vc-logo-800x630@1.png';
import {ref, unref, computed} from 'vue';

  export default {
    name: "SplashPicture",
    computed: {},
    props: {
      size: {
        type: Number,
        default: 0
      },
      sizePng: {
        type: String,
        default: ''
      },
    },
    setup(props) {
      const svg = ref(svgPath)
      const svg1 = ref(svgPath1)
      const svg2 = ref(svgPath2)
      const svg3 = ref(svgPath3)
      const pngXs1 = ref(pngXsPath1)
      const pngSm1 = ref(pngSmPath1)
      const pngMd1 = ref(pngMdPath1)
      const pngMd3 = ref(pngMdPath3)
      const pngLg1 = ref(pngLgPath1)
      const pngLg2 = ref(pngLgPath2)

      const srcset = computed(() => {
        if (props.size === 178) {
          return `${unref(svg)} 2x`
        } else if (props.sizePng == 'xs') {
          return `${unref(pngXs1)} 1x`
        } else if (props.sizePng == 'sm') {
          return `${unref(pngSm1)} 1x`
        } else if (props.sizePng == 'md') {
          return `${unref(pngMd1)} 1x`
        } else if (props.sizePng == 'lg') {
          return `${unref(pngLg1)} 1x`
        }
        return `${unref(svg1)} 1x, ${unref(svg2)} 2x, ${unref(svg3)} 3x`
      })
      return {
        svg,
        srcset
      }
    }
  }
</script>
