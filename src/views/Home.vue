<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    {{getName}}
    <HelloWorld msg="Welcome to Your Vue.js App" yay="test"/>
    <button @click="setName('sun')">change to sun</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getName'])
  },
  methods: {
    ...mapActions(['setName'])
  }
}
</script>
