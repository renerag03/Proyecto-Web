<template>
  <div class="margen">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="100000"
      controls
      indicators
      background="#ababab"
      img-width="800"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
       <b-carousel-slide>
         <img src="@/assets/Pasteleria.png" width="300" height="300" class="align-self-center mr-3" />
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="800"
            height="480"
            src="@/assets/Acontecimiento.png"
            alt="image slot"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Bienvenidos</h1>
        <h2>Mis Antojos y Caprichos</h2>
        <h5>Tu creas tu pastel...
          Con nosotros tu eliges y creas tu pastel no
          limitamos tus opciones a un catalogo, los modelos
          que te presentamos solo son para que conozcas nuestro trabajo.</h5>
      </div>
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="800"
            height="480"
            src="@/assets/Acontecimiento.png"
            alt="image slot"
          />
          <div class="carousel-caption d-none d-md-block">
        <h1>Mis Antojos y Caprichos</h1>
        <h5>Tortas para matrimonio</h5>
        <p></p>
      </div>
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="800"
            height="480"
            src="@/assets/TortasPersonalizadas.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="800"
            height="480"
            src="@/assets/TortasNormales.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
   </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style>
.margen {
  background-color: deeppink;
  padding-top: 5px;
  border-top: 2px;
}

</style>
