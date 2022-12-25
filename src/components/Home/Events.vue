<template>
  <div class="home-events w-full px-20 py-14 bg-white">
    <h1 class="text-5xl font-bold text-theme-1">Events</h1>

    <div v-if="events.length" class="w-full grid grid-cols-3 gap-x-4 mt-16">
      <div v-for="(event, index) in events" :key="index">
        <EventCard :event="event" />
      </div>
    </div>

    <div class="w-full flex items-center justify-center mt-10">
      <Button
        class="rounded"
        variant="outline-primary w-2/12 text-center"
        style="padding-top: 10px !important; padding-bottom: 10px !important"
      >
        View More
      </Button>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/Home/EventCard";
import Button from "@/components/Global/Button";
import { mapGetters } from "vuex";
export default {
  name: "Events",
  components: { Button, EventCard },
  created() {
    this.$store.dispatch("event/getEvents");
  },
  computed: {
    ...mapGetters({
      events: "event/events",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home-events {
  min-height: calc(100vh - 30px);
}
</style>
