<template>
  <section id="about">
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="about-section">
            <h4>About us</h4>
            <p>Order now and appreciate the beauty of nature</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-container class="bv-example-row img-container">
        <b-row>
          <b-col>
            <img src="../assets/img/G1.png" alt="ellipse" class="ellipse" />
          </b-col>
          <b-col>
            <img src="../assets/img/G2.png" alt="ellipse" class="ellipse" />
          </b-col>
          <b-col>
            <img src="../assets/img/G3.png" alt="ellipse" class="ellipse" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-container>
        <b-row>
          <b-col class="about-des">
            <h6>Large Assortment</h6>
            <p>
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </b-col>
          <b-col class="about-des">
            <h6>Fast & Free Shipping</h6>
            <p>
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </b-col>
          <b-col class="about-des">
            <h6>24/7 Support</h6>
            <p>
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style>
#about {
  min-height: 45vh;
}

.img-container {
  min-height: 15vh;
}

.img-container img {
  position: absolute;
  left: 35%;
}

.about-section,
.about-des {
  text-align: center;
}

.about-section h4 {
  padding-top: 3rem;
  font-weight: bold;
}

.about-section p {
  font-size: 0.5rem;
  color: #b1b1b1;
  margin-top: 15px;
}

.about-des h6 {
  font-weight: bold;
}

.about-des p {
  color: #b1b1b1;
  font-size: 0.5rem;
}
</style>
