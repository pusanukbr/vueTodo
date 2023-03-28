<template>
  <div class="notFound">
    <h1>404</h1>
    <h3>Page not found!</h3>
    <router-link to="/">Back to home page</router-link>
  </div>
</template>

<style scoped>
.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
