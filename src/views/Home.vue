<template>
  <div class="home">
    <router-link to="/survey">START SURVEYS</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;

    a {
      background: green;
      text-decoration: none;
      padding: 1rem;
      font-size: 1.2rem;
      color: white;
    }
  }
</style>
