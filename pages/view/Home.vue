<template>
    <div class="areaDiv home">
        <div class="home-text">
            <span class="bold">HELLO, I'm</span>
        </div>
        <div class="home-title">
            <p class="bold">- WEB DEVELOPER -</p>
        </div>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    height: 900px;
    background-image: url('../../assets/img/lbj_back.jpg');
    background-size: cover;
    text-align: center;
}

.home-text{
    margin-top: 100px;
    font-style: italic;
    font-size: 20px;
}

.home-title{
    font-size: 40px;
    background: linear-gradient(to bottom, #FDC488, #FFE0BF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1018px) {
    /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
    .home {
    width: 100%;
    height: 900px;
    background-image: url('../../assets/img/lbj_back_sm.jpg');
    background-size: cover;
    text-align: center;
    }
}

</style>