<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="detalle">
    <h2>Detalle de la notebook</h2>
    <p>
      Estás viendo el detalle del producto con ID: <strong>{{ id }}</strong>
    </p>
    <p>(Acá vamos a mostrar la información completa más adelante)</p>
  </div>
</template>

<style scoped>
.detalle {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
