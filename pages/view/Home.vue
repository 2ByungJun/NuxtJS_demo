<template>
    <div class="areaDiv home" id="home">
        <div class="home-text">
            <span class="light">HELLO, I'm</span>
        </div>
        <div class="home-title">
            <p class="light">- WEB DEVELOPER -</p>
        </div>
    </div>
</template>

<style scoped>
.home {
    background-image: url('../../assets/img/lbj_back.jpg');
    background-size: cover;
    text-align: center;
}

.home-text{
    margin-top: 100px;
    font-style: italic;
    font-size: 30px;
}

.home-title{
    font-size: 60px;
    background: linear-gradient(to bottom, #DCC97B, #FFE0BF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1018px) {
    /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
    .home {
    width: 100%;
    height: 73rem;
    background-image: url('../../assets/img/lbj_back_sm.jpg');
    background-size: cover;
    text-align: center;
    }

    .home-text{
    margin-top: 36px;
    font-style: italic;
    font-size: 30px;
}

}

</style>