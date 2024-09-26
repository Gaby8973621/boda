<template>
  <div class="text-center p-4">
    <nav class="mb-4 space-x-4">
      <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Inicio
        </button>
      </router-link>
      <router-link to="/login">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Login
        </button> 
      </router-link>
      <router-link to="/register">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Registro
        </button>
      </router-link>
      <router-link to="/contact">
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Contacto
        </button>
      </router-link>
      <router-link to="/correo">
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Correo Electrónico
        </button>
      </router-link>
      <router-link to="/pokemon/1">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Pokémon
        </button>
      </router-link>
    </nav>
    
    <!-- Aquí se renderiza la vista actual según la ruta -->
    <router-view />
  </div>
</template>
