<template>
    <section class="project">
        <div class="container-project">
            <div class="project-picked-container">
              <div class="btn-title">
                  <RouterLink v-if="!responsive" to="/projetos" class="return">Voltar</RouterLink>
                  <WhiteBlackBtn v-if="responsive" textProps="Voltar" :whatsProps="false" toProps="/projetos"></WhiteBlackBtn>
                  <!-- <h2>{{projectName}}</h2> -->
              </div>
              <div class="project-img-section">
                  <ProjectList v-if="!responsive" :projectListProps="arrayImgs"></ProjectList>
                  <div class="project-img-container">
                    <img id="img-project" :src="projectImg" alt="imagem do design do projeto selecionado" @click="zoomToggle" @load="setCanZoom" @error="tryFixImage">
                  </div>
                  <ProjectListMq v-if="responsive" :projectListProps="arrayImgs"></ProjectListMq>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectList from '../components/ProjectList.vue';
import ProjectListMq from '../components/ProjectListMq.vue';
import WhiteBlackBtn from '../components/WhiteBlackBtn.vue';
export default {
    components: {
        ProjectList, ProjectListMq, WhiteBlackBtn
    },
    head(){
        return {
            title: `Projeto | ${this.projectName}`,
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Aqui você descobre mais sobre mim, o compromisso com o Design e o motivo por eu ter escolhido essa área' },

            ],
        }
    },
    data() {
        return {
          arrayCreated: [],
          projectName: decodeURI(this.$route.params.name),
          projectImg: '',
          zoom: true,
          responsive: false,
          canZoom: true,
          param: parseInt(this.$route.params.number)

        };
    },
    beforeMount(){
        this.setResponsive()
        
    },
    mounted(){
        document.querySelector('.container').classList.add('noScroll')
        window.addEventListener('resize', this.setCanZoom)
    },
    beforeUnmount(){
        document.querySelector('.container').classList.remove('noScroll')
    },
    created(){
      let array = this.createArray()
      const srcs =this.makeSrcFromArray(array)
      this.arrayCreated = srcs
    },
    computed: {
        arrayImgs() {
            let firstArray = this.createArray();
            let urls = this.makeSrcFromArray(firstArray);
            console.log(urls)

            return urls;
        }
    },
    watch:{
        '$screen.width'(value){
            this.setResponsive(value)
        },
        '$route.params.number'(value){
            this.param = parseInt(value)
            this.createArray()
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
        createArray() {
            let projectArray = [];
            console.log('fui chamado e,', this.projectName, this.param)
            switch (this.projectName) {
                case 'goldentimes':
                    projectArray = ['projetos/projetos/goldentimes/1.png', 'projetos/projetos/goldentimes/2.png','projetos/projetos/goldentimes/4.png', 'projetos/projetos/goldentimes/5.png', 'projetos/projetos/goldentimes/6.png'];
                    this.projectImg = `https://dbhc8i16f53bc.cloudfront.net/${projectArray[this.param - 1]}`
                    break;
                case 'Beth':
                    projectArray = ['projetos/imagensapresentação/2.png', 'projetos/projetos/beth/1.png', 'projetos/projetos/beth/3.png', 'projetos/projetos/beth/4.png'];
                    this.projectImg = `https://dbhc8i16f53bc.cloudfront.net/${projectArray[this.param - 1]}`
                    break;
                case 'amigitos':
                    projectArray = ['projetos/imagensapresentação/3.png', 'projetos/projetos/amigitos/2.png'];
                    this.projectImg = `https://dbhc8i16f53bc.cloudfront.net/${projectArray[this.param - 1]}`
                    break;

            }
            return projectArray;
        },
        makeSrcFromArray(array) {
            let newArray = array.map(link => {
                return { src: 'https://dbhc8i16f53bc.cloudfront.net/' + link};
            });
            return newArray;
        },
        zoomToggle(){
            let img = document.getElementById('img-project')
            if(!this.canZoom) return
            if(this.zoom) {
                img.style.maxHeight = '100%'
                img.style.cursor = 'zoom-in'
                this.zoom = false
            }
            else {
                img.style.maxHeight = 'none'
                img.style.cursor = 'zoom-out'
                this.zoom = true
            }
        },
        setCanZoom(){
            const img = document.getElementById('img-project')
            const windowHeight = window.innerHeight - 70
            console.log( img.offsetHeight, windowHeight)
            
            if(img.offsetHeight - windowHeight >= 0) {
                this.canZoom = true
                img.style.cursor = 'zoom-out'
                return
            } 
            this.canZoom = false
            img.style.cursor = 'auto'
        },
        tryFixImage(){
            if(!this.arrayCreated[this.param]) return this.projectImg = this.arrayCreated[0].src
        }
    },
}
</script>

<style scoped>
    section {
        position: absolute;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.455);
        backdrop-filter: blur(14px);
        z-index: 10;
        left: 50%;
        transform: translateX(-50%);

    }
    .container-project {
        overflow: hidden ;
        display: flex ;
        max-width: 100% ;
        height: 100vh;
        justify-content: center;
    }
    .project-picked-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
        max-width: 1425px;
        margin-top: 11vh;
    }
    
    .btn-title {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }

    .btn-title a {
        border-radius: 0rem 1rem 1rem 0rem;
        background: transparent;
        color: white;
        padding: 10.5px 33px;
        font-family: 'Roboto';
        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        width: fit-content;
        font-size: 16px;
        border: 1.6px solid #D9D9D9;
        margin: 13px 0px 7px 0px;
        -webkit-text-stroke: 0.2px #D9D9D9;
        transition: 0.5s;
    
    }
    .btn-title a:hover {
        background: #181818;
    }
    .btn-title h2 {
        color: white;
        font-size: 1.3rem;
        font-family: 'Inknut Antiqua';
        text-transform: uppercase;
        width: calc(100% - 294px);
    }
    .project-img-section {
        width: 100%;
        height: calc(100% - 11vh);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
    .project-img-container {
        height: calc(100% - 11vh);
        flex: 1;
        overflow-y: auto;
        display: flex;
        align-self: flex-start;
        justify-content: center;
    }
    .project-img-container img {
        height: fit-content;
        width: fit-content;
        max-height: none;
        max-width: 100%;
        cursor: auto;

    }
    .project-img-container::-webkit-scrollbar {
        width: 6px;
    }

    .project-img-container::-webkit-scrollbar-track {
        background: black;
    }
    .project-img-container::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 4px;
    }

    @media screen and (max-width: 556px) {
        .project-picked-container {
            margin-top: 5vh;
            gap: 10px;
        }

        .project-img-section {
            flex-direction: column;
            height: calc(100% - 5vh);
            justify-content: unset;
        }
        .btn-title {
            width: 95%;
            align-self: center;
        }
        .project-img-container {
            flex: none;
            height: calc(60% - 5vh);
            align-items: flex-start;
        }
        .project-img-container img {
            max-width: 95%;
        }
        :deep(.btn-title){
            max-width: 200px;
            width: 70%;
            font-size: 1.5rem;
        }
        :deep(.btn-title a){
            font-size: 1rem;
            padding: 12px 0px;
        }

    }

</style>