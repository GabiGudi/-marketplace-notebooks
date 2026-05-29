import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  // STATE: el array de items
  const items = ref([])

  // GETTERS: valores calculados
  const cantidadTotal = computed(() => {
    return items.value.reduce((suma, item) => suma + item.cantidad, 0)
  })

  const precioTotal = computed(() => {
    return items.value.reduce((suma, item) => suma + item.precio * item.cantidad, 0)
  })

  // ACTIONS: funciones para modificar el state
  function agregar(notebook, precio) {
    const existente = items.value.find((item) => item.id === notebook.id)
    if (existente) {
      existente.cantidad++
    } else {
      items.value.push({
        id: notebook.id,
        title: notebook.title,
        image_url: notebook.image_url,
        precio: precio,
        cantidad: 1,
      })
    }
  }

  function quitar(id) {
    const indice = items.value.findIndex((item) => item.id === id)
    if (indice !== -1) items.value.splice(indice, 1)
  }

  function vaciar() {
    items.value = []
  }

  // Exportar todo lo que queremos exponer
  return { items, cantidadTotal, precioTotal, agregar, quitar, vaciar }
})
