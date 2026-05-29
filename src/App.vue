<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useCarritoStore } from './stores/carrito.js'

const carrito = useCarritoStore()
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__link">
      <h1 class="header__logo">TechStore</h1>
    </RouterLink>
    <p class="header__subtitulo">Las mejores notebooks al mejor precio</p>

    <nav class="nav">
      <RouterLink to="/" class="nav__link">Inicio</RouterLink>
      <RouterLink to="/alta" class="nav__link">Cargar Notebook</RouterLink>
      <span class="nav__carrito">
        🛒 <strong>{{ carrito.cantidadTotal }}</strong>
      </span>
    </nav>
  </header>

  <main class="contenedor">
    <RouterView />
  </main>

  <footer class="footer">
    <p>TechStore - Todos los derechos reservados 2026</p>
  </footer>
</template>

<style scoped>
.header {
  background-color: #ffe600;
  padding: 2rem;
  text-align: center;
}

.header__link {
  text-decoration: none;
  color: inherit;
}

.header__logo {
  font-size: 3rem;
  margin: 0;
  color: #333;
}

.header__subtitulo {
  margin: 0.5rem 0 1rem 0;
  color: #555;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.nav__link {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav__link:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav__link.router-link-active {
  background-color: rgba(0, 0, 0, 0.15);
}

.contenedor {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.footer {
  background-color: #ffe600;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.nav__carrito {
  background-color: rgba(0, 0, 0, 0.15);
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
}
</style>
