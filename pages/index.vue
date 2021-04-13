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
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400&display=swap');

html, body {
  font-family: 'Zilla Slab', serif;
  background-color: #ECECE9;
}

.light {
  font-weight: 300;
}

.regular {
  font-weight: 400;
}

.areaDiv {
  width: 100%;
  height: 73rem;
  padding-top: 2.5rem;
}

.h1{
    border-bottom: 5px solid #444;
    margin-top: 15px;
}

/** 애니메이션 효과 */
.fade-in-box {
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
    
</style>
