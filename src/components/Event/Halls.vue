<template>
  <div class="card grid grid-cols-1 gap-x-4 gap-y-6 px-12">
    <span
      class="block w-full text-xl font-semibold text-theme-1 border-b pb-2 mt-4"
    >
      Select a Date
    </span>
    <div
      v-for="(hall, index) in items"
      :key="index"
      @click="$emit('hallSelected', hall.event_hall_id)"
      class="flex items-center justify-between border border-theme-2 hover:border-theme-1 hover:bg-gray-50 overflow-hidden rounded-lg cursor-pointer"
    >
      <div class="flex items-center">
        <div class="grid grid-cols-1 pl-12 py-4">
          <span class="text-lg font-medium text-theme-1">
            {{ getDate(hall.date_start) }}
          </span>
          <span class="text-base font-normal text-theme-7">
            {{ getTime(hall.time_start) + " - " + getTime(hall.time_end) }}
          </span>
        </div>

        <div class="grid grid-cols-1 ml-12 py-4">
          <span class="text-lg font-medium text-theme-1">{{ hall.name }}</span>
          <span class="text-base font-normal text-theme-7">
            {{ hall.description }}
          </span>
        </div>
      </div>

      <div
        class="card--button w-12 h-full flex items-center justify-center bg-theme-2"
      >
        <vue-feather type="chevron-right" size="20px" stroke="white" />
      </div>
    </div>
  </div>
</template>

<script>
import DateTimeMixin from "@/mixins/DateTimeMixin";

export default {
  name: "Halls",
  mixins: [DateTimeMixin],
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &:hover &--button {
    background-color: #27296d !important;
  }
}
</style>
