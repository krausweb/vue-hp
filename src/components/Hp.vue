<template lang="jade">
  div.wrapper
    div(:class="banner.class", v-for="banner in bannerDataList")
      carousel(v-if="banner.sliderList", :watch-items="banner.sliderList", :auto="3000")
        carousel-item.slide(v-for="slider in banner.sliderList")
          img.slider-img(:src="slider.src", :title="slider.title")
          div.banner-content
            div.text.links(v-if="slider.links")
              ul
                li(v-for="link in slider.links")
                  a.link(:href="link.link") {{link.text}}
            div.text.main(v-if="slider.textMain") {{slider.textMain}}
            div.text.detail(v-if="slider.textDetail") {{slider.textDetail}}
            div.text.button(v-if="slider.buttons")
              a.link(:href="button.link", v-if="slider.buttons", v-for="button in slider.buttons") {{button.text}}
      div.banner-content(v-else)
        div.text.links(v-if="banner.links")
          ul
            li(v-for="link in banner.links")
              a.link(:href="link.link") {{link.text}}
        div.text.main(v-if="banner.textMain") {{banner.textMain}}
        div.text.detail(v-if="banner.textDetail") {{banner.textDetail}}
        div.text.button(v-if="banner.buttons")
          a.link(:href="button.link", v-if="banner.buttons", v-for="button in banner.buttons") {{button.text}}
</template>

<script>
import { Carousel, CarouselItem } from 'vue-l-carousel'

export default {
  name: 'Hp',
  components: {
    Carousel,
    CarouselItem
  },
  data () {
    return {
      bannerDataList: [
        {
          class: 'slider top',
          sliderList: [
            {
              src: '/dist/assets/images/banner_top.png',
              title: 'Banner',
              links: [
                {link: '#', text: 'DEsign+lifestyle'},
                {link: '#', text: 'Smart Living'}
              ],
              textMain: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
              textDetail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
            },
            {
              src: '/dist/assets/images/banner_top.png',
              title: 'Banner',
              links: [
                {link: '#', text: 'DEsign+lifestyle'},
                {link: '#', text: 'Smart Living'},
                {link: '#', text: 'Itineris tramitems messis!'}
              ],
              textMain: 'Repressor fortis burgus est.',
              textDetail: 'Secundus, camerarius armariums una imitari de fatalis, neuter silva.'
            },
            {
              src: '/dist/assets/images/banner_top.png',
              title: 'Banner',
              links: [
                {link: '#', text: 'DEsign+lifestyle'},
                {link: '#', text: 'Smart Living'},
                {link: '#', text: 'Habenas cantare!'},
                {link: '#', text: 'Lixas assimilant!'}
              ],
              textMain: 'Barbatus diatria virtualiter captiss usus est. Cum hippotoxota prarere, omnes visuses visum flavum.',
              textDetail: 'Fluctuss resistere in pius oenipons! Cum orgia cantare, omnes rectores experientia magnum, bassus itineris tramitemes. Ubi est altus contencio.'
            }
          ]
        },
        {
          class: 'banner content',
          textMain: 'A place called Inspiration.',
          textDetail: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam voluptatem.',
          buttons: [
            {link: '#', text: 'Über die Autoren'},
            {link: '#', text: 'Über das magazin'}
          ]
        },
        {
          class: 'banner left',
          links: [
            {link: '#', text: 'DEsign+lifestyle'},
            {link: '#', text: 'Smart Living'}
          ],
          textMain: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
          textDetail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
        },
        {
          class: 'banner right',
          links: [
            {link: '#', text: 'DEsign+lifestyle'},
            {link: '#', text: 'Smart Living'}
          ],
          textMain: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
          textDetail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./Hp"
</style>
