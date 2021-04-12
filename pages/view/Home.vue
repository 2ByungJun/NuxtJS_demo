<template>
    <div class="areaDiv home">
        <div class="subContext">
            <span class="bold">HELLO, I'm</span>
        </div>
        <div class="mainContext">
            <p class="bold">- LEE BYUNG JUN -</p>
        </div>


    </div>
</template>

<style scoped>
.home {
    width: 100%;
    height: 900px;
    background-image: url('../../assets/img/lbj_back.jpg'); /** 포트폴리오용 이미지가 들어갈 자리 */
    background-size: cover;
    text-align: center;
}

.mainContext{
    font-size: 40px;
    background: linear-gradient(to bottom, #FDC488, #FFE0BF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subContext{
    margin-top: 100px;
    font-style: italic;
    font-size: 20px;
}
</style>