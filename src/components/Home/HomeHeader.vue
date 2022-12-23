<template>
  <div
    class="home-header w-full relative flex items-center justify-between px-20"
  >
    <div class="w-1/2 flex items-center justify-center">
      <div>
        <h1 class="text-6xl font-bold tracking-wide text-theme-1">Book Your</h1>
        <div
          class="relative text-6xl font-bold tracking-wide my-3 flex items-center text-theme-1"
        >
          <h2>Tickets For</h2>
          <span class="block ml-3">Concert</span>
        </div>
        <p class="font-medium tracking-wide text-xl text-theme-1">
          Safe, secure, reliable ticketing. Your ticket to live entertainment
        </p>
      </div>
    </div>
    <div class="event-image relative w-1/2 rounded-3xl">
      <div class="event-image--bg"></div>
      <div class="event-image--bg"></div>
      <div class="event-image--bg"></div>
      <div class="event-image--bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      types: [
        {
          color: "text-theme-3",
          title: "MOVIE",
        },
        {
          color: "text-theme-4",
          title: "CONCERT",
        },
      ],
    };
  },
  mounted() {
    // window.setInterval(() => {
    //   this.selectAType();
    // }, 5000);
  },
  computed: {
    getType() {
      return this.types[0];
    },
  },
  methods: {
    selectAType() {
      const first = this.types.shift();
      this.types = this.types.concat(first);
    },
  },
};
</script>

<style lang="scss" scoped>
.event-image {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url("https://media.npr.org/assets/img/2020/02/07/shakira-and-jlo-super-bowl_custom-3d8abcb6940cae2c6a8a28547343ba77b0c1397e.jpg");
  background-size: cover;
  background-position: center center;

  &--bg {
    &:nth-child(1) {
      height: 236px;
      background-color: transparent;
      outline: 2px solid #ffffff;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-child(2) {
      height: 397px;
      background-color: transparent;
      outline: 2px solid #ffffff;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 6;
    }
    &:nth-child(3) {
      height: 313px;
      background-color: transparent;
      outline: 2px solid #ffffff;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 7;
    }
    &:nth-child(4) {
      height: 154px;
      background-color: transparent;
      outline: 2px solid #ffffff;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 6;
      grid-row-end: 7;
    }
  }
}
.home-header {
  height: calc(100vh - 70px);
}
</style>
