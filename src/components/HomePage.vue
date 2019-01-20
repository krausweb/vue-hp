<template src="./HomePage.html"></template>

<style lang="sass" scoped src="./HomePage.sass"></style>

<script>
import { Carousel, CarouselItem } from 'vue-l-carousel'

export default {
  name: 'HomePage',
  components: {
    Carousel,
    CarouselItem
  },
  data () {
    return {
      bannerDataList: [
        {
          class: 'slider -top',
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
          class: 'banner -only-text',
          textMain: 'A place called Inspiration.',
          textDetail: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam voluptatem.',
          buttons: [
            {link: '#', text: 'Über die Autoren'},
            {link: '#', text: 'Über das magazin'}
          ]
        },
        {
          class: 'banner -left',
          src: '/dist/assets/images/banner_top.png',
          links: [
            {link: '#', text: 'DEsign+lifestyle'},
            {link: '#', text: 'Smart Living'}
          ],
          textMain: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
          textDetail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
        },
        {
          class: 'banner -right',
          src: '/dist/assets/images/banner_top.png',
          links: [
            {link: '#', text: 'DEsign+lifestyle'},
            {link: '#', text: 'Smart Living'}
          ],
          textMain: 'Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?',
          textDetail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  dolor in reprehenderit in quia...'
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Points scored',
          align: 'left',
          x: 50,
          style: {
            'fontWeight': 'bold'
          }
        },
        xAxis: {
          categories: ['Team 1', 'Team 2', 'Team 3', 'Team 4']
        },
        yAxis: {
          min: 1,
          max: 100,
          title: false
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          y: 30,
          squareSymbol: false,
          symbolRadius: 0,
          symbolWidth: 25,
          itemMarginBottom: 5,
          itemStyle: {
            'fontWeight': 'normal'
          }
        },
        series: [{
          name: 'Period 1',
          data: [24, 36, 9, 38],
          color: '#5e97f6'
        }, {
          name: 'Period 2',
          data: [85, 24, 37, 63],
          color: '#1c4587'
        }]
      }
    }
  }
}
</script>
