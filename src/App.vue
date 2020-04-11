<template>
  <div>
    <b-navbar>
      <b-navbar-brand href="/">
        <img src="./assets/logo.png" />
      </b-navbar-brand>
      <b-container fluid>
        <b-row>
          <b-col>
            <b-button size="lg">
              <router-link to="/" class="font-black"> Explore </router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/labs" class="font-black"> Labs </router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/organisations" class="font-black">
                Organisations
              </router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/challenges" class="font-black">
                Challenges
              </router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="resources" class="font-black">
                Resources
              </router-link>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.font-black {
  color: black;
}
</style>
