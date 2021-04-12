<template>
    <div class="card header">
        <div class="row">
            <div class="col-md-6 text-left">
                <h2 class="headerName">BBANG-JUN</h2>
            </div>
            <div class="headerMenu col-md-6 text-right">
                <a href="#project"><h3>PROJECT</h3></a>
                <a href="#skill"><h3>SKILL</h3></a>
                <a href="#about"><h3>ABOUT</h3></a>
                <a href="#"><h3>HOME</h3></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
a{
    margin-right: 20px;
    float: right;
    color: #49654D;
}
.header {
    position: fixed;
    left: 0;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 46px;
    background-color: #ECECE9;
    color: white;
    text-align: center;
}

.headerName {
    float: left;
    margin-left: 10px;
    color: #49654D;
}

.headerMenu {
    align-self: center;
    color: #49654D;
}
</style>