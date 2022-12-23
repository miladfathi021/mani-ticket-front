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
export default {
  name: "Events",
  components: { Button, EventCard },
  computed: {
    events() {
      return [
        {
          id: 1,
          name: "Shakira's new concert",
          hall: {
            name: "Milad Tower",
          },
          artist: {
            thumbnail: "https://picsum.photos/500/500.jpg",
          },
          thumbnail: "https://picsum.photos/500/500.jpg",
          start_date: "09 JAN 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias, architecto dicta in porro vero? Commodi explicabo nesciunt placeat!",
        },
        {
          id: 2,
          name: "Shakira's new concert",
          hall: {
            name: "Milad Tower",
          },
          artist: {
            thumbnail: "https://picsum.photos/500/500.jpg",
          },
          thumbnail: "https://picsum.photos/500/400.jpg",
          start_date: "09 JAN 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias, architecto dicta in porro vero? Commodi explicabo nesciunt placeat!",
        },
        {
          id: 3,
          name: "Shakira's new concert",
          hall: {
            name: "Milad Tower",
          },
          artist: {
            thumbnail: "https://picsum.photos/500/500.jpg",
          },
          thumbnail: "https://picsum.photos/400/500.jpg",
          start_date: "09 JAN 2022",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias, architecto dicta in porro vero? Commodi explicabo nesciunt placeat!",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.home-events {
  min-height: calc(100vh - 30px);
}
</style>
