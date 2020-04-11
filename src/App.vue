<template>
  <b-container class="p-0" fluid>
    <b-navbar>
      <b-navbar-brand href="/">
        <img src="./assets/logo.png" alt="Prepr logo" />
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
              <router-link to="/labs" class="font-black">
                Labs
              </router-link>
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
      <b-container id="align-right">
        <b-row>
          <b-col>
            <p class="h1">
              <b-icon icon="bell" />
            </p>
          </b-col>
          <b-col>
            <a href="/">
              <img
                src="./assets/default-user.png"
                alt="User profile"
                id="user-img"
              />
            </a>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <img src="./assets/ban.png" alt="Prepr motto" id="motto" />
    <router-view />
  </b-container>
</template>

<script>
export default {};
</script>

<style>
.font-black {
  color: black;
}

#motto {
  width: 100%;
}
#align-right {
  right: 0;
  max-width: fit-content;
}

#user-img {
  height: 65px;
}
</style>
