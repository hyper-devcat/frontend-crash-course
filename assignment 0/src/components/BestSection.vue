<template>
  <section id="best">
    <b-container class="bv-example-row best-container">
      <b-row class="text-center">
        <b-col class="best-one">
          <h5>Best Selling Plants</h5>
          <p>Easiest way to healthy life by buying your favorite plants</p>
          <button class="best-button">
            <span>See more</span>&ensp;
            <img src="../assets/img/right-arrow.png" alt="right-arrow" />
          </button>
        </b-col>
        <b-col>
          <img
            class="best-photo"
            src="../assets/img/Frame 9.png"
            alt="frame-9"
          />
          <h6>Natural Plants</h6>
          <h6 class="price">P 1,400.00</h6>
        </b-col>
        <b-col>
          <img
            class="best-photo"
            src="../assets/img/Frame 8.png"
            alt="frame-8"
          />
          <h6>Artificial Plants</h6>
          <h6 class="price">P 900.00</h6>
        </b-col>
        <b-col>
          <img
            class="best-photo"
            src="../assets/img/Frame 7.png"
            alt="frame-7"
          />
          <h6>Artificial Plants</h6>
          <h6 class="price">P 3,500.00</h6>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "BestSection",
};
</script>

<style scoped>
#best {
  min-height: 45vh;
  text-align: left;
}
.best-one h5 {
  font-weight: bold;
}

.best-one,
.best-container h6 {
  text-align: left;
}
.best-button {
  border: 0;
  line-height: 3;
  padding: 0 15px;
  font-size: 0.5em;
  text-align: center;
  color: black;
  border-radius: 5px;
  background-color: #c1dcdc;
}

.best-button img {
  height: 15px;
  width: 15px;
  margin: 0;
}

.best-container .col {
  margin-bottom: 30px;
}

.best-container .best-photo {
  margin-bottom: 10px;
}
.best-container p {
  font-size: 10px;
  color: #c2c2c2;
}

.price {
  color: #c2c2c2;
}
</style>
