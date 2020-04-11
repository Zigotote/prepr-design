import Vue from "vue";
import Router from "vue-router";
import ExplorePage from "../views/ExplorePage";
import ProjectsPage from "../views/ProjectsPage";
import ChallengesPage from "../views/ChallengesPage";
import ChallengeDetailsPage from "../views/ChallengeDetailsPage";
import LabsPage from "../views/LabsPage";
import NotYetImplementedPage from "../views/NotYetImplementedPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: ExplorePage
    },
    {
      path: "/challenges",
      component: ChallengesPage,
      children: [
        {
          path: "front-end-developer-work-challenge",
          component: ChallengeDetailsPage
        }
      ]
    },
    {
      path: "/labs",
      component: LabsPage
    },
    {
      path: "/projects",
      component: ProjectsPage
    },
    {
      path: "*",
      component: NotYetImplementedPage
    }
  ]
});
