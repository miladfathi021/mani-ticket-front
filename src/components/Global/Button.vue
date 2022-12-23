<template>
  <div class="btn" :class="[`btn--${size}`, `btn--${variant}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  line-height: 1.5;
  display: inline-block;
  cursor: pointer;

  &--md {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
  }
  &--sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  &--lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  &--primary {
    @apply bg-theme-1;
    color: white;

    &:hover {
      opacity: 0.93;
    }
  }
  &--outline-primary {
    @apply bg-white border border-theme-1 text-theme-1;

    &:hover {
      @apply bg-theme-1 text-white;
    }
  }
}
</style>
