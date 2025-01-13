<template>
  <img class="circle__img" :src="src" :alt="alt" />
</template>

<script>
import chapplebiopic2Path from '@assets/static/img/circles/chapplebiopic2.png';
import chappleglassesBWPath from '@assets/static/img/circles/chappleglassesBW.png';
import {unref, computed} from 'vue';

  export default {
    name: "CirclePictures",
    computed: {},
    props: {
      name: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: 'circle-picture'
      }
    },
    setup(props) {
      const src = computed(() => {
        switch (props.name) {
          case 'chapplebiopic2': return `${unref(chapplebiopic2Path)}`
          case 'chappleglassesBW': return `${unref(chappleglassesBWPath)}`
        }
        return '';
      })
      return {
        src,
      }
    }
  }
</script>
