<template>
  <div id="app">
    <button v-pfc="clickMe">vue pfc</button>
    <p>{{ clickTimes }} times</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      clickTimes: 0
    }
  },
  methods: {
    clickMe() {
      this.clickTimes++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
