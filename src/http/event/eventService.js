import BaseService from "@/http/baseService";

export default class EventService {
  static getEvents() {
    return BaseService.getInstance().getData("/v1/events");
  }
  static getEventDetails(id) {
    return BaseService.getInstance().getData(`/v1/events/${id}`);
  }
  static getHall(id) {
    return BaseService.getInstance().getData(`/v1/halls/${id}`);
  }
  static getSeats(payload) {
    return BaseService.getInstance().getData(
      `/v1/seats/${payload.hallId}/${payload.sectionId}`
    );
  }
  static getSeat(payload) {
    return BaseService.getInstance().putData(
      `/v1/seats/${payload.id}/status`,
      payload.data
    );
  }
}
