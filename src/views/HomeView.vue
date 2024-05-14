<template>
    <main id="home">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h1>
                        <strong> 
                            <small v-if="loaded">
                                Web Designer e Designer Gráfico
                            </small>
                        </strong>
                        <span class="name-container">
                        <Transition name="FirstText">
                            <span v-if="loaded" class="name">
                                ryann
                            </span>
                        </Transition>
                        <Transition name="SecondText">
                            <span v-if="loaded" class="secondName">
                                ghisi
                            </span>
                        </Transition>
                        </span>
                    </h1>
                    <hr>
                    <h2>solicite um design demonstrativo para seu site <br> gratuitamente</h2>
                    <Transition name="svgAnimation">
                        <SetaBottom v-if="loaded" widthProps="5.250rem" heightProps="4.813rem"></SetaBottom>
                    </Transition>
                </div>
                <div class="contacts-methods">
                    <a href="https://api.whatsapp.com/send?phone=4899900383" class="whatsbtn" target="_blank"> 
                        <Whats heightProps="1.6rem" widthProps="1.6rem"></Whats> me chame no whatsapp
                    </a>
                    <hr>
                    <div class="contacts-methods-btn-container">
                        <WhiteBlackBtn toProps="/contato" textProps="ou me envie um email"></WhiteBlackBtn>
                    </div>
                </div>
            </div>
        </div>    
    </main>
    <section id="about">
            <h2>o que será entregue para você?</h2>
            <div class="cards-info-container">
                <CardInfo :maxUniverseProps="false" titleProps="site 100% responsivo" :textProps="card1" :showBtnProps="false"></CardInfo>
                <CardInfo :maxUniverseProps="false" titleProps="design agradável" :textProps="card2" :showBtnProps="false"></CardInfo>
                <CardInfo :maxUniverseProps="false" titleProps="performace" :textProps="card3" :showBtnProps="true" toProps="servicos" btnTextProps="veja meus serviços"></CardInfo>
                <CardInfo :maxUniverseProps="false" titleProps="suporte único" :textProps="card4" :showBtnProps="true" toProps="servicos" btnTextProps="veja meus serviços"></CardInfo>
            </div>
    </section>
    <section id="google">
        <h2>amplie seu alcance</h2>
        <div class="p-container">
            <h2>o impacto de estar no google</h2>
            <p>Sente que seu empreendimento está estagnado? Frustrado por não atingir suas metas de receita e incapaz de expandir sua base de clientes além das indicações?</p>
            <p>Imagine o potencial se sua empresa conquistasse o topo dos resultados de busca do Google, gerando novos clientes consistentemente todos os meses.</p>
            <p><b>Essa visão pode se tornar realidade.</b></p>
            <p>Não estamos apenas oferecendo um site. Estamos construindo sua presença online para abrir novas oportunidades de conquistar clientes através do Google. Seja o ponto de partida para uma era de crescimento sustentável e independência comercial.</p>
        </div>
        <div class="porcents-container">
            <hr>
            <p class="percent"><span class="number-percent">91% </span> das pessoas que procuram um serviço verificam se a empresa está no Google.</p>
            <p class="percent"><span class="number-percent">78% </span> de seus concorrentes já possuem um site.</p>
        </div>
    </section>
    <section id="faq">
        <h2> <abbr title="Frequently Asked Questions / Perguntas Frequentes">FAQ</abbr></h2>
        <div class="faq-container">
            <FaqQuestion questionProps="Qual será meu prazo de entrega?" answeredProps="O prazo de entrega depende da complexidade e tamanho do projeto e da cooperação do contratante. Mas, em geral, após a entrega de todo o material necessário para a construção da solução, por parte do contratante, entregamos com no máximo 7 dias úteis e começamos seu acompanhamento. "></FaqQuestion>
            <FaqQuestion questionProps="Você oferece serviços de manutenção de sites após a criação?" answeredProps="Absolutamente. Além de criar seu site, oferecemos serviços abrangentes de manutenção para garantir seu funcionamento contínuo e atualizado. Estamos aqui para realizar atualizações, corrigir problemas e garantir que seu site esteja sempre otimizado para o melhor desempenho possível. Seu sucesso online é nossa prioridade. "></FaqQuestion>
            <FaqQuestion questionProps="Oferece serviços de hospedagem de sites?" answeredProps="Sim, fornecemos serviços completos de hospedagem de sites para garantir que sua presença online esteja sempre disponível e funcionando sem problemas. Nossa equipe cuida da infraestrutura técnica para que você possa se concentrar no crescimento do seu negócio, com tranquilidade sabendo que seu site está seguro e acessível para seus clientes. "></FaqQuestion>
            <FaqQuestion questionProps="Como posso acompanhar o progresso do desenvolvimento do meu projeto?" answeredProps="Após iniciar o processo de criação do seu projeto, darei 3 feedbacks sobre o andamento da construção até a entrega final. Fique a vontade também para me chamar no whatsapp e pedir um feedback sobre o desenvolvimento. "></FaqQuestion>
            <FaqQuestion questionProps="Quais são os passos para iniciar a criação do meu site?" answeredProps="O primeiro passo é uma conversa que será realizada entre mim e você através do Whatsapp. Nessa conversa irei entender um pouco mais sobre seu negócio e como posso lhe ajudar. <br> <br> Após isso, você preencherá um briefing com todas as informações necessárias para entregar nossas soluções. <br> <br> O terceiro passo é a implementação das soluções propostas e o acompanhamento de sua jornada."></FaqQuestion>
            <FaqQuestion questionProps="Qual é o custo médio para o desenvolvimento do projeto?" answeredProps="O custo do seu projeto depende de diversos fatores como complexidade, tamanho e nicho. Para informações mais precisas, entre em contato comigo pelo <a href='https://api.whatsapp.com/send?phone=4899900383' target='_blank'>Whatsapp.</a> "></FaqQuestion>
        </div>
    </section>
