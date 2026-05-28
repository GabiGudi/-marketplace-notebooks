const API_URL = 'http://localhost:5139/api'

export default {
  async getNotebooks() {
    const respuesta = await fetch(`${API_URL}/Notebook`)
    if (!respuesta.ok) throw new Error('Error al traer las notebooks')
    return respuesta.json()
  },

  async getNotebook(id) {
    const respuesta = await fetch(`${API_URL}/Notebook/${id}`)
    if (!respuesta.ok) throw new Error('Notebook no encontrada')
    return respuesta.json()
  },

  async crearNotebook(datos) {
    const respuesta = await fetch(`${API_URL}/Notebook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    })
    if (!respuesta.ok) throw new Error('Error al crear la notebook')
    return respuesta.json()
  },
}
