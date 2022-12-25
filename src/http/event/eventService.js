import BaseService from "@/http/baseService";

export default class EventService {
  static getEvents() {
    return BaseService.getInstance().getData("/v1/events");
  }
  static getEventDetails(id) {
    return BaseService.getInstance().getData(`/v1/events/${id}`);
  }
}
