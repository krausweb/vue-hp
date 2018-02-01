<template lang="jade">
  div#app.container
    div.top-links-language-block
      ul.top-links
        li(v-for="link in topLinkList")
          a(:href="link.link") {{link.text}}
      ul.language
        li(v-for="lang in languageList")
          a.language-link(:href="lang.link", :class="{'active': lang.active}") {{lang.text}}
    div.logo-block
      a(:href="logoLink")
        img(:src="logo").logo
        span.text(v-html="logoText")
    div.top-nav-block
      div.search-input-block
        input.search-input(:placeholder="searchPlaceholder", :class="{'active': searchActive}", v-model.lazy.trim="searchValue", v-on:keyup.enter="searchResultFn()")
        span.search(v-on:click="searchActiveFn")
      ul
        li(v-for="nav in topNavList")
          a(:href="nav.link") {{nav.text}}
    div.content
      hp
</template>

<script>
import Hp from './components/Hp.vue'

export default {
  name: 'app',
  components: {
    Hp
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
<style lang="sass" scoped>
  @import "./App"
</style>
