// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//Main css which covers tailwind css
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  //keywords
  head.meta.push({
    name: 'keywords',
    content: 'Personal, Transformation, Growth, Technology, Coaching'
  })
}
