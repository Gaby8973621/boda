<template>
  <div class="bg-white text-gray-800">
    <!-- Sección de Héroe -->
    <section class="bg-cover bg-center h-screen" style="background-image: url('@/assets/wedding-background.jpg');">
      <div class="flex justify-center items-center h-full bg-black bg-opacity-50">
        <div class="text-center text-white">
          <h1 class="text-5xl font-bold mb-4 shadow-lg">Bienvenidos a Nuestra Boda</h1>
          <p class="text-xl mb-6 italic">Una celebración de amor, unión y felicidad.</p>
        </div>
      </div>
    </section>

    <!-- Sección de Imágenes -->
    <section class="py-16 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-8">Galería de Momentos Especiales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Las imágenes se han hecho más pequeñas utilizando 'w-3/4' -->
        <img src="../assets/wedding-1.jpg" alt="Ceremonia" class="w-3/4 mx-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src="../assets/wedding-2.jpg" alt="Decoraciones" class="w-3/4 mx-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src="../assets/wedding-3.jpg" alt="Pareja feliz" class="w-3/4 mx-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home', // Nombre del componente
};
</script>
