<template>
  <div id="opinion">
    <div class="opinion-top">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h3>What customers say about GREEMIND?</h3>
          </b-col>
          <b-col>
            <img src="../assets/img/Frame 49.png" alt="Frame-49" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="opinion-bottom">
      <img src="../assets/img/Frame 45.png" alt="Frame-45" class="img-1" />
      <img src="../assets/img/Frame 48.png" alt="Frame-48" class="img-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OpinionSection",
};
</script>

<style>
#opinion {
  min-height: 50vh;
}

#opinion h3 {
  font-weight: bold;
}

.opinion-top {
  margin-top: 100px;
  margin-bottom: 50px;
}

.opinion-top img {
  padding-left: 500px;
}

.opinion-bottom .img-1 {
  padding-right: 25px;
}

.opinion-bottom {
  margin-left: 100px;
}

.opinion-bottom img {
  width: 50%;
  height: 30%;
}
</style>
