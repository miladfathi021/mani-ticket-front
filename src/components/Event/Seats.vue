<template>
  <div class="w-full">
    <span
      class="block w-full text-xl font-semibold text-theme-1 border-b pb-2 mt-4"
    >
      Select a Section
    </span>
    <div class="w-full my-8">
      <div
        class="w-10/12 mx-auto h-20 bg-gray-100 border-gray-200 flex items-center justify-center text-gray-400 font-bold rounded-b-full"
      >
        Stage
      </div>
    </div>
    <div class="flex items-center flex-wrap">
      <div
        v-for="(seat, index) in seats"
        :key="index"
        @click="selectSeat(seat)"
        class="ml-4 mb-4 cursor-pointer"
      >
        <span
          class="block w-8 h-8 rounded-sm"
          :class="[
            seat.seat_status === 'pending' ? 'bg-yellow-600' : 'bg-green-600',
          ]"
        >
          {{ seat.column }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seats",
  props: {
    seats: {
      type: Array,
      default: () => [],
    },
    hallId: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    window.Echo.channel("change-seat-status")
      .subscribed(() => {
        console.log("Subscribed");
      })
      .listen("ChangeSeatStatusEvent", (response) => {
        this.$store.dispatch("event/setSeatsManual", response);
        console.log(response, "dddd");
      });
  },
  methods: {
    selectSeat(seat) {
      this.$store.dispatch("event/getSeat", {
        id: this.hallId,
        data: {
          seat_code: seat.seat_code,
          section_id: seat.section_id,
        },
      });
    },
  },
};
</script>

<style scoped></style>
