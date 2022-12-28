<template>
  <div v-if="hall" class="card grid grid-cols-1 gap-x-4 gap-y-6 px-12">
    <span
      class="block w-full text-xl font-semibold text-theme-1 border-b pb-2 mt-4"
    >
      Select a Section
    </span>
    <div class="w-full mt-8">
      <div
        class="w-10/12 mx-auto h-20 bg-gray-100 border-gray-200 flex items-center justify-center text-gray-400 font-bold rounded-b-full"
      >
        Stage
      </div>

      <div
        :class="[
          { 'one-section': hall.sections.length === 1 },
          { 'two-section': hall.sections.length === 2 },
          { 'three-section': hall.sections.length === 3 },
          { 'four-section': hall.sections.length === 4 },
        ]"
      >
        <div
          v-for="(section, index) in hall.sections"
          :key="index"
          @click="$emit('sectionSelected', section.id)"
          class="sections"
        >
          <span>{{ section.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sections",
  props: {
    hall: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sections {
}
.one-section {
  @apply w-full grid mt-4;
  grid-template-columns: 1fr 2fr 1fr;

  & div:first-child {
    @apply flex h-24 bg-theme-2 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}
.two-section {
  @apply grid gap-4 mt-4;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;

  & div:first-child {
    @apply flex h-24 bg-theme-2 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 2;
    grid-column-end: 3;
  }
  & div:last-child {
    @apply flex h-24 bg-theme-3 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
.three-section {
  @apply grid gap-4 mt-4;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 3fr;

  & div:first-child {
    @apply flex h-24 bg-theme-3 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  & div:nth-child(2) {
    @apply flex h-48 bg-theme-4 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  & div:last-child {
    @apply flex h-48 bg-theme-5 items-center justify-center text-white font-bold rounded-lg cursor-pointer;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}
.four-section {
  @apply grid gap-4;
}
</style>
