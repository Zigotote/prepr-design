<template>
  <div class="bg-color">
    <challenges-list class="m-5" />
    <labs-list class="m-5" />
    <projects-list class="m-5" />
  </div>
</template>

<script>
import ChallengesList from "../components/ChallengesList";
import LabsList from "../components/LabsList";
import ProjectsList from "../components/ProjectsList";

export default {
  name: "ExplorePage",
  components: {
    ChallengesList,
    LabsList,
    ProjectsList
  }
};
</script>

<style></style>
