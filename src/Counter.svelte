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