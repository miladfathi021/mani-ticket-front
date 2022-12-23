<template>
  <div @click="goTo(event.id)" class="card" :style="getBgImage">
    <div class="card--content">
      <h1>{{ event.name }}</h1>
      <div class="card--content__start-date">
        <vue-feather type="calendar" size="25px" stroke="white"></vue-feather>
        <span>Starting</span>
        <span>{{ event.start_date }}</span>
      </div>
      <div class="card--content__button">
        <span>Show Details</span>
        <vue-feather
          type="arrow-right"
          size="25px"
          stroke="yellow"
        ></vue-feather>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getBgImage() {
      return {
        backgroundImage: `url(${this.event.thumbnail})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    },
  },
  methods: {
    goTo(id) {
      return this.$router.push({
        name: "eventDetails",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply relative w-full bg-white p-2 cursor-pointer rounded-2xl overflow-hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 500px;

  &:hover &--content {
    @apply bottom-32;
  }

  &--content {
    @apply absolute left-4 bottom-12;
    transition: all 0.2s linear;

    h1 {
      @apply text-3xl font-bold text-white;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      letter-spacing: 1.2px;
    }

    &__start-date {
      @apply flex items-center mt-3;

      & span {
        @apply block ml-2 mt-1 text-base font-normal text-white;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
      }
    }

    &__button {
      @apply w-1/2 absolute left-0 -bottom-32 opacity-0 flex items-center text-yellow-400 border-2 border-yellow-400 px-3 py-2 rounded-lg;
      transition: all 0.3s linear;

      span {
        @apply mr-3;
      }
    }
  }
  &:hover &--content &--content__button {
    @apply -bottom-20 opacity-100;
  }
}
</style>
