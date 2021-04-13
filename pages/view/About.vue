<template>
    <div class="areaDiv container" id="about">
        <h1 class="h1">About</h1>
        <div class="row">
            <b-img thumbnail fluid src="../../assets/img/lbj.jpg" alt="lbj" class="img"></b-img>
            <div class="about-text-div font-ssans">
                <p>안녕하세요</p>
                <p>머릿 속에 있는 것을 행동으로 실천하는 개발자를 목표를 가진 이병준입니다.</p>
                <p>기록하고 공유하는 것을 즐기며, 다양한 플랫폼을 활용하려고 합니다.</p>
                <p>현재는 웹/앱 풀스택 개발을 목표로 지향하고 있습니다.</p>
            </div>
        </div>
        <br>
        <h1 class="h1">Career</h1>
        <div class="row">
            <div class="about-text-div font-ssans">
                <p>순천향대학교 컴퓨터소프트웨어 공학과 학사졸업 <br>(2015.03~2021.02)</p>
                <p>㈜인실리코젠 개발자 <br>(2020.07~현)</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;900&display=swap');

#about{
    padding: 100px;
}

.about-text-div{
    margin-top: 20px;
    margin-left: 10px;
    font-size: 20px;
}

.font-ssans{
    font-family: 'Noto Sans KR', sans-serif;
}

.img{
    max-width: 20rem; 
    max-height: 20rem;
    margin-left: 1rem;
    margin-top: 2rem;
}
</style>