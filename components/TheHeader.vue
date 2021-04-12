<template>
    <div class="header">
        <div class="row header-div">
            <div class="header-title text-left">
                <h3 class="title light">BBANG-JUN</h3>
            </div>
            <div class="header-menu text-right">
                <a class="menu" href="#project"><h3>PROJECT</h3></a>
                <a class="menu" href="#skill"><h3>SKILL</h3></a>
                <a class="menu" href="#about"><h3>ABOUT</h3></a>
                <a class="menu" href="#"><h3>HOME</h3></a>
            </div>
            <div class="header-icon">
                <b-icon 
                    icon="justify" 
                    class="cursor-pointer"
                    font-scale="2" 
                    :style="iconStyle"
                    @click="onClickIcon"
                    @mouseover="overIcon" 
                    @mouseleave="leaveIcon"
                    v-b-toggle.sidebar-no-header
                    >
                </b-icon>
            </div>

            <b-sidebar 
                bg-variant="dark"
                text-variant="light"
                id="sidebar-no-header"
                aria-labelledby="sidebar-no-header-title"
                right 
                no-header
                shadow>
            <template #default="{ hide }">
                <div class="p-3">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item href="#home" >HOME</b-nav-item>
                            <b-nav-item href="#about" >ABOUT</b-nav-item>
                            <b-nav-item href="#skill" >SKILL</b-nav-item>
                            <b-nav-item href="#project" >PROJECT</b-nav-item>
                        </b-nav>
                    </nav>
                    <b-button variant="outline-light" block @click="hide">Close</b-button>
                </div>
            </template>
            </b-sidebar>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            iconStyle: {color: 'white'},
        }
    },
    methods: {
        overIcon(){
            this.iconStyle = {color: '#F3F481'}
        },
        leaveIcon(){
            this.iconStyle = {color: 'white'}
        },
        onClickIcon(){
            this.$store.commit('updateDrawer')
        }
    }
}
</script>

<style scoped>
.cursor-pointer{
    cursor: pointer;
}

.header {
    position: fixed;
    left: 0;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 2.5rem;
    padding: 10px 20px 10px 20px;
    text-align: center;
}

.header-div {
    padding: 5px;
}

.header-title {
    width: 50%;
    align-self: center;
    color: white;
}

.title {
    float: left;
}

.header-menu {
    width: 50%;
    align-self: center;
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
        margin-bottom: 5px;
        align-self: center;
        text-align: right;
    }

    .nav-link{
        color: white;
    }
}
</style>