</template>
<script>
import CardInfo from '../components/CardInfo.vue'
import FaqQuestion from '../components/FaqQuestion.vue'
import SetaBottom from '../components/icons/SetaBottom.vue'
import Whats from '../components/icons/Whats.vue'
import Loanding from '../components/Loanding.vue'
import WhiteBlackBtn from '../components/WhiteBlackBtn.vue'
export default {
    components: {
        SetaBottom, Loanding,
        Whats,
        WhiteBlackBtn,
        CardInfo,
        FaqQuestion
    },
    beforeMount(){
        this.setResponsive()
    },
    head(){
        return {
            title: 'Portifólio',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            ],
        }
    },
    data(){
        return {
            words: [],
            responsive: false,
            loaded: false,
            card1: 'Seu site será acessível em qualquer dispositivo, de smartphones a desktops, garantindo uma experiência perfeita para todos os visitantes, onde quer que estejam. Com um design responsivo, sua marca estará sempre pronta para impressionar, independentemente do tamanho da tela.',
            card2: 'A primeira impressão é crucial. Com um design limpo e agradável, seu site não apenas atrairá a atenção dos visitantes, mas também os manterá envolvidos. Nossa abordagem estética garante uma experiência visualmente atraente e intuitiva, refletindo a qualidade e profissionalismo da sua marca',
            card3: 'Velocidade e confiabilidade são fundamentais para o sucesso online. Com nossa otimização de desempenho, seu site carregará rapidamente e funcionará sem problemas, proporcionando uma experiência excepcional para os usuários e garantindo que eles permaneçam envolvidos e interessados no que você tem a oferecer.',
            card4: 'Além de oferecer serviços excepcionais, proporcionamos um suporte personalizado para garantir que todas as suas necessidades sejam atendidas. Desde o início do projeto até o lançamento e além, nossa equipe está sempre disponível para ajudar e oferecer orientação, garantindo uma parceria tranquila e bem-sucedida.'
        }
    },
    mounted(){
        this.loaded = true
    },
    watch: {
        '$screen.width'(value){
            this.setResponsive(value)
        }
    },
    methods:{
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
    flex-direction: column;
    align-items: center;
}
.title {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
}
.title svg {
    margin: 15px 0px 30px;
}
#home {
    background-image: url('https://dbhc8i16f53bc.cloudfront.net/backgrounds/NewHomeBackgroundTOP.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: relative;
}

