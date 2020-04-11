<template>
  <b-container class="bg-white" fluid>
    <p class="title">Challenges</p>
    <b-row>
      <b-col v-for="(challenge, index) in challenges" :key="index">
        <b-card
          :title="challenge.title"
          :img-src="challenge.img"
          :sub-title="challenge.subtitle"
          img-top
        >
          <b-card-text>{{ challenge.descr }}</b-card-text>
          <div class="text-center">
            <b-button href="#">Show more</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col class="text-center justify-content-bottom m-auto">
        <b-button size="lg">More challenges</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Challenges",
  data() {
    return {
      challenges: [
        {
          title: "Covid-19 Challenge",
          subtitle: "Low-cost monitoring system",
          img: require("../assets/challenges/challenge1.jpg"),
          descr:
            "NRC is seeking a low cost system (unit cost <25$) that can continuously measure..."
        },
        {
          title: "Covid-19 Challenge",
          subtitle: "Point of Care & Home Diagnostic Kit",
          img: require("../assets/challenges/challenge2.jpg"),
          descr:
            "The Public Health Agency of Canada and National are seeking a solution that will..."
        },
        {
          title: "Recycled Plastic Ceiling Tiles",
          img: require("../assets/challenges/challenge3.png"),
          descr:
            "The problem we are facing is global and departmental. Globally, there is an accumulation of plastic with the..."
        },
        {
          title: "Diverting End of Life Vehicle Plastics from Landfills",
          img: require("../assets/challenges/challenge4.png"),
          descr: "It is estimated that Canada generates between..."
        }
      ]
    };
  }
};
</script>

<style></style>
