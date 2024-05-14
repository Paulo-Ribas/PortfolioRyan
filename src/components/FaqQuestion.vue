<template>
    <div class="question-container" @click="showAnswer = !showAnswer">
      <h4 class="question">{{question}} <CarrotBottom></CarrotBottom></h4>
      <transition name="answer">
          <p class="answered" v-html="answered" v-if="showAnswer"></p>
      </transition>
    </div>
  </template>
  <script>
  import CarrotBottom from './CarrotBottom.vue'
  export default {
      props: {
          questionProps: String,
          answeredProps: String,
      },
      data(){
        return {
            question: this.questionProps,
            answered: this.answeredProps,
            showAnswer: false,
        }
      },
      components: {CarrotBottom}
  
  }
  </script>
  
  <style scoped>

    .question-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 11px;
        border: 1px solid #FFF;
        cursor: pointer;
        padding: 12px;
    }

    .question {
        color: #FFF;
        font-family: Inter;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 120.956%; /* 21.772px */
        letter-spacing: -0.9px;
        width: 100%;
        position: relative;
    }
    .question svg {
        position: absolute;
        right: 0%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .answered {
        color: #FFF;
        font-family: Inter;
        font-size: 1rem;
        margin-top: 5px;
        font-style: normal;
        font-weight: 400;
        line-height: 120.956%; /* 19.353px */
        letter-spacing: -0.8px;
        overflow: hidden;
        height: 100%;
    }

    .answer-enter-active {
        transition: 2s;
    }
    .answer-enter-from {
        height: 0%;
    }
    .answer-enter-to {
        height: 100%;
    }
  
  </style>