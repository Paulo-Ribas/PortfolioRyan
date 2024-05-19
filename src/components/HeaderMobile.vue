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
        <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none" @touchstart="toggleMenu">
            <circle cx="34" cy="34" r="33.4426" stroke="white" stroke-width="1.11475"/>
            <path d="M20.0656 23.4098H49.1199M20.0656 33.0946H49.1199M20.0656 42.7794H49.1199" stroke="white" stroke-width="4.84238" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="showMenu" xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 68 68" fill="none" @touchstart="toggleMenu">
            <circle cx="34" cy="34" r="33.4426" stroke="white" stroke-width="1.11475"/>
             <path d="M19.8386 19.8386C20.3758 19.3017 21.1042 19 21.8638 19C22.6233 19 23.3517 19.3017 23.8889 19.8386L34.0173 29.9671L44.1457 19.8386C44.6859 19.3169 45.4095 19.0282 46.1605 19.0347C46.9115 19.0412 47.63 19.3425 48.161 19.8735C48.6921 20.4046 48.9934 21.123 48.9999 21.8741C49.0064 22.6251 48.7177 23.3486 48.1959 23.8889L38.0675 34.0173L48.1959 44.1457C48.7177 44.6859 49.0064 45.4095 48.9999 46.1605C48.9934 46.9115 48.6921 47.63 48.161 48.161C47.63 48.6921 46.9115 48.9934 46.1605 48.9999C45.4095 49.0064 44.6859 48.7177 44.1457 48.1959L34.0173 38.0675L23.8889 48.1959C23.3486 48.7177 22.6251 49.0064 21.8741 48.9999C21.123 48.9934 20.4046 48.6921 19.8735 48.161C19.3425 47.63 19.0412 46.9115 19.0347 46.1605C19.0282 45.4095 19.3169 44.6859 19.8386 44.1457L29.9671 34.0173L19.8386 23.8889C19.3017 23.3517 19 22.6233 19 21.8638C19 21.1042 19.3017 20.3758 19.8386 19.8386Z" fill="white"/>
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
        top: 92.6vh;
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