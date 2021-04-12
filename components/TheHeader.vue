<template>
    <div class="card header">
        <div class="row">
            <div class="header-title text-left">
                <h2 class="title">BBANG-JUN</h2>
            </div>
            <div class="header-menu text-right">
                <a class="menu" href="#project"><h3>PROJECT</h3></a>
                <a class="menu" href="#skill"><h3>SKILL</h3></a>
                <a class="menu" href="#about"><h3>ABOUT</h3></a>
                <a class="menu" href="#"><h3>HOME</h3></a>
            </div>
            <div class="header-icon">
                <b-icon icon="justify" font-scale="2"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        smAt(){
            return this.$store.state.smAt
        }
    },
}
</script>

<style scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 46px;
    padding: 10px 20px 10px 20px;
    background-color: #253629;
    color: white;
    text-align: center;
}

.header-title {
    width: 50%;
    align-self: center;
}

.title {
    float: left;
    color: white;
}

.header-menu {
    width: 50%;
    align-self: center;
    color: white;
}

.menu{
    margin-right: 20px;
    float: right;
    color: white;
}

.header-icon{
    display: none;
}

@media screen and (max-width: 1018px) {
    .header-menu {
        display: none;
    }

    .header-icon{
        display: block;
        width: 50%;
        align-self: center;
        text-align: right;
    }
}
</style>