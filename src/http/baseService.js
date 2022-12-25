import axios from "axios";

export default class BaseService {
  axiosInstance;
  static instance;

  constructor(axios) {
    this.axiosInstance = axios;
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new BaseService(
        axios.create({
          baseURL: process.env.VUE_APP_BASE_URL,
        })
      );
    }

    return this.instance;
  }

  getData(url, options = null) {
    return this.axiosInstance
      .get(url, options)
      .then((response) => response.data)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  }

  postData(path, payload, options = null) {
    return this.axiosInstance
      .post(path, payload, options)
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  }

  putData(path, payload, params = null) {
    return this.axiosInstance
      .put(path, payload, params)
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  }

  patchData(path, payload, options = null) {
    return this.axiosInstance
      .patch(path, payload, options)
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  }

  deleteData(path, data = null, options = null) {
    return this.axiosInstance
      .delete(path, { data }, options)
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  }
}
