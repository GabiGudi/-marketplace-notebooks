<script setup>
import favoritos from '../Services/favoritos.js'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '../Services/api.js'

const route = useRoute()
const id = route.params.id

const notebook = ref(null)
const cargando = ref(true)
const error = ref(null)
const esFavorito = ref(false)

const precio = computed(() => {
  if (!notebook.value) return 0
  return notebook.value.id * 200000 + 500000
})

onMounted(async () => {
  try {
    notebook.value = await api.getNotebook(id)
    esFavorito.value = favoritos.esFavorito(id)
  } catch (e) {
    error.value = 'No se pudo cargar el producto. Verificá el link o probá refrescando.'
  } finally {
    cargando.value = false
  }
})

function toggleFavorito() {
  favoritos.alternar(id)
  esFavorito.value = !esFavorito.value
}
</script>

<template>
  <div v-if="cargando" class="estado">Cargando notebook...</div>

  <div v-else-if="error" class="estado estado--error">{{ error }}</div>

  <article v-else-if="notebook" class="detalle">
    <div class="detalle__imagen-wrap">
      <img :src="notebook.image_url" :alt="notebook.title" class="detalle__imagen" />
    </div>

    <div class="detalle__info">
      <h2 class="detalle__titulo">{{ notebook.title }}</h2>
      <p class="detalle__descripcion">{{ notebook.description }}</p>

      <div class="detalle__features" v-if="notebook.notebookTypes && notebook.notebookTypes.length">
        <h3 class="detalle__features-titulo">Características</h3>
        <ul class="detalle__features-lista">
          <li v-for="feature in notebook.notebookTypes" :key="feature.id">
            <strong>{{ feature.name }}:</strong> {{ feature.description }}
          </li>
        </ul>
      </div>

      <p class="detalle__precio">${{ precio.toLocaleString('es-AR') }}</p>

      <div class="detalle__acciones">
        <button class="boton boton--primario">Comprar</button>
        <button class="boton boton--secundario" @click="toggleFavorito">
          {{ esFavorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos' }}
        </button>
      </div>

      <a
        v-if="notebook.factory_url"
        :href="notebook.factory_url"
        target="_blank"
        class="detalle__link-fabricante"
      >
        Ver en la página del fabricante →
      </a>
    </div>
  </article>
</template>

<style scoped>
.estado {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.estado--error {
  color: #c00;
}

.detalle {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .detalle {
    grid-template-columns: 1fr 1fr;
  }
}

.detalle__imagen-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
}

.detalle__imagen {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.detalle__info {
  display: flex;
  flex-direction: column;
}

.detalle__titulo {
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  color: #333;
}

.detalle__descripcion {
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.detalle__features {
  margin-bottom: 1.5rem;
}

.detalle__features-titulo {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.detalle__features-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 0.8rem 1rem;
}

.detalle__features-lista li {
  padding: 0.35rem 0;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
  color: #444;
}

.detalle__features-lista li:last-child {
  border-bottom: none;
}

.detalle__precio {
  font-size: 2.2rem;
  font-weight: bold;
  color: #3483fa;
  margin: 1rem 0;
}

.detalle__acciones {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.boton {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.boton--primario {
  background-color: #3483fa;
  color: white;
}

.boton--primario:hover {
  background-color: #2968c8;
}

.boton--secundario {
  background-color: #fff;
  color: #3483fa;
  border: 2px solid #3483fa;
}

.boton--secundario:hover {
  background-color: #eaf3ff;
}

.detalle__link-fabricante {
  color: #3483fa;
  text-decoration: none;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.detalle__link-fabricante:hover {
  text-decoration: underline;
}
</style>
