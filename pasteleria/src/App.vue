<template>
  <div id="app" class="footer">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container >
        <b-navbar-brand href="#">
          <img src="@/assets/logo.png" width="140" height="100" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}" >HOME</b-nav-item>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >SERVICIOS</a>
              <div class="dropdown-menu" bg-info aria-labelledby="navbarDropdownMenuLink">
                <b-dropdown-item :to="{name:'tortas'}">TORTAS</b-dropdown-item>
                <b-dropdown-item :to="{name:'postres'}">POSTRES</b-dropdown-item>
              </div>
            </li>
            <b-nav-item :to="{name:'galeria'}">GALERIA</b-nav-item>
            <b-nav-item :to="{name:'contacto'}">CONTACTO</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img class="logo-footer" src="@/assets/logo.png" width="120" height="120" />
        </b-col>
        <b-col>
          <h1>hola</h1>
        </b-col>
        <b-col>
          <ul>
            <a target="_black" href="https://www.facebook.com/rene.antezana.5">
              <img src="https://i.ya-webdesign.com/images/facebook-log-png-8.png" width="50" height="50"/>facebook
            </a>
            <a target="_black" href="https://api.whatsapp.com/send?phone=59176916166">
              <img src="https://cdn.icon-icons.com/icons2/1488/PNG/128/5302-whatsapp_102550.png" width="50" height="50" />whatsapp
            </a>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  margin: px;
  background-color:mediumspringgreen;
}
</style>
