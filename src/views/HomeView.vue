<script setup>
import { ref, onMounted } from 'vue'
import CardNotebook from '../components/CardNotebook.vue'
import api from '../Services/api.js'

const notebooks = ref([])
const cargando = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    notebooks.value = await api.getNotebooks()
  } catch (e) {
    error.value = 'No se pudieron cargar las notebooks. ¿La API está corriendo?'
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <div v-if="cargando" class="estado">Cargando notebooks...</div>

  <div v-else-if="error" class="estado estado--error">{{ error }}</div>

  <div v-else-if="notebooks.length === 0" class="estado">
    No hay notebooks cargadas. Andá a "Cargar Notebook" para agregar una.
  </div>

  <div v-else class="grid">
    <CardNotebook v-for="notebook in notebooks" :key="notebook.id" :notebook="notebook" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.estado {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.estado--error {
  color: #c00;
}
</style>
