import EventService from "@/http/event/eventService";

export default {
  async getEvents({ commit }) {
    await EventService.getEvents().then((response) => {
      commit("setEvents", response.data);
    });
  },
  async getEventDetails({ commit }, id) {
    await EventService.getEventDetails(id).then((response) => {
      commit("setEventDetails", response.data);
    });
  },
  async getHall({ commit }, id) {
    await EventService.getHall(id).then((response) => {
      commit("setHall", response.data);
    });
  },
  async getSeats({ commit }, payload) {
    await EventService.getSeats(payload).then((response) => {
      commit("setSeats", response.data);
    });
  },
  // eslint-disable-next-line no-unused-vars
  async getSeat({ commit }, payload) {
    await EventService.getSeat(payload);
  },
  async setSeatsManual({ commit }, payload) {
    await commit("setSeatsManual", payload);
  },
};
