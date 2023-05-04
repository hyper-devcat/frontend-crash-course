<template>
  <div id="footer">
    <div class="footer-container">
      <footer class="row py5 my-5 border-top">
        <div class="col mb-3 footer-left">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <h6 class="footer-title">GREENMIND</h6>
          </a>
          <p class="p-1">We help you find your dream plant</p>
          <img src="../assets/img/Frame 51.png" alt="Frame-51" />
        </div>

        <div class="col mb-3"></div>
        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5 class="footer-right">Information</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">About</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Product</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Blog</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="footer-right">Company</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Community</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Career</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Our story</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5 class="footer-right">Contact</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Getting Started</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-muted">Resources</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    <div>
      <p class="p-2">2023 all Right Reserved Term of use GREENMIND</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
#footer {
  min-height: 35vh;
  background: #c1dcdc;
}

.footer-container {
  width: 90%;
  margin-left: 100px;
}

.py5 {
  padding-top: 3rem;
}

.footer-right {
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
}

.footer-container a {
  font-size: 14px;
  font-weight: 300;
}

.footer-title {
  font-family: Quella;
  font-size: 15px;
  color: black;
}

.footer-left .p-1 {
  color: #8b8b8b;
  font-size: 13px;
  width: 130px;
}

.footer-left img {
  width: 150px;
}

#footer .p-2 {
  margin-left: 100px;
  color: #8b8b8b;
  font-size: 15px;
}
</style>
