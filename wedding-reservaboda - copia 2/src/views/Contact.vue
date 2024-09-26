<template>
  <div class="max-w-lg mx-auto p-4">
    <h1 class="text-3xl">Contáctanos</h1>
    <div class="mt-4">
      <iframe
        src="https://maps.google.com/maps?q=tu%20ubicación%20aquí&t=&z=13&ie=UTF8&iwloc=&output=embed"
        class="w-full h-64"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <ContactForm />
  </div>
</template>

<script>
import Correo from './Correo.vue';

export default {
  components: {
    Correo
  }
};
</script>
