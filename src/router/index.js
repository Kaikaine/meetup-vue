import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

import PageHome from "@/views/PageHome";
import PageMeetupDetail from "@/views/PageMeetupDetail";
import PageMeetupFind from "@/views/PageMeetupFind";
import PageProfile from "@/views/PageProfile";
import PageMeetupCreate from "@/views/PageMeetupCreate";
import PageLogin from "@/views/PageLogin";
import PageRegister from "@/views/PageRegister";
import PageSecret from "@/views/PageSecret";
import PageNotFound from "@/views/_PageNotFound";
import PageNotAuthenticated from "@/views/PageNotAuthenticated";

Vue.use(Router);

const router = new Router({
  routes: [
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
      path: "/me",
      name: "PageProfile",
      component: PageProfile,
      meta: { onlyAuthUser: true },
    },
    {
      path: "/meetups/new",
      name: "PageMeetupCreate",
      component: PageMeetupCreate,
      meta: { onlyAuthUser: true },
    },
    {
      path: "/meetups/secret",
      name: "PageSecret",
      component: PageSecret,
      meta: { onlyAuthUser: true },
    },
    {
      path: "/meetups/:id",
      name: "PageMeetupDetail",
      component: PageMeetupDetail,
    },
    {
      path: "/login",
      name: "PageLogin",
      component: PageLogin,
      meta: { onlyGuestUser: true },
    },
    {
      path: "/register",
      name: "PageRegister",
      component: PageRegister,
      meta: { onlyGuestUser: true },
    },
    {
      path: "/401",
      name: "PageNotAuthenticated",
      component: PageNotAuthenticated,
    },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
  mode: "history",
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/getAuthUser").then(() => {
    const isAuthenticated = store.getters["auth/isAuthenticated"];

    if (to.meta.onlyAuthUser) {
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "PageNotAuthenticated" });
      }
    } else if (to.meta.onlyGuestUser) {
      if (isAuthenticated) {
        next({ name: "PageHome" });
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
