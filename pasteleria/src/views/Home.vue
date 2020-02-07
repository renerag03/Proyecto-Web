<template>
  <div class="home">
    <Portada/>
    <Servicio                                                                 />
    <Galeria/>
  </div>
</template>

<script>
import Portada from '@/components/Portada.vue'
import Servicio from '@/components/Servicio.vue'
import Galeria from '../components/Galeria.vue'

export default {
  name: 'home',
  components: {
    Portada,
    Servicio,
    Galeria
  }
}
</script>
