<template>
    <main id="projects">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h1>
                        <Transition name="Title">
                            <span v-if="loaded">
                                projetos
                            </span>
                        </Transition>
                        <Transition name="svgAnimation">
                            <svg  v-if="loaded && !responsive" xmlns="http://www.w3.org/2000/svg" width="5.250rem" height="5.813rem" viewBox="0 0 110 119" fill="none">
                                <path d="M106.048 27.1753L57.8841 0.805587C56.9175 0.276711 55.8334 -0.000488281 54.7316 -0.000488281C53.6298 -0.000488281 52.5457 0.276711 51.5791 0.805587L3.41525 27.1753C2.38203 27.7406 1.51983 28.5734 0.918971 29.5864C0.318115 30.5993 0.000708929 31.7553 0 32.933V85.2783C0.000708929 86.4561 0.318115 87.612 0.918971 88.625C1.51983 89.638 2.38203 90.4708 3.41525 91.0361L51.5791 117.406C52.5449 117.937 53.6293 118.216 54.7316 118.216C55.8339 118.216 56.9183 117.937 57.8841 117.406L106.048 91.0361C107.081 90.4708 107.943 89.638 108.544 88.625C109.145 87.612 109.462 86.4561 109.463 85.2783V32.933C109.462 31.7553 109.145 30.5993 108.544 29.5864C107.943 28.5734 107.081 27.7406 106.048 27.1753ZM105.085 85.2783C105.084 85.6703 104.978 86.0549 104.777 86.3918C104.577 86.7288 104.29 87.0058 103.946 87.194L55.7824 113.564C55.4602 113.74 55.0989 113.832 54.7316 113.832C54.3643 113.832 54.003 113.74 53.6808 113.564L5.51695 87.194C5.17308 87.0058 4.88603 86.7288 4.68578 86.3918C4.48553 86.0549 4.37942 85.6703 4.37853 85.2783V32.933C4.37942 32.5411 4.48553 32.1565 4.68578 31.8196C4.88603 31.4826 5.17308 31.2056 5.51695 31.0174L53.6808 4.64775C54.002 4.46848 54.3637 4.37437 54.7316 4.37437C55.0995 4.37437 55.4612 4.46848 55.7824 4.64775L103.946 31.0174C104.29 31.2056 104.577 31.4826 104.777 31.8196C104.978 32.1565 105.084 32.5411 105.085 32.933V85.2783Z" fill="white"/>
                                <path d="M72 51.7439L54.5325 69.2114L37.0649 51.7439" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
                            </svg>
                        </Transition>
                    </h1>
                    <Transition name="svgAnimation">
                        <SetaBottom v-if="loaded && responsive" heightProps="4.5rem" widthProps="4.5rem"></SetaBottom>
                    </Transition>
                </div>
                <RouterView></RouterView>
                <div class="projects-container">
                    <Transition name="TesteAnimation">
                        <Projects :projectsProps="projects" :showRightProps="showRight" :showLeftProps="false" v-if="loaded"></Projects>
                    </Transition>
                    </div>
            </div>
        </div><!--fim container-->
    </main>
    
</template>
<script>
import  Projects from '../components/Projects.vue';
import SetaBottom from '../components/icons/SetaBottom.vue';
import SetaLeft from '../components/icons/SetaLeft.vue';
import SetaRight from '../components/icons/SetaRight.vue';


export default {
    components: {Projects, SetaLeft, SetaRight, SetaBottom},
    beforeMount(){
        this.setResponsive()
    },
    head(){
        return {
            title: 'Sobre Mim',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Explore nossa diversificada coleção de trabalhos recentes. De sites responsivos a logotipos marcantes, cada projeto é único e feito sob medida para nossos clientes.'},

            ],
            link: [
                {rel: 'canonical', href: 'https://ryannghisi.com.br/projetos'}
            ]
        }
    },
    mounted(){
        this.loaded = true
    },
    data(){
        return {
            currentTranslate: 0,
            showRight: false,
            countLeft: 0,
            countRight: 0,
            countGeneral: 0,
            doubled: false,
            isDragging: false,
            prevTranslate: 0,
            startMousePosition: 0,
            loaded: false,
            responsive: false,
            projects:[{name:'goldentimes', img: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/projetos/imagensapresenta%C3%A7%C3%A3o/13.png', number: '1'}, 
            {name: 'Beth', img: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/projetos/imagensapresenta%C3%A7%C3%A3o/2.png', number: '1'},
            {name: 'amigitos', img: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/projetos/imagensapresenta%C3%A7%C3%A3o/3.png', number: '1'},
            
        ],
        
        }
    },
    watch:{
        '$screen.width'(value){
            this.setResponsive(value)
        }
    },
    methods: {
        setResponsive(value = this.$screen.width){
            if(value <= 556) {
                this.responsive = true
            }
            else {
                this.responsive = false
            }
        },
    }
}

</script>

<style scoped>

#projects {
    background-image: url('https://dbhc8i16f53bc.cloudfront.net/backgrounds/projetosbackground.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 100%;
    position: relative;
}

#projects h1 {
    color: white;
    color: #FFF;
    font-family: Inter;
    font-size: 6rem;
    font-style: normal;
    line-height: 5.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
}
#projects h1 span {
    -webkit-text-stroke: 5px;
    font-weight: normal;


}
#projects strong small {
    font-family: 'Inter';
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 400;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 2rem;
    display: flex;
}
.container {
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.noScroll {
        overflow-y: hidden !important;
        max-width: unset  !important;
    }
.shadow {
    background-color: #181818;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    width: 100%;
}
.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 700px;
}
.title {
    display: flex;
    justify-content: center;
    margin-top: 21vh;
}
.title svg {
    margin-top: 20px;
}
.projects-container {
    display: flex;
    justify-content: center;
    position: relative;
}


.svgAnimation-enter-active {
    transition: 0.6s;
    transition-delay: 0.7s;
}
.svgAnimation-enter-from {
    transform: scale(0);
}
.svgAnimation-enter-to {
    transform: scale(1);
}
.Title-enter-active {
    transition: 0.7s;
}
.Title-enter-from {
    transform: translateY(100px);
    opacity: 0.7;
}
.Title-enter-to {
    transform: translateY(0px);
    opacity: 1;
}

@media screen and (max-width: 556px) {
    .wrapper {
        flex-direction: column;
    }
    #projects h1 {
        color: white;
        font-family: Inter;
        font-size: 4.5rem;
        font-style: normal;
        font-weight: bold;
        line-height: 5.7rem;
        text-transform: uppercase;
        word-spacing: 6px;
        -webkit-text-stroke: 4px;
        padding-top: 0%;
        width: fit-content;
        max-width: 99%;
        color: #FFF;
        text-align: center;
    }
    .title {
        flex-direction: column;
        align-items: center;
        flex: 1;
    }
    .projects-container {
        flex: 1;
    }

    .SecondText-enter-active {
    transition: 0.7s;
    }
    
}
</style>