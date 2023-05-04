<template>
  <div id="app">
    <div>
      <TopSection></TopSection>
      <BestSection></BestSection>
      <AboutSection></AboutSection>
      <CateSection></CateSection>
      <OpinionSection></OpinionSection>
      <FooterSection></FooterSection>
    </div>
  </div>
</template>

<script>
import TopSection from "./components/TopSection.vue";
import BestSection from "./components/BestSection.vue";
import AboutSection from "./components/AboutSection.vue";
import CateSection from "./components/CateSection.vue";
import OpinionSection from "./components/OpinionSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    TopSection,
    BestSection,
    AboutSection,
    CateSection,
    OpinionSection,
    FooterSection,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;700;800&display=swap");
@import "../src/assets/font/font.css";

* {
  font-family: "Poppins", sans-serif;
}
</style>
