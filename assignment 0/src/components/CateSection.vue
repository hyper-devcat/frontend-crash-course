<template>
  <div id="cate">
    <div class="cate-white">
      <h4>Categories</h4>
      <p>Find what you are looking for</p>
    </div>
    <div class="cate-blue">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <img
              src="../assets/img/Frame 36.png"
              alt="frame-36"
              class="photo-up"
            />
          </b-col>
          <b-col>
            <img
              src="../assets/img/Frame 38.png"
              alt="frame-36"
              class="photo-down"
            />
          </b-col>
          <b-col>
            <img
              src="../assets/img/Frame 37.png"
              alt="frame-36"
              class="photo-up"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="cate-des">
      <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button class="cate-button">
        <span>Expolre</span>&ensp;
        <img src="../assets/img/right-arrow.png" alt="right-arrow" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateSection",
};
</script>

<style>
#cate {
  text-align: center;
}

.cate-white {
  min-height: 20vh;
}

.cate-white h4 {
  padding-top: 3rem;
  font-weight: bold;
}

.cate-white p {
  font-size: 0.5rem;
  color: #b1b1b1;
  margin-top: 15px;
}

.cate-blue {
  min-height: 60vh;
  background-color: #c1dcdc;
}

.cate-blue img {
  height: 50vh;
  width: 35vh;
}

.photo-up {
  position: relative;
  top: -10%;
}

.photo-down {
  position: absolute;
  top: 10%;
  left: 8%;
}

.cate-des {
  background-color: #c1dcdc;
  min-height: 20vh;
}

.cate-des p {
  font-size: 13px;
  color: #707070;
  padding: 0 43em;
}

.cate-button {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: black;
  border-radius: 5px;
  background-color: white;
}

.cate-button span {
  color: #c1dcdc;
}

.cate-button img {
  height: 20px;
  width: 20px;
}
</style>
