# Create custom element from Svelte component (Solution 2)

Mini project for learning how to create custom element from Svelte Component

### Counter.svelte

```html
<script>
let count = $state(0);
let { color } = $props();

let increase = () => {
    count += 1;
}
</script>

<div style="--color:{color||'red'}">    
    <h1>Counter : <span>{count}</span></h1>
    <button onclick={increase}>INCREASE</button>
</div>

<style>
div {
    font-family: sans-serif,tahoma;

    h1 {
        span {
            color: var(--color);
        }
    }

    button {
        padding: 0.5em 0.75em;
    }
}
</style>
```

### CounterComponent.js

```javascript
import { mount } from 'svelte'
import Counter from './Counter.svelte'

class CounterComponent extends HTMLElement {
    connectedCallback() {
        mount(Counter, {target: this})
    }
}

customElements.define('x-counter', CounterComponent);
```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create custom element from Svelte Component</title>
  </head>
  <body>
    <div id="app"></div>
    <x-counter></x-counter>
    <script src="./dist/CounterComponent.iife.js?v=1.0.3"></script>
  </body>
</html>
```

### package.json

```json
{
  "name": "create-custom-element-from-svelte-component",
  "description": "Mini project for learning how to create custom element from Svelte Component",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "keywords": [],
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT",
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte": "^5.0.5",
    "vite": "^5.4.8",
    "vite-plugin-css-injected-by-js": "^3.4.0"
  }
}
```

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    svelte()
  ],
  build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './src/CounterComponent.js',
            name:'___',
            formats: ['iife'],
            fileName: (format) => `[name].[format].js`
        }
    }
})
```
