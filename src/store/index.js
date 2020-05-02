import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {},
  },
  getters: {},
  mutations: {
    setItems(state, { resource, items }) {
      state[resource] = items;
    },
    setItem(state, { resource, item }) {
      state[resource] = item;
    },
  },
  actions: {
    async fetchMeetups({ state, commit }) {
      commit("setItems", { resource: "meetups", items: {} });
      await axios.get("api/v1/meetups").then((res) => {
        const meetups = res.data;
        commit("setItems", { resource: "meetups", items: meetups });
        return state.meetups;
      });
    },
    fetchCategories({ state, commit }) {
      axios.get("api/v1/categories").then((res) => {
        const categories = res.data;
        commit("setItems", { resource: "categories", items: categories });
        return state.meetups;
      });
    },
    async fetchMeetupById({ state, commit }, meetupId) {
      commit("setItem", { resource: "meetup", item: {} });
      await axios.get(`/api/v1/meetups/${meetupId}`).then((res) => {
        const meetup = res.data;
        commit("setItem", { resource: "meetup", item: meetup });
        return state.meetup;
      });
    },
    async fetchThreads({ state, commit }, meetupId) {
      commit("setItems", { resource: "threads", items: {} });
      await axios.get(`/api/v1/threads?meetupId=${meetupId}`).then((res) => {
        const threads = res.data;
        commit("setItems", { resource: "threads", items: threads });
        return state.threads;
      });
    },
  },
});
