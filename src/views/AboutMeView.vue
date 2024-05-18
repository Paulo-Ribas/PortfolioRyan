<template>
    <main id="about">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <br>
                    <h1>
                        <Transition name="FirstText">
                            <span class="about" v-if="loaded">sobre</span>
                        </Transition>
                        <br v-if="!responsive">
                        <Transition name="SecondText">
                            <span class="me" v-if="loaded">mim</span>
                        </Transition>
                        <transition name="svgAnimation">
                            <svg v-if="loaded && !responsive" xmlns="http://www.w3.org/2000/svg" width="6.250rem" height="6.813rem" viewBox="0 0 110 119" fill="none">
                                <path d="M106.048 27.4961L57.8841 1.12639C56.9175 0.597512 55.8334 0.320313 54.7316 0.320312C53.6298 0.320312 52.5457 0.597512 51.5791 1.12639L3.41525 27.4961C2.38203 28.0614 1.51983 28.8942 0.918971 29.9072C0.318115 30.9201 0.000708929 32.0761 0 33.2538V85.5991C0.000708929 86.7769 0.318115 87.9328 0.918971 88.9458C1.51983 89.9588 2.38203 90.7916 3.41525 91.3569L51.5791 117.727C52.5449 118.258 53.6293 118.537 54.7316 118.537C55.8339 118.537 56.9183 118.258 57.8841 117.727L106.048 91.3569C107.081 90.7916 107.943 89.9588 108.544 88.9458C109.145 87.9328 109.462 86.7769 109.463 85.5991V33.2538C109.462 32.0761 109.145 30.9201 108.544 29.9072C107.943 28.8942 107.081 28.0614 106.048 27.4961ZM105.085 85.5991C105.084 85.9911 104.978 86.3757 104.777 86.7126C104.577 87.0496 104.29 87.3266 103.946 87.5148L55.7824 113.884C55.4602 114.061 55.0989 114.153 54.7316 114.153C54.3643 114.153 54.003 114.061 53.6808 113.884L5.51695 87.5148C5.17308 87.3266 4.88603 87.0496 4.68578 86.7126C4.48553 86.3757 4.37942 85.9911 4.37853 85.5991V33.2538C4.37942 32.8619 4.48553 32.4773 4.68578 32.1404C4.88603 31.8034 5.17308 31.5264 5.51695 31.3382L53.6808 4.96855C54.002 4.78928 54.3637 4.69517 54.7316 4.69517C55.0995 4.69517 55.4612 4.78928 55.7824 4.96855L103.946 31.3382C104.29 31.5264 104.577 31.8034 104.777 32.1404C104.978 32.4773 105.084 32.8619 105.085 33.2538V85.5991Z" fill="white"/>
                                <path d="M47.7453 42.2422L65.2129 59.7097L47.7453 77.1773" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
                            </svg>
                        </transition>
                    </h1>
                    <Transition name="svgAnimation">
                        <SetaBottom v-if="loaded && responsive" widthProps="4rem" heightProps="4rem"></SetaBottom>
                    </Transition>
                </div>
                <div class="description-container">
                    <p>
                        Meu nome é Ryann Ghisi, tenho 18 anos e sou um <strong>Web Designer</strong> e <strong>Designer Gráfico</strong> de <adress>Santa Catarina</adress>
                        Ingressei na área de design com o objetivo de aprimorar minhas habilidades empreendedoras e adquirir competências técnicas sólidas. Ao longo do tempo, desenvolvi experiência em design gráfico e <strong>web design</strong>, tornando-me capaz de criar designs funcionais e estéticamente agradáveis. <br> <br> Meu foco principal é atender às necessidades práticas dos meus clientes. Estou à disposição para auxiliá-lo na criação de designs para aplicativos, websites, logos e outros projetos relacionados ao design. Se precisar dos meus serviços ou quiser discutir colaborações, sinta-se à vontade para entrar em contato.
                    </p>
                    <hr>
                    <div class="btn-container">
                        <WhiteBlackBtn textProps="veja meus serviços" toProps="/servicos"></WhiteBlackBtn>
                    </div>
                </div>
            </div>
        </div>
                    
    </main>
    
</template>
<script>
import { useLink } from 'vue-router'
import SetaBottom from '../components/icons/SetaBottom.vue'
import WhiteBlackBtn from '../components/WhiteBlackBtn.vue'

