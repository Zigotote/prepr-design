<template>
  <div>
    <b-navbar>
      <router-link to="/">Explore</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/challenges">Challenges</router-link>
      <router-link to="/labs">Labs</router-link>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