#home h1 {
    color: #FFF;
    font-family: Inter;
    font-size: 6.614rem;
    font-style: normal;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    word-spacing: 6px;
    -webkit-text-stroke: 5px;
    width: 99%;
    max-width: 780px;
    text-align: center;
}
#home hr {
    background-color: white;
    width: 99%;
    max-width: 800px;
    margin: 13px 0px;
}
#home h2 {
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
}
#home strong {
    line-height: 1rem;
}
#home strong small {
    font-family: 'Inter';
    font-size: 1.063rem;
    text-transform: none;
    font-weight: lighter;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 1px;
}
small span {
    opacity: 0;
}
.shadow {
    background-color: #181818;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    width: 100%;
}
.name-container {
    line-height: 7.8rem;
}
.name, .secondName {
    display: inline-block;
    line-height: 1rem;
}
.img-container {
    padding-top: 9.5%;
    flex: 1;
    display: flex;
    justify-content: center;
}
img {
    height: fit-content;
    max-width: 90%;
}

.contacts-methods {
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    flex: 0.7;
}

.whatsbtn {
    border-radius: 27.077px;
    background: #1AB152;
    width: 100%;
    max-width: 313px;
    padding: 15px 0px;
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-family: Inter;
    font-size: 0.938rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cards-info-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    max-width: 900px;
}

#about {
    width: 100%;
    padding-top: 16vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    padding-bottom: 50px;
}

#about h2 {
    color: #FFF;
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 800;
line-height: normal;
text-transform: uppercase;
text-align: center;
-webkit-text-stroke: #FFF 1px;
}
.contacts-methods hr {
    max-width: 290px !important;
}
.contacts-methods-btn-container {
    width: 100%;
    max-width: 280px;
    display: flex;
}
#google {
    width: 100%;
    padding-top: 16vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

#google h2 {
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
    -webkit-text-stroke: #FFF 1px;
    margin-bottom: 45px;
}
#google .p-container {
    display: flex;
    width: 99%;
    max-width: 900px;
    flex-direction: column;
    gap: 18px;
}
#google .p-container p {
    color: #FFF;
    font-family: Inter;
    font-size: 1.188rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.956%; /* 23.685px */
    letter-spacing: -0.979px;
}
#google .p-container p b {
    -webkit-text-stroke: #FFF 0.5px;
}

.porcents-container {
    display: flex;
    width: 99%;
    max-width: 900px;
    flex-direction: column;
}
.porcents-container hr {
    max-width: 660px;
    margin-bottom: 10px;
}
.percent {
    color: #FFF;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.956%; /* 23.685px */
    letter-spacing: -0.979px;
    display: flex;
    align-items: center;
    gap: 5px;
}
.number-percent {
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    -webkit-text-stroke: 1px #fff;
    margin: 0px 0px;
}
#faq {
    padding-top: 16vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#faq h2 {
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 18px;
    
}
#faq abbr {
    -webkit-text-stroke: 1px #fff;
    text-decoration: none;
}

.faq-container {
    width: 100%;
    max-width: 900px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 13px;
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
    transition: 1.4s;
    transition-delay: 0.6s;
}
.SecondText-enter-from {
    transform: translateX(-70%);
    opacity: 0;    
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
  .title, .img-container {
    padding-top: 0%;
    align-items: center;
  }
  .title h1 {
    text-align: center;
  }
  .img-container img {
    max-height: 90%;
    max-width: 58%;
  }
}
@media screen and (max-width: 556px) {
    .wrapper {
        flex-direction: column;
    }
    #home h1 {
        color: white;
        font-family: Inter;
        font-size: 4rem;
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
    #home strong small {
        font-size: 1rem;
        text-transform: none;
        font-weight: 400;
        word-spacing: 0px;
        -webkit-text-stroke: 0px;
        line-height: 2rem;
        font-family: 'Inknut Antiqua';
    }
    .title {
        flex-direction: column;
        align-items: center;
        flex: 0.8;
    }
    .img-container {
        flex: 1.2;
        align-items: flex-start;
        justify-content: center;
        padding-top: 8px;
        display: flex;
    }
    .img-container img {
        width: 60%;
    }
    
    .SecondText-enter-active {
    transition: 0.7s;
    }

    
}

</style>