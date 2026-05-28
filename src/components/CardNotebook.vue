<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  notebook: {
    type: Object,
    required: true,
  },
})

// Precio mock calculado en base al id (mientras no esté en la API)
const precio = computed(() => {
  return props.notebook.id * 200000 + 500000
})
</script>

<template>
  <div class="producto">
    <h2 class="producto__nombre">{{ notebook.title }}</h2>
    <img class="producto__imagen" :src="notebook.image_url" :alt="notebook.title" />
    <p class="producto__descripcion">{{ notebook.description }}</p>
    <p class="producto__precio">${{ precio.toLocaleString('es-AR') }}</p>
    <RouterLink :to="`/notebook/${notebook.id}`" class="producto__boton"> Ver más </RouterLink>
  </div>
</template>

<style scoped>
.producto {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.producto__nombre {
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
}

.producto__imagen {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.producto__descripcion {
  font-size: 0.9rem;
  color: #666;
  flex-grow: 1;
}

.producto__precio {
  font-size: 1.4rem;
  font-weight: bold;
  color: #3483fa;
}

.producto__boton {
  background-color: #3483fa;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.producto__boton:hover {
  background-color: #2968c8;
}
</style>
