<template>
  <main>
    <Transition name="Title">
      <h1 v-if="loaded">
        <span>
          Serviços
          <Transition name="svgAnimation2">
            <SetaRotate v-if="loadedSvg && !responsive" :rightPositiveProps="true" widthProps="6.3rem" heightProps="6.3rem"></SetaRotate>
          </Transition>
          <Transition name="svgAnimation">
            <SetaRotate2 v-if="loadedSvg && !responsive" widthProps="6.3rem" heightProps="6.3rem"></SetaRotate2>
          </Transition>

        </span>
      </h1>
    </Transition>
    <div class="services-container">
          <ServicesVue v-for="(service, index) in services" :key="index"
          :imgSrcProps="service.imgSrc" :altProps="service.alt"
          :showBtnProps="service.showBtn" :btnTextProps="service.btnText"
          :maxUniverseProps="service.maxUniverse"
          :titleProps="service.title"
          :textProps="service.text"
          :toProps="service.to"
          :costumizePaddingMarginProps="service.costumizePaddingMargin"
          :reverseProps="service.reverse"
          :moveComponentToLeftProps="service.moveComponentToLeft"
          :moveComponentToRightProps="service.moveComponentToRight"
          ></ServicesVue>
    </div>
  </main>
  <section id="google">
    <h2>sua empresa no google em 4 passos</h2>
    <div class="steps-container">
      <CardInfo :maxUniverseProps="true" :showBtnProps="false" titleProps="entre em contato" textProps="Clique no botão do WhatsApp para iniciar uma conversa comigo. Estou aqui para esclarecer dúvidas e começar a transformar suas ideias em realidade."></CardInfo>
      <CardInfo :maxUniverseProps="true" :showBtnProps="false" titleProps="conversa inicial" textProps="Nessa etapa eu vou te ouvir, analisar o seu negócio, apresentar soluções e juntos vamos traçar um plano para seu negócio ficar no topo das ferramentas de busca."></CardInfo>
      <CardInfo :maxUniverseProps="true" :showBtnProps="true" btnTextProps="me chame no whatsapp" :whatsProps="true" toProps="https://api.whatsapp.com/send?phone=48999900383" titleProps="briefing" textProps="Nosso plano é personalizado para sua empresa. Por isso você deve preencher um briefing para fornecer informações essenciais para ajudarmos da melhor forma possível. Quanto mais detalhes, melhor!"></CardInfo>
      <CardInfo :maxUniverseProps="true" :showBtnProps="true" btnTextProps="ou me envie um email" toProps="/contato" titleProps="parceria fechada" textProps="Com as informações em mãos, após todas as etapas serem concluidas, vamos personalizar as soluções para sua empresa. Entregaremos o plano e acompanharemos sua jornada rumo ao sucesso no Google."></CardInfo>
    </div>
  </section>
  <footer>
    <h2><span></span> cidades atendidas <span></span></h2>
    <div class="citys-container">
      <div class="citys">
        <span v-for="(city, index) in citysList1" :key="index">Desenvolvedor Web em {{city}}</span>
      </div>
      <div class="citys">
        <span v-for="(city, index) in citysList2" :key="index">Desenvolvedor Web em {{city}}</span>
      </div>
      <div class="citys">
        <span v-for="(city, index) in citysList3" :key="index">Desenvolvedor Web em {{city}}</span>
      </div>
    </div>

  </footer>
</template>

<script>
import CardInfo from '../components/CardInfo.vue'
import SetaRotate2 from '../components/icons/SetaRotate2.vue'
import SetaRotate from '../components/icons/SetaRotate.vue'
import ServicesVue from '../components/Services.vue'

