<template>
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/practice">Practice</RouterLink>
        <RouterLink to="/watch">Watch Effect</RouterLink>
        <RouterLink to="/sharing-state">Sharing State</RouterLink>
        <RouterLink to="/skeleton-suspense">Suspense Skeleton</RouterLink>
    </nav>  
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {

}
</script>

<style lang="css" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background: #fff;
  border-bottom: 2px solid var(--main-color-green);
  padding: 2rem 3rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--main-color-green);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }
}

</style>