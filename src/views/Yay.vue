<template>
  <div class="yay">
    <h1>This is an test page</h1>
    <Test></Test>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/test.vue'
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Yay',
  components: {
    Test
  },
  computed: {
    // ...mapGetters(['getName'])
  },
  methods: {
    // ...mapActions(['setName'])
  }
}
</script>
<style scoped>

</style>
