<template>
  <b-container class="bg-white" fluid>
    <p class="title">Projects</p>
    <b-row>
      <b-col v-for="(project, index) in projects" :key="index">
        <b-card :title="project.title" :img-src="project.img" img-top>
          <b-card-text>{{ project.descr }}</b-card-text>
          <div class="text-center">
            <b-button href="#">Show more</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col class="text-center justify-content-bottom m-auto">
        <b-button size="lg">More projects</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ProjectsList",
  data() {
    return {
      projects: [
        {
          title: "Front End Developer Challenge",
          img: require("../assets/default-img.jpg"),
          descr:
            "This project is for redesigning a few key pages of the Prepr Network."
        },
        {
          title: "Aarjav_C_FrontEnd_Developer",
          img: require("../assets/projects/project2.jpeg"),
          descr:
            "Redesign a few key pages of the Prepr Network. 1. Explore page 2. Projects page 3. Challenges page 4. Challenge details page 5. Labs page"
        },
        {
          title: "prepr-redesign",
          img: require("../assets/default-img.jpg"),
          descr:
            "Submission for the front-end developer work challenge. Redesign of a few key prepr webpages."
        },
        {
          title: "Prepr Frontend Re-design",
          img: require("../assets/projects/project4.png"),
          descr:
            "Currently: IN PROGRESS https://github.com/akassab/\nPreprFrontEndChallenge/blob/master..."
        }
      ]
    };
  }
};
</script>

<style scoped>
img {
  height: 145px;
}
</style>
