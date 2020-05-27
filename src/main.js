import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'


import BadgeComponent from './components/Badge'
import ButtonComponent from './components/Button'
import GalleryComponent from './components/Gallery'


const BadgeComponentWrapped = wrap(Vue, BadgeComponent)
const ButtonComponentWrapped = wrap(Vue, ButtonComponent)
const GalleryComponentWrapped = wrap(Vue, GalleryComponent)


window.customElements.define('base-badge', BadgeComponentWrapped)
window.customElements.define('base-button', ButtonComponentWrapped)
window.customElements.define('base-gallery', GalleryComponentWrapped)