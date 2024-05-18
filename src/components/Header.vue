<template>
  <header>
    <nav>
      <div class="logo-container">
        <RouterLink to="/">
          <img src="../assets/img/Logo.png" alt="Logo">
        </RouterLink>
      </div>
      <ul>
        <li>
          <routerLink to="/inicio">
            início
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/sobre">
            sobre mim
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/servicos">
            serviços
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/projetos">
            projetos
            <div class="animation-bar"></div>
          </routerLink>
        </li>
        <li>
          <routerLink to="/contato">
            contato
            <div class="animation-bar"></div>
          </routerLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  height: 80px;
  background-color: transparent;
  position: absolute;
  z-index: 5;
  width: 100%;
}
:deep(.container) {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1425px;
    z-index: 2;
    position: relative;
}

.logo-container {
  width: 100%;
  height: 100%;
  max-width: 85px;
  position: relative;
  margin: 0px 25px;
}
.logo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%)
}

nav {
  width: 100%;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  max-width: 1495px;
  margin: auto;
}

nav ul {
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
nav li {
  list-style: none;
}
nav li a {
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Roboto';
  position: relative;
  display: inline-block;
  padding: 0;
}
.animation-bar {
  width: 0%;
  transition: 0.5s;
  background-color: white;
  position: absolute;
  bottom: 0;
  height: 0.5px;
}
nav li a:hover > .animation-bar {
  width: 100%;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media screen and (max-width: 870px) {

  nav {
    padding: 0px 5px;
  }
  nav ul {
    justify-content: space-between;
    padding-left: 0px;
  }
  nav li a {
    font-size: 1rem;
  }
  .logo-container {
    margin: 0px;
    max-width: 55px;
  }
}

</style>