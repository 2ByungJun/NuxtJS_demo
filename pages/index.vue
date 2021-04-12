<template>
  <div>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
  </div>
</template>

<script>
import Home from '../pages/view/Home.vue'
import About from '../pages/view/About.vue'
import Skill from '../pages/view/Skill.vue'
import Project from '../pages/view/Project.vue'

export default {
  components:{
    Home,
    About,
    Skill,
    Project
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400&display=swap');

html, body {
  font-family: 'Zilla Slab', serif;
}

.light {
  font-weight: 300;
}

.regular {
  font-weight: 400;
}

.areaDiv {
  width: 100%;
  height: 900px;
  padding-top: 46px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
