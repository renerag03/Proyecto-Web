<template>
  <div class="margenS">
    <b-container fluid class="p-4 text-white fondo">
      <h1>Servicios</h1>
      <br/>
      <b-row>
        <b-col>
          <div>
            <b-navbar>
              <b-navbar-brand to='/Tortas'>
                <img
                  src="@/assets/Tortas/N15.jpg"
                  width="300"
                  height="300"
                  alt="..."
                  class="img-thumbnail"
                />
                <br />
              </b-navbar-brand>
            </b-navbar>
          </div>
          <br />
          <h6>
            Nuestras tortas son diseñados de acuerdo a las necesidades
            de nuestros clientes, los manejamos en Crema de Leche y
            Fondant con variedad de masas y rellenos,
            Cada Torta que realizamos es único y garantizamos que tanto
            el sabor como la vista serán inolvidables.
          </h6>
        </b-col>
        <b-col>
          <div>
            <b-navbar>
              <b-navbar-brand to='/Postres'>
                <img
                  src="@/assets/Tortas/N15.jpg"
                  width="300"
                  height="300"
                  alt="..."
                  class="img-thumbnail"
                />
                <br />
              </b-navbar-brand>
            </b-navbar>
          </div>
          <br />
          <h6>Contamos con gran variedad de postres para acontecimientos para que tu mesa de postres sea inolvidable</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.margenS {
  background-color: deeppink;
  padding-top: 5px;
  border-top: 2px;
  padding-bottom: 5px;
  border-bottom: 2px;
}
</style>
