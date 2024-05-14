<template>
    <div :class="{'card-container': true, maxUniverse}">
        <h3>{{title}} <SetaRotate widthProps="3rem" heightProps="3rem"></SetaRotate></h3>
        <p>{{text}}</p>
        <div :class="{'btn-container': true, costumizePaddingMargin}" v-if="showBtn">
            <WhiteBlackBtn :whatsProps="whats"  :textProps="btnText" :toProps="to" ></WhiteBlackBtn>
        </div>
    </div>
</template>

<script>
import SetaRotate from './icons/SetaRotate.vue'
import WhiteBlackBtn from './WhiteBlackBtn.vue'
export default {
  components: { SetaRotate, WhiteBlackBtn },
  props: {
    titleProps: String,
    textProps: String,
    showBtnProps: Boolean,
    toProps: String,
    btnTextProps: String,
    maxUniverseProps: Boolean,
    costumizePaddingMarginProps: Boolean,
    whatsProps: Boolean,
  },
  data(){
    return {
        title: this.titleProps,
        text: this.textProps,
        showBtn: this.showBtnProps,
        to: this.toProps,
        btnText: this.btnTextProps,
        maxUniverse: this.maxUniverseProps,
        costumizePaddingMargin: this.costumizePaddingMarginProps,
        whats: this.whatsProps
    }
  }

}
</script>

<style scoped>
    .maxUniverse {
        max-width: 560px !important;
    }
    .costumizePaddingMargin {
        padding-top: 15px !important;
        margin-top: 5px !important;
    }
    .card-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 8px;
        min-width: 320px;
        max-width: 386px;
    }
    .card-container h3 {
        font-family: Inter;
        font-size: 1.6rem;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        position: relative;
        width: fit-content;
        display: inline-block;
        padding-right: 70px;
        color: white;
    }
    .card-container p {
        color: #FFF;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120.956%; /* 24.191px */
        letter-spacing: -1px;
    }
    .btn-container {
        width: 65%;
        max-width: 280px;
        display: flex;
        padding-top:30px;
        margin-top: 30px;
        border-top: 1px solid white;
    }


</style>