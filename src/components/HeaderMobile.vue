<template>
    <header class="menu-container" @touchstart.stop="">
        <nav v-if="showMenu">
            <ul>
                <li :class="{'activated-router': route.to === currentRoute}" v-for="(route, index) in nav" :key="index">
                  <routerLink :to="route.to">
                    {{route.name}}
                  </routerLink>
                </li>
            </ul>
        </nav>   
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none" @touchstart="toggleMenu">
            <circle cx="34" cy="34" r="33.4426" stroke="white" stroke-width="1.11475"/>
            <path d="M20.0656 23.4098H49.1199M20.0656 33.0946H49.1199M20.0656 42.7794H49.1199" stroke="white" stroke-width="4.84238" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </header>
</template>

<script>
export default {
    data(){
        return {
            nav: [{to: '/inicio', name: 'início'},{to: '/servicos', name: 'serviços'},{to: '/projetos', name: 'projetos'},
            {to: '/sobre', name: 'sobre'},{to: '/contato', name: 'contato'}],
            showMenu: false,
        }
    },
    computed: {
        currentRoute(){
            console.log(this.$route.path)
            return this.$route.path
        }
    },
    methods: {
        toggleMenu(){
            this.showMenu = !this.showMenu
        }
    }

}
</script>

<style scoped>

    .menu-container {
        position: fixed;
        top: 98.6vh;
        right: 2.4vw;
        z-index: 3;
        transform: translateY(-100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        min-width: 100px;
    }
    nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 0px;
    }
    nav ul li {
        list-style: none;
        min-width: 100%;
        padding: 6px 6px;
        text-align: center;
        display: flex;
        height: fit-content;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.455);
        backdrop-filter: blur(14px);
;


    }
    nav ul li a{
        font-family: Inter;
        text-transform: uppercase;
        color: white;
        font-size: 1.3rem;
        text-decoration: none;
        line-height: 1.5rem;
        font-weight: bold;
    }
    .activated-router {
        background-color: white;
    }
    .activated-router a {
        color: black;
    }
    .menu-container svg {
        margin-top: 5px;
        backdrop-filter: blur(14px);
        background-color: rgba(0, 0, 0, 0.455);
        border-radius: 40px;
    }

</style>