const KEY = 'techstore-favoritos'

export default {
  // Devuelve el array de ids favoritos
  obtener() {
    const datos = localStorage.getItem(KEY)
    return datos ? JSON.parse(datos) : []
  },

  // Devuelve true si la notebook está en favoritos
  esFavorito(id) {
    return this.obtener().includes(Number(id))
  },

  // Agrega o saca de favoritos (toggle)
  alternar(id) {
    const favoritos = this.obtener()
    const idNum = Number(id)
    const indice = favoritos.indexOf(idNum)

    if (indice === -1) {
      favoritos.push(idNum) // no estaba → agregar
    } else {
      favoritos.splice(indice, 1) // estaba → sacar
    }

    localStorage.setItem(KEY, JSON.stringify(favoritos))
    return favoritos
  },
}