export default {
  components: { CardInfo,ServicesVue, SetaRotate, SetaRotate2},
  beforeMount(){
    this.setResponsive()
  },
  mounted(){
    this.loaded = true
    setTimeout(() => {
      this.loadedSvg = true
    }, 100);
  },
  head(){
        return {
            title: 'Serviços',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Oferecemos uma ampla gama de serviços de design web e gráfico. Isso inclui sites responsivos, landing pages, interfaces de aplicativos, lojas virtuais, logotipos, cartões de visita, banners e UI/UX design.'},

            ],
            link: [
              {rel: 'canonical', href:'https://ryannghisi.com.br/servicos'}
            ]
        }
    },
  data(){
    return {
      loaded: false,
      loadedSvg: false,
      responsive: false,
      services: [
        {
          imgSrc: 'https://dbhc8i16f53bc.cloudfront.net/icones/browser_4298091.png',
          alt: 'imagem ilustrativa sobre design de landing pages',
          showBtn: true,
          btnText: 'Veja Meus Projetos',
          maxUniverse: true,
          title: 'Design De Landing Pages',
          text: 'Nossas Landing Pages são mais do que simples páginas da web; são portais cuidadosamente projetados para cativar e converter visitantes em leads valiosos. Focamos em UX (User Experience) para garantir que cada interação seja intuitiva e envolvente, maximizando assim as taxas de conversão e impulsionando o crescimento do seu negócio.',
          to: '/projetos',
          costumizePaddingMargin: true,
          reverse: false,
          moveComponentToRight: true,
          moveComponentToLeft: false,
         },
         {
          imgSrc: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/icones/launch_1095788.png',
          alt: 'imagem ilustrativa sobre design de criação de sites',
          showBtn: true,
          btnText: 'Veja Meus Projetos',
          maxUniverse: true,
          title: 'Criação De Sites',
          text: 'Cada site que criamos é uma expressão única da identidade e visão da sua marca. Da concepção à implementação, nossa abordagem centrada no usuário garante não apenas uma estética deslumbrante, mas também uma experiência de navegação fluida e intuitiva. Seja para promover sua marca ou compartilhar sua mensagem, estamos aqui para fazer com que sua presença online se destaque.',
          to: '/projetos',
          costumizePaddingMargin: true,
          reverse: true,
          moveComponentToRight: false,
          moveComponentToLeft: true,
         },
         {
          imgSrc: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/icones/landing-page_4053020.png',
          alt: 'imagem ilustrativa sobre design de landing pages',
          showBtn: true,
          btnText: 'Veja Meus Projetos',
          maxUniverse: true,
          title: 'Criação De Loja Virtual',
          text: 'Cada site que criamos é uma expressão única da identidade e visão da sua marca. Da concepção à implementação, nossa abordagem centrada no usuário garante não apenas uma estética deslumbrante, mas também uma experiência de navegação fluida e intuitiva. Seja para promover sua marca ou compartilhar sua mensagem, estamos aqui para fazer com que sua presença online se destaque.',
          to: '/projetos',
          costumizePaddingMargin: true,
          reverse: false,
          moveComponentToRight: true,
          moveComponentToLeft: false,
         },
         {
          imgSrc: 'https://imagensdoportfoliorg.s3.sa-east-1.amazonaws.com/icones/creative_5112812.png',
          alt: 'imagem ilustrativa sobre design de landing pages',
          showBtn: true,
          btnText: 'Veja Meus Projetos',
          maxUniverse: true,
          title: 'Criação De Logo Tipo',
          text: 'Um logotipo é mais do que apenas uma imagem; é a essência visual da sua marca, a representação instantânea do seu negócio e valores. Com nossa abordagem meticulosa e criativa, desenvolvemos logotipos que não apenas impressionam visualmente, mas também comunicam de forma eficaz a identidade da sua marca. Cada design é cuidadosamente elaborado para capturar a singularidade da sua empresa, garantindo reconhecimento instantâneo e uma conexão duradoura com seu público-alvo.',
          to: '/projetos',
          costumizePaddingMargin: true,
          reverse: true,
          moveComponentToRight: false,
          moveComponentToLeft: true,
         },
      ],
      citysList1: [
                "Blumenau", "Brasília", "Caxias do Sul", "Campinas", "Cascavel", "Chapecó", 
                "Criciúma", "Florianópolis", "Fortaleza", "Goiânia", "Guarulhos", "Ibirama"
            ],
          citysList2: [
                "Indaiatuba", "Ipatinga", "Joaçaba", "Joinville", "Londrina", "Maringá", 
                "Osasco", "Parnaíba", "Porto Alegre", "Recife", "Ribeirão Preto", "Rondonópolis"
            ],
          citysList3: [
                "Salvador", "Santos", "São Bernardo do Campo", "São José", "São José dos Campos", 
                "São Paulo", "São Vicente", "Sinop", "Sorocaba", "Sorriso", "Tangará da Serra", 
                "Teresina"
            ],
    }
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
  main {
    width: 100%;
    background: url('https://dbhc8i16f53bc.cloudfront.net/backgrounds/servicesBackgroundTOP.png');
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
   
  }
  h1 {
    color: #FFF;
    font-family: Inter;
    font-size: 6.614rem;
    font-style: normal;
    font-weight: bolder;
    text-transform: uppercase;
    -webkit-text-stroke: 5px;
    padding: 15vh 0px;
    text-align: center;
    opacity: 1;
  }
  h1 span {
    position: relative;
    padding: 0px 3%;
  }
  .services-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12vh;
  }
  .service {
    width: 97%;
    display: flex;
    max-width: 950px;
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

  #google {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #google h2 {
    padding: 20vh 0px 14vh;
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
  }

  .steps-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 900px;
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer h2 {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-around;
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-transform: uppercase;
    -webkit-text-stroke: 1px white;
    padding-top: 20vh;
    padding-bottom: 5vh;
    align-items: center;
    gap: 25px;
  }

  h2 span {
    flex: 1;
    background-color: white;
    height: 1.5px;
  }

  .citys-container {
    width: 100%;
    max-width: 981px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10vh;

  }
  .citys-container .citys {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
    text-align: center;
    min-width: 163px;
  }
  .citys span {
    color: rgba(255, 255, 255, 0.75);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.956%; /* 23.685px */
    letter-spacing: -0.979px;
  }

  .Title-enter-active {
    transition: 0.7s;
}
.Title-enter-from {
    transform: translateX(20%);
    opacity: 0.7;
}
.Title-enter-to {
    transform: translateX(0%);
    opacity: 1;
}

.svgAnimation-enter-active, .svgAnimation2-enter-active {
    transition: 0.6s;
    transition-delay: 0.7s;
}
.svgAnimation-enter-from {
    transform: translate(-50%, -50%) scale(0) !important;
}
.svgAnimation-enter-to {
    transform: translateY(-50%, -50%) scale(1) !important;
}
.svgAnimation2-enter-from {
  transform: translate(50%, -50%) scale(0) !important;
}
.svgAnimation2-enter-to {
  transform: translate(50%, -50%) scale(1) !important;
}

@media screen and (max-width: 556px) {
      h1 span {
        padding: 0px 0px;
      }
      h1 {
        font-size: 5.7rem;
      }
      main, section {
        padding: 0px 3vh;
      }
      :deep(.btn-container) {
        width: 58%;
      }
      #google h2 {
        padding: 10vh 0px 7vh;

      }
}

</style>