<template>
  <div id="app" class="color">
    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <b-navbar-brand href="#">
          <img src="@/assets/Pasteleria.png" width="200" height="100" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}">
              <em class="texto1">INICIO</em>
            </b-nav-item>
            <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                > <router-link to="/servicios"><em class="texto1"> SERVICIOS </em></router-link></a>
                <div class="dropdown-menu color"  aria-labelledby="navbarDropdownMenuLink">
                  <b-dropdown-item :to="{name:'tortas'}"> <em class="texto1"> TORTAS </em></b-dropdown-item>
                  <b-dropdown-item :to="{name:'postres'}"> <em class="texto1"> POSTRES </em></b-dropdown-item>
                </div>
              </li>
            <b-nav-item-dropdown>
              <template v-slot:button-content>
                <router-link to="/servicios">
                  <em class="texto1">SERVICIOS</em>
                </router-link>
              </template>
              <div class="color1">
                <b-dropdown-item :to="{name:'tortas'}">
                  <em class="texto1">TORTAS</em>
                </b-dropdown-item>
                <b-dropdown-item :to="{name:'postres'}">
                  <em class="texto1">POSTRES</em>
                </b-dropdown-item>
              </div>
            </b-nav-item-dropdown>
            <b-nav-item :to="{name:'galeria'}">
              <em class="texto1">GALERIA</em>
            </b-nav-item>
            <b-nav-item :to="{name:'contacto'}">
              <em class="texto1">CONTACTO</em>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img class="logo-footer" src="@/assets/Pasteleria.png" width="300" height="200" />
        </b-col>
        <b-col>
          <br />
          <h3 class="text-light"> <em class="texto1"> Tortas a pedido</em></h3>
          <h6
            class="text-left text-light"
          > <em> Te ofrecemos nuestro servicio para poder cumplir tus espectativas para ese dia tan esperado y sea un recuerdo especial en tu vida </em></h6>
          <div class="text-center">
            <b-spinner variant="danger" label="Spinning"></b-spinner>
            <b-spinner variant="danger" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="warning" label="Spinning"></b-spinner>
            <b-spinner variant="warning" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
          </div>
        </b-col>
        <b-col>
          <br />
          <h4 class="text-light text-center">Contactanos</h4>
          <ul class="conta text-center">
            <li>
              <a class="text-light">
                <img src="@/assets/celu1.png" width="40" height="40" />79341022
              </a>
            </li>
            <li>
              <a
                target="_black"
                href="https://www.facebook.com/Pasteler%C3%ADa-Mis-Antojos-y-Caprichos-108913157320536/?modal=admin_todo_tour"
              >
                <img
                  src="https://i.ya-webdesign.com/images/facebook-log-png-8.png"
                  width="30"
                  height="30"
                /> Facebook
              </a>
            </li>
            <li>
              <a target="_black" href="https://api.whatsapp.com/send?phone=59179341022">
                <img
                  src="https://cdn.icon-icons.com/icons2/1488/PNG/128/5302-whatsapp_102550.png"
                  width="30"
                  height="30"
                /> Whatsapp
              </a>
            </li>
            <li>
              <a
                target="_black"
                href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F108913157320536%2F%3Fmessaging_source%3Dsource%253Apages%253Apage_plugin_message"
              >
                <img src="@/assets/Messenger.png"  width="23" height="23" /> Messenger
              </a>
            </li>
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
.color {
  background-color: black;
}
.colorTexto {
  color: darkorange;
}
ul {
  list-style: none;
}
.texto1 {
  color: deeppink;
}
.color1 {
  background-color: black;
  padding: 5px;
  border: 5px;
}
</style>
