<template>
  <div>
      <Acontecimiento/>
  <Personalizadas/>
  <Normales/>
  </div>
</template>

<script>
import Acontecimiento from '@/components/Acontecimiento.vue'
import Personalizadas from '@/components/Personalizadas.vue'
import Normales from '@/components/Normales.vue'

export default {
    components: {
    Acontecimiento,
    Personalizadas,
    Normales
  }

}
</script>

<style>

</style>