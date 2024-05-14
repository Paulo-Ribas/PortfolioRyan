<template>
        <RouterLink v-if="!whats" class="btn-black-white" :to="to">{{text}}</RouterLink>
        <a v-if="whats" class="btn-black-white whats" href="">{{text }}</a>
</template>

<script>
export default {
    props: {
        toProps: String,
        textProps: String,
        whatsProps: Boolean,
    },
    data(){
        return {
            to: this.toProps,
            text: this.textProps,
            whats: this.whatsProps,
        }
    }

}
</script>
<style>
    .whats {
        background-color: #1AB152 !important;
        color: white !important;
        -webkit-text-stroke: white 0.5px !important;
    }
    .btn-black-white {
        width: 100%;
        padding: 16px 0px;
        background-color: white;
        color: #181818;
        text-align: center;
        font-family: Inter;
        font-size: 0.763rem;
        font-style: normal;
        font-weight: 800;
        border-radius: 22.967px;
        -webkit-text-stroke: #181818 0.1px;
        line-height: normal;
        text-transform: uppercase;

    }

</style>