export default {
    components:{SetaBottom, WhiteBlackBtn},
    beforeMount(){
        this.setResponsive()
    },
    head(){
        return {
            title: 'Sobre Mim',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Sou especialista em design web e gráfico. Ofereço design de sites responsivos, landing pages, lojas virtuais, interfaces de aplicativos, logotipos, cartões de visita, banners e UI/UX design. Transformo suas ideias em soluções visuais impactantes e eficientes.'},

            ],
            link: [
                {rel: 'canonical', href: 'https://ryannghisi.com.br/sobre'}
            ]
        }
    },
    data(){
        return {
            loaded: false,
            showContact: false,
            responsive: false,
        }
    },
    watch:{
        '$screen.width'(value){
            this.setResponsive()
        }
    },
    mounted(){
        this.loaded = true
    },
    methods:{
        setResponsive(value = this.$screen.width){
            if(value <= 870) {
                this.responsive = true
            }
            else {
                this.responsive = false
            }
        },   
    },

}

</script>

<style scoped>

#about {
    background-image: url('https://dbhc8i16f53bc.cloudfront.net/backgrounds/pc-sobremim.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height:100%;
    position: relative;
}

#about h1 {
    color: white;
    color: #FFF;
    font-family: Inter;
    font-size: 6rem;
    font-style: normal;
    font-weight: bold;
    line-height: 5.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    -webkit-text-stroke: 4px;
}
#abouut strong small {
    font-family: 'Inknut Antiqua';
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 400;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 2rem;
}
.container {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1425px;
    z-index: 2;
    position: relative;
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 80px;
    justify-content: center;
}
.title {
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 25vh;

}
.about, .me {
    display: inline-block;
}
.title svg {
    position: absolute;
    margin: 10px;
    font-size: 12px;
}
.description-container {
    display: flex;
    align-items: center;
    padding-top: 23vh;
    width: 98%;
    max-width: 640px;
    flex-direction: column;

}
.description-container p {
    font-family: 'Inter';
    color: white;
    border-radius: 15px;
    font-size: 1.350rem;
    height: fit-content;
    font-style: normal;
    line-height: 120.956%; /* 29.029px */
    font-weight: 400;
    letter-spacing: -1.2px;
}
.description-container p a {
    color: white;
    text-decoration: underline;
}
.description-container hr {
    width: 95%;
    max-width: 190px;
    background-color: white;
    align-self: flex-start;
    margin: 20px 0px 30px;
}
.description-container .btn-container {
    align-self: flex-start;
    width: 95%;
    display: flex;
    max-width: 190px;
}

.Opacity-enter-active {
    transition: 0.1s;
}
.Opacity-enter-from {
    opacity: 0.4;
}
.Opacity-enter-to {
    opacity: 1;
}

.FirstText-enter-active {
    transition: 0.7s;
    transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
.FirstText-enter-from {
    transform: translateX(-50%);
    opacity: 0.7;
}
.FirstText-enter-to {
    transform: translateX(0%);
    opacity: 1;
}

.SecondText-enter-active {
    transition: 1.2s;
}
.SecondText-enter-from {
    transform: translateX(-70%);
    opacity: 0.7;    
}
.SecondText-enter-to {
    transform: translateX(0%);
    opacity: 1;
}
.svgAnimation-enter-active {
    transition: 0.6s;
    transition-delay: 1.1s;
}
.svgAnimation-enter-from {
    transform: scale(0);
}
.svgAnimation-enter-to {
    transform: scale(1);
}
.showUp {
    transition: 0.1s;
    animation: opacity;
    animation-fill-mode: forwards;
}

@keyframes opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    
}
@media screen and (max-width: 870px) {
    .container {
        height: fit-content;
    }
    .wrapper {
        flex-direction: column;
        gap: 0px;
    }

    .description-container {
        padding-top: 0%;
        align-items: center;
        max-width: unset;
    }
    .title {
        margin-top: 30px;
        flex: 0.7;
        min-height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 0%;
        align-items: center;
    }
    .title svg {
        position: relative;
    }
  .description-container p {
    padding: 10px 10px;
    font-size: 1.5rem;
    max-width: unset;
    max-height: 280px;
    width: 80%;
    overflow-y: auto;
    height: 96%;
    align-self: center;
  }
  .description-container hr {
    max-width: 400px;
    width: 70%;
    align-self: center;
  }
  .description-container .btn-container {
    align-self: center;
  }
}

@media screen and (max-width: 550px) {
    #about h1 {
        font-size: 4.5rem;
    }
    .description-container p {
        font-size: 1.2rem;
        text-align: center;
        width: 90%;
    }
}

</style>