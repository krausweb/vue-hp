<template src="./App.html"></template>

<style lang="sass" scoped src="./App.sass"></style>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  },
  data () {
    return {
      topLinkList: [
        {link: 'uber-uns', text: 'Über uns'},
        {link: 'redaktion', text: 'Redaktion'}
      ],
      languageList: [
        {link: '#', active: false, text: 'De'},
        {link: '#', active: true, text: 'En'}
      ],
      topNavList: [
        {link: '#', text: 'DEsign+lifestyle'},
        {link: '#', text: 'Trends'},
        {link: '#', text: 'Infodelight'},
        {link: '#', text: 'Smart Living'}
      ],
      logo: '/dist/assets/images/logo.png',
      logoText: 'Inform.&nbsp;&nbsp;Connect.&nbsp;&nbsp;Inspire.',
      logoLink: '/',
      searchPlaceholder: 'Search...',
      searchActive: false,
      searchValue: '',
      active: 'active'
    }
  },
  methods: {
    searchActiveFn: function () {
      if (this.searchValue && this.searchActive) {
        this.searchResultFn()
      } else {
        this.searchActive ? this.searchActive = false : this.searchActive = true
      }
    },
    searchResultFn: function () {
      if (!this.searchValue) return ''
      alert(this.searchValue)
      console.log(this.searchValue)
    }
  }
}
</script>
