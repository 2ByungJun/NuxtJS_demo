<template>
  <div>
    <!-- HOME -->
    <div class="areaDiv home" id="home"></div>

    <!-- ABOUT -->
    <div class="areaDiv" id="about" style="background-color: #C0CFB2;">
      
    </div>

    <!-- SKILL -->
    <div class="areaDiv" id="skill" style="background-color: #8BA989;">

    </div>

    <!-- PROJECT -->
    <div class="areaDiv" id="project" style="background-color: #49654D;">

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.areaDiv {
  width: 100%;
  height: 900px;
}

.home {
  width: 100%;
  height: 900px;
  background-image: url('../assets/img/33.png'); /** 포트폴리오용 이미지가 들어갈 자리 */
  background-size: cover;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
