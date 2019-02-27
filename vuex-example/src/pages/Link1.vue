<template>
  <div>
    <h1>Link 1</h1>
    <p>
      <router-link to="/link2">go to link 2</router-link>
    </p>
    <p>
      <b-button variant="outline-primary" size="sm" @click="onClickCount">count</b-button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    onClickCount () {
      this.$store.commit('increment')
    },
  },
}
</script>
