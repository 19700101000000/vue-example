<template>
  <div>
    <h1>Home</h1>
    <p>counter: {{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    },
  },
}
</script>
