/*
 * Includes fontawesome icons, with treeshaking so we only include the icons we need for the project.
 */

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faAngleLeft,
  faStar,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleRight,
  faAngleLeft,
  faStar,
  faCheck
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
