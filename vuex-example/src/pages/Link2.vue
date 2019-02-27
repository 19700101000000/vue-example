<template>
  <div>
    <h1>Link 2</h1>
    <p>
      <router-link to="/link1">go to link 1</router-link>
    </p>
    <p>
      <b-button variant="outline-success" size="sm" @click="onClickCount">count</b-button>
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
