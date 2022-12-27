<template>
  <div v-if="eventDetails" class="event">
    <div class="event--left-side">
      <div class="event--left-side__box">
        <div class="event--left-side__img">
          <img :src="eventDetails.image" :alt="eventDetails.name" />
        </div>
        <span class="block text-2xl font-bold text-theme-1 mt-3">
          {{ eventDetails.name }}
        </span>
        <div class="flex items-center mt-4">
          <vue-feather type="user" size="20px" stroke="#A2A4A8" />
          <span class="block ml-2 text-lg font-medium text-theme-7">
            {{ eventDetails.artist.name }}
          </span>
        </div>
        <div class="flex items-center mt-2">
          <span class="block ml-2 text-sm font-normal text-theme-7">
            {{ eventDetails.description }}
          </span>
        </div>
        <div class="flex items-center mt-5">
          <vue-feather type="map-pin" size="20px" stroke="#A2A4A8" />
          <span class="block ml-2 text-lg font-medium text-theme-7">
            {{ eventDetails.complex.name }}
          </span>
        </div>
        <div class="flex items-center mt-2">
          <span class="block ml-2 text-sm font-normal text-theme-7">
            {{ eventDetails.complex.address }}
          </span>
        </div>
        <div class="flex items-center mt-5">
          <vue-feather type="calendar" size="20px" stroke="#A2A4A8" />
          <span class="block ml-2 text-lg font-medium text-theme-7">
            sales start date
          </span>
        </div>
        <div class="flex items-center mt-2">
          <span class="block ml-2 text-sm font-normal text-theme-7">
            {{ getDate(eventDetails.date_start) }}
          </span>
          <span class="block ml-2 text-sm font-normal text-theme-7">
            {{ getTime(eventDetails.time_start) }}
          </span>
        </div>
      </div>
    </div>
    <div class="event--right-side">
      <div class="event--right-side__box">
        <Halls
          v-if="!hallId"
          :items="eventDetails.halls"
          @hallSelected="setHall"
        />
        <Sections
          v-if="hallId && !sectionId && hall"
          :hall="hall"
          @sectionSelected="setSection"
        />
        <Seats v-if="hallId && sectionId && seats" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dateTimeMixin from "@/mixins/DateTimeMixin";
import Halls from "@/components/Event/Halls";
import Sections from "@/components/Event/Sections";
import Seats from "@/components/Event/Seats";

export default {
  name: "Event",
  components: { Seats, Sections, Halls },
  mixins: [dateTimeMixin],
  data() {
    return {
      hallId: null,
      sectionId: null,
    };
  },
  created() {
    this.$store.dispatch("event/getEventDetails", this.$route.params.id);
  },
  watch: {
    hallId: {
      handler() {
        if (!this.hallId) return;
        this.$store.dispatch("event/getHall", this.hallId);
      },
    },
    sectionId: {
      handler() {
        if (!this.sectionId) return;
        this.$store.dispatch("event/getSeats", {
          hallId: this.hallId,
          sectionId: this.sectionId,
        });
      },
    },
  },
  computed: {
    ...mapGetters({
      eventDetails: "event/eventDetails",
      hall: "event/hall",
      seats: "event/seats",
    }),
  },
  methods: {
    setHall(id) {
      this.hallId = id;
    },
    setSection(id) {
      this.sectionId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  @apply flex items-center h-full;

  &--left-side {
    @apply w-1/3 h-full pl-20 py-10 bg-theme-1 overflow-hidden;

    &__box {
      @apply h-full rounded-l-2xl p-4 bg-gray-50;
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
    }

    &__img {
      @apply rounded-2xl overflow-hidden;
      width: 100%;
      min-height: 300px;
      max-height: 300px;

      & img {
        width: 100%;
        min-height: 300px;
        max-height: 300px;
        object-fit: cover;
      }
    }
  }

  &--right-side {
    @apply w-2/3 h-full pr-20 py-10 bg-gray-100 overflow-hidden;

    &__box {
      @apply bg-white h-full rounded-r-2xl p-4;
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
