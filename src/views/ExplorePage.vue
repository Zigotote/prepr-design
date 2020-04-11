<template>
  <div class="bg-color">
    <challenges-list class="m-5" />
    <labs-list class="m-5" />
  </div>
</template>

<script>
import ChallengesList from "../components/ChallengesList";
import LabsList from "../components/LabsList";
export default {
  name: "ExplorePage",
  components: {
    ChallengesList,
    LabsList
  }
};
</script>

<style></style>
