<template>
    <div class="project-container">
      <div class="project-list" :key="projectChoiced">
          <div class="project-img-container" v-for="(img, index) in projectList" :key="index">
            <img :src="img.src" alt="imagem do projeto" :class="{selected: (index + 1 == projectChoiced)}">
            <RouterLink :to="`/projetos/${projectName}/${index + 1}`"></RouterLink>  
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          projectListProps: Array
      },
      data(){
          return {
              projectChoiced: this.$route.params.number,
              projectList: this.projectListProps,
              projectName: this.$route.params.name
          }
      },
      mounted(){
          console.log('quantas vezes?')
      },
      watch:{
        '$route.params.number'(value){
            this.projectChoiced = parseInt(value)
            this.toggleClassLists(value)

        }
      },
      methods: {
        toggleClassLists(value){
            try {
                this.$refs[value][0].classList.add('selected')
                const entries = Object.entries(this.$refs)
               entries.forEach((target, index) => {
                    if(value != index + 1) target[1][0].classList.remove('selected')
                })
                
            } catch (error) {
                return
            }

        }
      }
  
  }
  </script>
  
  <style scoped>
    .project-container {
        width: 100%;
        max-height: 980px;
        max-width: 313px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: calc(40% - 11vh);

    }

    .project-list {
        width: 100%;
        height: 96%;
        display: flex;
        overflow-y: hidden;
        overflow-x: auto;
        gap: 6px;
        padding: 7px 2px;
    }

    .project-img-container {
        width: 99%;
        height: calc(100% - 2px);
        max-height: 195px;
        min-height: 95px;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        max-width: 100px;
        min-width: 80px;
    }
    .project-img-container a {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .project-img-container:hover {
        transform: translateY(-2px);
    }
    .project-img-container:hover > img {
        transform: scale(1.1) translate(-50%, -49%);
        border-top: 2px solid white;
        border-bottom: 2px solid white;

    }
    .project-img-container img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
        transition-property: transform;
        
    }


    .project-list::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    .project-list::-webkit-scrollbar-track {
        background: black;
    }
    .project-list::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 4px;
    }
    .selected {
        transform: scale(1.1) translate(-50%, -49%) !important;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
    }
  </style>