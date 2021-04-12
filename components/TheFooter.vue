<template>
    <div class="card footer">
        <div>
            <b-icon 
                class="cursor-pointer"
                :style="iconVelogStyle" 
                @mouseover="overIcon('velog')" 
                @mouseleave="leaveIcon('velog')" 
                font-scale="1.5" 
                icon="person-square" 
                @click="onClickUrl('https://velog.io/@ieed0205')">
            </b-icon>
            <b-icon 
                class="cursor-pointer"
                :style="iconGitStyle" 
                @mouseover="overIcon('git')"
                @mouseleave="leaveIcon('git')" 
                font-scale="1.5" 
                icon="github" 
                @click="onClickUrl('https://github.com/2ByungJun/NuxtJS_demo')">
            </b-icon>
            <b-icon icon="envelope" font-scale="1.5"></b-icon><span> ieed0205@naver.com</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            iconVelogStyle: { color: 'white'},
            iconGitStyle: { color: 'white'},
        }
    },
    methods:{
        onClickUrl(url){
            window.open(url)
        },
        overIcon(icon){
            switch(icon){
                case 'velog':
                    this.iconVelogStyle = {color: '#F3F481'}
                    break;
                case 'git':
                    this.iconGitStyle = {color: '#F3F481'}
                    break;
            }
        },
        leaveIcon(icon){
            switch(icon){
                case 'velog':
                    this.iconVelogStyle = {color: 'white'}
                    break;
                case 'git':
                    this.iconGitStyle = {color: 'white'}
                    break;
            }
        }
    }
}
</script>

<style scoped>
.cursor-pointer{
    cursor: pointer;
}

svg{
    margin-left: 5px;
    margin-top: 9px;
}

.footer {
    position: fixed;
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #253629;
    color: white;
    align-items: center;
    justify-content: center;
}

</style>