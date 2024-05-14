<template>
    <div class="project-container">
      <div v-once class="project-list" :key="projectChoiced" @scroll="saveScrollState">
          <div class="project-img-container" v-for="(img, index) in projectList" :key="index">
            <img @load="attScrollState" :src="img.src" alt="imagem do projeto" :class="{selected: (index + 1 == projectChoiced)}">
            <RouterLink :to="`/projects/${projectName}/${index + 1}`"></RouterLink>  
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          projectListProps: Array
      },
      beforeUnmount(){
          this.saveScrollState()
          
        },
        mounted(){
            this.attScrollState()
      },
      data(){
          return {
              projectChoiced: this.$route.params.number,
              projectList: this.projectListProps,
              projectName: this.$route.params.name
          }
      },
      methods: {
        getScrollTop(){
            let Scroll = document.querySelector('.project-list')
            return Scroll.scrollTop
        },
        setScrollTop(value){
            let numberInt = parseInt(value)
            let Scroll = document.querySelector('.project-list')
            Scroll.scrollTop = numberInt
        },
        saveScrollState(){
            let scrollTop = this.getScrollTop()
            localStorage.setItem('projectName', this.projectName)
            localStorage.setItem('scrollSaved', `${scrollTop}`)
        },
        attScrollState(){
            let projectSaved = localStorage.getItem('projectName')
            if(this.projectName === projectSaved) {
                let scrollSaved = localStorage.getItem('scrollSaved')
                this.setScrollTop(scrollSaved)
            }
        }
      },
      watch:{
        '$route.params.number'(value){
            this.projectChoiced = value
        },
      },
  
  }
  </script>
  
  <style scoped>
    .project-container {
        width: 100%;
        height: calc(100% + 7px);
        max-height: 980px;
        max-width: 264px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

    }

    .project-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        gap: 6px;
        padding-top: 7px;
    }

    .project-img-container {
        width: 100%;
        height: 95px;
        min-height: 95px;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
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
        transform: scale(1.1) translateX(-49%);
        border-top: 2px solid white;
        border-bottom: 2px solid white;

    }
    .project-img-container img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
        transition-property: transform;
        
    }


    .project-list::-webkit-scrollbar {
        width: 6px;
    }

    .project-list::-webkit-scrollbar-track {
        background: black;
    }
    .project-list::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 4px;
    }
    .selected {
        transform: scale(1.1) translateX(-49%) !important;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
    }
  </style>