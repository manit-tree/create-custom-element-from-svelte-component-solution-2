import { mount } from 'svelte'
import Counter from './Counter.svelte'

class CounterComponent extends HTMLElement {
    connectedCallback() {
        mount(Counter, {target: this})
    }
}

customElements.define('x-counter', CounterComponent);