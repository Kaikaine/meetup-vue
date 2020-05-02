import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../views/PageHome.vue";
import PageMeetupDetail from "../views/PageMeetupDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/meetups/:id",
    name: "PageMeetupDetail",
    component: PageMeetupDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
