<template lang="jade">
  div
    h1 {{ msg }}
    <!--<chart type="line" dataSet=""></chart>-->
</template>

<script>
export default {
  name: 'Hp',
  data () {
    return {
      msg: 'Welcome to Home Page App'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./Hp"
</style>
