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
              <router-link to="/" class="font-black">Explore</router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/labs" class="font-black">Labs</router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/organisations" class="font-black">Organisations</router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="/challenges" class="font-black">Challenges</router-link>
            </b-button>
          </b-col>
          <b-col>
            <b-button size="lg">
              <router-link to="resources" class="font-black">Resources</router-link>
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
            <b-button class="bg-white" variant="light" v-b-toggle.profile-menu>
              <img src="./assets/default-user.png" alt="User profile" id="user-img" />
            </b-button>
            <b-sidebar id="profile-menu" right shadow>
              <div class="px-3 py-2">
                <b-list-group>
                  <b-list-group-item class="d-flex align-items-center">
                    <b-icon icon="person-fill"></b-icon>
                    <div class="ml-2">My profile</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img src="./assets/menu-icon/projects.png" class="icon" />
                    <router-link to="/projects" class="font-black">
                      <div class="ml-2">My projects</div>
                    </router-link>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img src="./assets/menu-icon/labs.png" class="icon" />
                    <div class="ml-2">My labs</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <b-icon icon="newspaper"></b-icon>
                    <div class="ml-2">News feed</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <b-icon icon="inbox"></b-icon>
                    <div class="ml-2">Inbox</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <b-icon icon="gear"></b-icon>
                    <div class="ml-2">Settings</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img src="./assets/menu-icon/help.png" class="icon" />
                    <div class="ml-2">Help</div>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img src="./assets/menu-icon/log_out.png" class="icon" />
                    <div class="ml-2">Log out</div>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-sidebar>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <img src="./assets/ban.png" alt="Prepr motto" id="motto" />
    <router-view />
    <b-container id="footer" fluid>
      <b-row class="justify-content-md-center">
        <b-col md="auto">Privacy policy</b-col>
        <b-col md="auto">Term of use</b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
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

.icon {
  width: 5%;
}

#footer {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: white;
}
</style>
