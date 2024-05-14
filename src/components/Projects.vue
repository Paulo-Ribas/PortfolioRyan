<template>
    <div class="slide-container">
        <div class="slide" >
            <div class="project-box" v-for="(project, index) in projectsTratament" :key="index">
                <img :src="project.img" draggable="false">
                <RouterLink :to="'/projetos/' + project.name + '/' + project.number"></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
    components:{
        RouterLink
    },
    props: {
        projectsProps: Array,
        showRightProps: Boolean,
    },
    data(){
        return {
            projects: this.projectsProps,
            currentTranslate: 0,
            count: 0,
            showRight: this.showRightProps,

        }
    },
    watch: {
        projectsProps(value){
            this.projects = value
        },
        showRightProps(value) {
            if(value){
                this.showRight = value
                console.log(this.showRight)
            }
        }
    },
    computed:{
        projectsTratament(){
            return this.projects.map(project => {
                let newImg = this.replaceImg(project.img, 'https://dbhc8i16f53bc.cloudfront.net/')
                return {name: project.name, img: newImg, number: project.number}
            })
        }
    },
    methods: {
        replaceImg(img, toReplace){
            if(!img.includes('.com')) return '#'
            const parameter = img.split('.com/')[1],
            url = toReplace + parameter
            return url
        }
    }

}
</script>

<style scoped>
    .slide-container {
        width: calc(98% - 25px);
        height: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        max-width: 1280px;
        overflow: hidden;
        margin-top: 10vh;
    }
    .slide {
        width: fit-content;
        height: 100%;
        transform: translateX(0px);
        transition: 0.3s;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 3px;

    }
    .project-box {
        width: 330px;
        height: 220px;
        min-height: 100px;
        position: relative;
        cursor: pointer;
        transition: 0.1s;
        overflow: hidden;
        user-select: none;
    }
    .project-box a {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    .project-box:hover {
        transform: translateY(-5px);
    }
    .project-box img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        transition: 0.3s;
    }
    .project-box img:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 556px) {
        .slide-container {
            width: calc(98% - 53px);

        }
        
    }

</style>