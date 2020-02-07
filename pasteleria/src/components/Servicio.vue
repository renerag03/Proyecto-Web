<template>
  <div class="margenS">
    <div class="colorS">
    <br>
    <h1 class="text-warning">SERVICIO</h1>
    <br>
    <div class="container px-lg-5">
      <div class="row mx-lg-n5">
        <div class="col py-3 px-lg-5">
          <b-col>
            <div>
              <b-navbar>
                <b-navbar-brand to="/Tortas">
                  <img src="@/assets/Tortas/N15.jpg" width="370" class="img-thumbnail" />
                </b-navbar-brand>
              </b-navbar>
            </div>
            <h5 class="text-justify text-warning">
              Nuestras tortas son diseñados de acuerdo a las
              necesidades de nuestros clientes, los manejamos
              con Crema de Leche y Fondant con variedad de masas
              y rellenos, Cada Torta que realizamos es único y
              garantizamos que tanto el sabor como la vista serán
              inolvidables.
            </h5>
          </b-col>
        </div>
        <div class="col py-3 px-lg-5">
          <div class="col"></div>
          <div class="col">
            <b-col>
              <div>
                <b-navbar>
                  <b-navbar-brand to="/Postres">
                    <img src="@/assets/Postres000.jpg" width="380" height="380" />
                  </b-navbar-brand>
                </b-navbar>
              </div>
              <h5 class="text-justify text-warning">Contamos con gran variedad de postres para tus
                  acontecimientos.
                  Cada trabajo se realiza con las necesidades, gustos y tematicas que requieran nuetros clientes para que la mesa de postres de tu evento sea un recuerdo mas de ese dia especial.
              </h5>
            </b-col>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.colorS{
  background-color: black;
}
.margenS {
  background-color: deeppink;
  padding-top: 5px;
  border-top: 2px;
  padding-bottom: 5px;
  border-bottom: 2px;
}
.textS {
  background-color: deeppink;
}
</style>
