<template>
  <div class="w-full">
    <Navbar />
    <HomeHeader />
    <Events />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/Home/HomeHeader";
import Navbar from "@/components/Global/Navbar";
import Events from "@/components/Home/Events";
export default {
  name: "HomeView",
  components: {
    Events,
    Navbar,
    HomeHeader,
  },
};
</script>
