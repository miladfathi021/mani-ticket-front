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
};
