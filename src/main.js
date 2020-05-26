import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'


import StandardBadgeComponent from './components/Badge'
import StandardButtonComponent from './components/Button'


const StandardBadgeComponentWrapped = wrap(Vue, StandardBadgeComponent)
const StandardButtonComponentWrapped = wrap(Vue, StandardButtonComponent)


window.customElements.define('standard-badge', StandardBadgeComponentWrapped)
window.customElements.define('standard-button', StandardButtonComponentWrapped)