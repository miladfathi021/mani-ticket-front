export default {
  methods: {
    getDate(date) {
      date = new Date(date);
      let month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

      return day + " " + month + " " + date.getFullYear();
    },
    getTime(time) {
      let timeArray = time.split(":");
      return timeArray[0] + ":" + timeArray[1];
    },
  },
};
