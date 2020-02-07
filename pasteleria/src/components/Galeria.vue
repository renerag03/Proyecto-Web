<template>
  <div class="margenG">
  <b-container fluid class="p-4 text-white fondo">
  <h1>GALERIA DE FOTOS</h1>
  <b-row class="text-white">
    <b-col>
      <img src="@/assets/Acontecimiento.png" alt="..." class="img-thumbnail">
      <h3>Tortas para Eventos</h3>
      <router-link to="/acontecimiento"><b-button variant="primary">Ver mas</b-button></router-link>
    </b-col>
    <b-col>
     <img src="@/assets/Unicornio.png" alt="..." class="img-thumbnail">
     <h3>Tortas Personalizadas</h3>
     <router-link to="/personalizadas"><b-button variant="primary">Ver mas</b-button></router-link>
    </b-col>
    <b-col>
     <img src="@/assets/TortasNormales.png" alt="..." class="img-thumbnail">
     <h3>Tortas</h3>
     <router-link to="/normales"><b-button variant="primary">Ver mas</b-button></router-link>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.margenG{
  background-color: indigo;
  padding-bottom: 5px;
  border-bottom: 2px
}
.fondo{
  background-color: black
}
</style>
