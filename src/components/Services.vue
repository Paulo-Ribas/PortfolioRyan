<template>
    <div :class="{'service': true, reverse, moveComponentToLeft, moveComponentToRight}" :ref="title">
        <div class="img-container">
            <img :src="imgSrc" :alt="altProps">
        </div>
        <CardInfo :showBtnProps="showBtn" :btnTextProps="btnText" :costumizePaddingMarginProps="costumizePaddingMargin" :toProps="to" :maxUniverseProps="maxUniverse" :titleProps="title" :textProps="text" :whatsProps="whats"></CardInfo>
    </div>
</template>
<script>
import CardInfo from './CardInfo.vue'
export default {
    props:{
        btnTextProps: String,
        toProps: String,
        maxUniverseProps: Boolean,
        titleProps: String,
        textProps: String,
        showBtnProps: Boolean,
        imgSrcProps: String,
        altProps: String,
        costumizePaddingMarginProps: Boolean,
        reverseProps: Boolean,
        whatsProps: Boolean,
        moveComponentToLeftProps: Boolean,
        moveComponentToRightProps: Boolean
    },
    components: {CardInfo},
    data(){
        return {
            btnText: this.btnTextProps,
            to: this.toProps,
            maxUniverse: this.maxUniverseProps,
            title: this.titleProps ,
            text: this.textProps,
            showBtn: this.showBtnProps,
            imgSrc: this.imgSrcProps,
            alt: this.altProps,
            costumizePaddingMargin: this.costumizePaddingMarginProps,
            reverse: this.reverseProps,
            whats: this.whatsProps,
            moveComponentToLeft: this.moveComponentToLeftProps,
            moveComponentToRight: this.moveComponentToRightProps,    
        }
    },
    mounted(){
        const observer = new IntersectionObserver(this.handleIntersection, {threshold: 0.4})
        const animateService =  this.$refs[`${this.title}`]

        observer.observe(animateService)
    },
    methods: {
        handleIntersection(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.moveComponentToLeft = false
                    this.moveComponentToRight = false
                    observer.unobserve(entry.target)
                }
            })
        }
    }
}
</script>
<style scoped>
.moveComponentToRight {
    transform: translateX(-20%);
}
.moveComponentToLeft {
    transform: translateX(20%);
}
.reverse {
    flex-direction: row-reverse;
}
.service {
    width: 97%;
    display: flex;
    max-width: 950px;
    justify-content: space-around;
    transition: 0.4s;
  }
  .img-container {
    flex: 0.3;
    position: relative

  }
  .img-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>