<template>
  <div
    class="navbar bg-white w-11/12 rounded-lg shadow-lg py-4 flex items-center justify-between px-6 mx-auto"
  >
    <div>
      <span class="text-2xl font-bold text-theme-1">MANI</span>
    </div>
    <div class="w-12 h-12 rounded-full border-2 shadow"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 999999;
  //position: -webkit-sticky; /* Safari */
  //position: sticky;
  //top: 0;
  margin-top: 20px;
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.3);
}
</style>
