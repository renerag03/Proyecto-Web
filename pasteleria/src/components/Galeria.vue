<template>
  <div class="margenG">
    <div class="margenG2">
      <div class="fondoG">
        <b-container fluid class="p-4 text-white fondo px-lg-5">
          <router-link to="/galeria"> <h1 class="text-warning">GALERIA DE FOTOS</h1></router-link>
          <br />
          <b-row class="text-white">
            <b-col class="col py-3 px-lg-5">
              <router-link to="/acontecimiento"> <img src="@/assets/Acontecimiento.png" alt="..." class="img-thumbnail imgG"></router-link>
              <br />
              <br />
              <h3 class="text-warning">Tortas para Eventos</h3>
              <router-link to="/acontecimiento">
              <button type="button" class="btn btn-outline-danger">Ver mas</button>
              </router-link>
            </b-col>
            <b-col class="col py-3 px-lg-5">
              <router-link to="/personalizadas"><img src="@/assets/Unicornio.png" alt="..." class="img-thumbnail imgG1"></router-link>
              <br>
              <br />
              <h3 class="text-warning">Tortas Personalizadas</h3>
              <router-link to="/personalizadas">
              <button type="button" class="btn btn-outline-warning">Ver mas</button>
              </router-link>
            </b-col>
            <b-col class="col py-3 px-lg-5">
              <router-link to="/normales"><img src="@/assets/TortasNormales.png" alt="..." class="img-thumbnail imgG2"></router-link>
              <br />
              <br />
              <h3 class="text-warning">Tortas</h3>
              <router-link to="/normales">
               <button type="button" class="btn btn-outline-success">Ver mas</button>
              </router-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.margenG {
  background-color: deeppink;
  padding-top: 5px;
  border-top: 2px;
}
.margenG2 {
  background-color: indigo;
  padding-bottom: 5px;
  border-bottom: 2px;
}
.fondoG {
  background-color: black;
}
.imgG{
  background-color: deeppink;
  border-radius: 10%;
  border:5px
}
.imgG1{
  background-color: indigo;
  border-radius: 10%;
  border:5px
}
.imgG2{
  background-color: yellow;
  border-radius: 10%;
  border:5px
}
</style>
