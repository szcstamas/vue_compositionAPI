<template>
    <HeaderVue />
    <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue';

export default {
  components: {
    HeaderVue,
  }
}
</script>

<style lang="scss">
:root {
  --mini-gap: .25rem;
  --half-gap: .5rem;
  --one-gap: 1rem;
  --two-gap: 2rem;
  --main-color-green: rgb(88, 152, 73);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
main {
    padding: 0 2rem;
}
h1 {
  font-size:32px;
}
h2 {
  font-size:26px;
}
a {
  text-decoration: none;
}
p, span, a {
  font-size: 16px;
  color: #272727;
}
button {
  appearance: none;
  border: none;
  background: var(--main-color-green);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}
.primary-text {
  font-size: 18px;
  margin-bottom: 1rem;
}
.subline {
  color: #343434;
}
</style>
