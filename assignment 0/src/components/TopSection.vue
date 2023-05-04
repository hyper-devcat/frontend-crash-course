<template>
  <div id="top">
    <div>
      <b-navbar toggleable="lg" class="top-nav">
        <b-navbar-brand href="#" class="green">greenmind</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="col-menu">
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#" active>Home </b-nav-item>
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#">Products</b-nav-item>
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#"></b-nav-item>
            <b-nav-item href="#">Contacts</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <img src="../assets/img/Frame 2.png" alt="" />
            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="top-page">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-row>
              <b-col>
                <h1>Buy your <br />dream plants</h1>
              </b-col>
              <div class="w-100"></div>
              <b-col>
                <b-row>
                  <b-col>
                    <h6>50+</h6>
                    <p>Plant Species</p>
                  </b-col>
                  <b-col cols="1" class="top-col">|</b-col>
                  <b-col>
                    <h6>100+</h6>
                    <p>Customers</p>
                  </b-col>
                </b-row>
              </b-col>
              <div class="w-100"></div>
              <b-col>
                <form class="navSearch">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                  />
                  <button>
                    <img src="../assets/img/search.png" alt="search" />
                  </button>
                </form>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-plant">
            <img src="../assets/img/1682960992749.jpg" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection",
};
</script>

<style>
#top {
  min-height: 55vh;
  background-color: #ffffff;
}

.top-page h6 {
  font-size: 25px;
}

.top-page p {
  font-size: 15px;
}

.top-nav {
  font-weight: bolder;
  font-size: 15px;
  margin: 0 100px 0 100px;
  padding-left: 0;
  padding-right: 0;
}

.top-col {
  font-size: 3rem;
  font-weight: 100;
}

.green {
  font-family: Quella;
  text-transform: uppercase;
}

.navSearch {
  display: flex;
}

.navSearch input {
  padding-left: 12px;
  height: 50px;
  width: 70%;
  border-radius: 10px 0 0 10px;
  border: 0;
  font-size: 12px;
}

.navSearch button {
  height: 50px;
  border: 0;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  background-color: #ffffff;
  outline: none;
}

.navSearch img {
  background-color: #c1dcdc;
  padding: 9px;
  border-radius: 10px;
  height: 35px;
}

.top-page {
  padding: 20px 20px 0 20px;
  min-height: 40vh;
  min-width: 50vw;
  background: #c1dcdc;
  margin: 10px 100px 10px 100px;
  border-radius: 20px;
}

.top-page h1 {
  font-weight: bolder;
}

.img {
  padding: 10px 0 0 0;
  height: 20px;
  width: 20px;
}

.col-plant img {
  height: 350px;
}
</style>
