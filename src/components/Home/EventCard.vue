<template>
  <div @click="goTo(event.id)" class="card" :style="getBgImage">
    <div class="card--bg"></div>
    <div class="card--content">
      <h1>{{ event.name }}</h1>
      <div class="card--content__place">
        <vue-feather type="grid" size="20px" stroke="#ffffff"></vue-feather>
        <span>{{ event.complex.name }}</span>
      </div>
      <div class="card--content__start-date">
        <vue-feather type="calendar" size="20px" stroke="white" />
        <span>{{ getDate(event.date_start) }}</span>
      </div>
      <div class="card--content__button">
        <span>Show Details</span>
        <vue-feather type="arrow-right" size="23px" stroke="#ffffff" />
      </div>
    </div>
  </div>
</template>

<script>
import dateTimeMixin from "@/mixins/DateTimeMixin";

export default {
  name: "EventCard",
  mixins: [dateTimeMixin],
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getBgImage() {
      return {
        backgroundImage: `url(${this.event.image})`,
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

  &--bg {
    @apply w-full h-full hidden;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s linear;
  }

  &:hover {
    padding: unset !important;
  }

  &:hover &--bg {
    @apply block;
  }

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

    &__place {
      @apply text-theme-1 font-medium text-lg font-medium text-white mt-2 flex items-center;

      letter-spacing: 1px;
      & span {
        @apply ml-2;
      }
    }

    &__start-date {
      @apply flex items-center mt-2;

      & span {
        @apply block ml-2 mt-1 text-lg font-normal text-white;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
      }
    }

    &__button {
      @apply absolute left-0 -bottom-32 opacity-0 font-medium flex items-center text-white bg-theme-2 px-3 py-2 rounded-lg;
      transition: all 0.3s linear;
      letter-spacing: 1.2px;

      span {
        @apply mr-2;
      }
    }
  }
  &:hover &--content &--content__button {
    @apply -bottom-20 opacity-100;
  }
}
</style>
