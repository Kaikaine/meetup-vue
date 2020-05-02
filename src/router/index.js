import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "@/views/PageHome.vue";
import PageMeetupDetail from "@/views/PageMeetupDetail.vue";
import PageMeetupFind from "@/views/PageMeetupFind";
import _PageNotFound from "@/views/_PageNotFound";
import PageLogin from "@/views/PageLogin";
import PageRegister from "@/views/PageRegister";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/find",
    name: "PageMeetupFind",
    component: PageMeetupFind,
  },
  {
    path: "/meetups/:id",
    name: "PageMeetupDetail",
    component: PageMeetupDetail,
  },
  {
    path: "/login/",
    name: "PageLogin",
    component: PageLogin,
  },
  {
    path: "/register/",
    name: "PageRegister",
    component: PageRegister,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: _PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
