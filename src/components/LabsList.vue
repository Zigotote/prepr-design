<template>
  <b-container class="bg-white" fluid>
    <p class="title">Labs</p>
    <b-row>
      <b-col v-for="(lab, index) in labs" :key="index">
        <b-card :title="lab.title" :img-src="lab.img" img-top>
          <b-card-text>{{ lab.descr }}</b-card-text>
          <div class="text-center">
            <b-button href="#">Show more</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col />
      <b-col />
      <b-col />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LabsList",
  data() {
    return {
      labs: [
        {
          title: "CareerMash Lab",
          img: require("../assets/labs/lab1.png"),
          descr:
            "CareerMash comes from the Information Technology Association of Canada (ITAC) Talent Division..."
        },
        {
          title: "Cybersecurity Talent Alliance Lab",
          img: require("../assets/labs/lab2.png"),
          descr:
            "Cybersecurity is increasingly driving innovation and economic activity in Canada. It already contributes $1.7..."
        }
      ]
    };
  }
};
</script>

<style></style>
