import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'


import BaseBadgeComponent from './components/Badge'
import BaseButtonComponent from './components/Button'


const BaseBadgeComponentWrapped = wrap(Vue, BaseBadgeComponent)
const BaseButtonComponentWrapped = wrap(Vue, BaseButtonComponent)


window.customElements.define('base-badge', BaseBadgeComponentWrapped)
window.customElements.define('base-button', BaseButtonComponentWrapped)