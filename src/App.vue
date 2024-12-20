<script setup>
import Counter from './features/counter/Counter.vue'

const logo = "/logo.svg";
</script>

<template>
  <div class="App">
    <header class="App-header">
      <img :src="logo" class="App-logo" alt="logo"/>
      <Counter>
        <p>
          Edit <code>src/App.vue</code> and save to reload.
        </p>
        <span>
        <span>Learn </span>
        <a
            class="App-link"
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
        >Vue</a>
        <span>, </span>
        <a
            class="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >Redux</a>
        <span>, </span>
        <a
            class="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >Redux Toolkit</a>
        ,<span> and </span>
        <a
            class="App-link"
            href="https://vue-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >Vue Redux</a>
      </span>
      </Counter>
    </header>
  </div>
</template>

<style scoped>
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-float infinite 3s ease-in-out;
  }
}

.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}

.App-link {
  color: rgb(112, 76, 182);
}

@keyframes App-logo-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px)
  }
  100% {
    transform: translateY(0px)
  }
}
</style>
