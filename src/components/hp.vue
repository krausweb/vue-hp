<template lang="jade">
  div#hp
    h1 {{ msg }}
    <!--<chart type="line" dataSet=""></chart>-->
</template>

<script>
export default {
  name: 'hp',
  data () {
    return {
      msg: 'Welcome to Home Page App'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./hp"
</style>
