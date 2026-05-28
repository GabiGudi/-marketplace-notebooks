<script setup>
import { ref } from 'vue'
import CardNotebook from '../components/CardNotebook.vue'

const notebooks = ref([
  {
    id: 1,
    title: 'Notebook HP 14-dq2024la',
    description: 'Computadora HP de gama media con Intel Core i3 de 11ª generación.',
    image_url: 'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
    price: 850000,
  },
  {
    id: 2,
    title: 'Lenovo IdeaPad 3',
    description: 'Notebook Lenovo IdeaPad con AMD Ryzen 5, 8GB RAM y 512GB SSD.',
    image_url: 'https://picsum.photos/seed/lenovo/400/300',
    price: 920000,
  },
  {
    id: 3,
    title: 'Dell Inspiron 15',
    description: 'Dell Inspiron 15 con Intel Core i5, 16GB RAM y pantalla Full HD.',
    image_url: 'https://picsum.photos/seed/dell/400/300',
    price: 1100000,
  },
  {
    id: 4,
    title: 'Asus VivoBook 15',
    description: 'ASUS VivoBook con Intel Core i7, 16GB RAM y SSD 1TB. Liviana y rápida.',
    image_url: 'https://picsum.photos/seed/asus/400/300',
    price: 1350000,
  },
  {
    id: 5,
    title: 'Acer Aspire 5',
    description: 'Acer Aspire 5 con AMD Ryzen 7, 16GB RAM y pantalla InfinityEdge.',
    image_url: 'https://picsum.photos/seed/acer/400/300',
    price: 1200000,
  },
])
</script>

<template>
  <div class="grid">
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
</style>
