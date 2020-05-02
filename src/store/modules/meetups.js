import axios from "axios";

export default {
  namespaced: true,
  state: {
    item: {},
    items: [],
  },
  getters: {},
  actions: {
    async fetchMeetups({ state, commit }) {
      commit("setItems", { resource: "meetups", items: {} }, { root: true });
      await axios.get("api/v1/meetups").then((res) => {
        const meetups = res.data;
        commit(
          "setItems",
          { resource: "meetups", items: meetups },
          { root: true }
        );
        return state.items;
      });
    },
    async fetchMeetupById({ state, commit }, meetupId) {
      commit("setItem", { resource: "meetups", item: {} }, { root: true });
      await axios.get(`/api/v1/meetups/${meetupId}`).then((res) => {
        const meetup = res.data;
        commit(
          "setItem",
          { resource: "meetups", item: meetup },
          { root: true }
        );
        return state.item;
      });
    },
  },
  mutations: {},
};
