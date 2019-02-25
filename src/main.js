// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/app.scss'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css', 
    integrity: 'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt', 
    crossorigin: 'anonymous'
  })
  
  head.meta.push({ charset: 'utf-8' })
  head.meta.push({ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' })
  head.meta.push({ hid: 'description', name: 'description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!' })
  head.meta.push({ hid: 'og:image', name: 'og:image', content: 'https://zack-cuddy.com/images/logo_transparent.png' })
  head.meta.push({ hid: 'og:title', name: 'og:title', content: 'Zack Cuddy'} )
  head.meta.push({ hid: 'og:url', name: 'og:url', content: 'https://zack-cuddy.com'} )
  head.meta.push({ hid: 'og:site_name', name: 'og:site_name', content: 'Zack Cuddy'} )
  head.meta.push({ hid: 'og:description', name: 'og:description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!'} )
  head.meta.push({ hid: 'twitter:image', name: 'twitter:image', content: 'https://zack-cuddy.com/images/logo_transparent.png'} )
  head.meta.push({ hid: 'twitter:title', name: 'twitter:title', content: 'Zack Cuddy'} )
  head.meta.push({ hid: 'twitter:site', name: 'twitter:site', content: 'https://zack-cuddy.com'} )
  head.meta.push({ hid: 'twitter:description', name: 'twitter:description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!'} )
}