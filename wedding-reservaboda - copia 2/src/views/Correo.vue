<template>
    <div class="max-w-lg mx-auto p-4">
      <form @submit.prevent="sendMessage" class="mt-4">
        <input type="email" v-model="email" placeholder="Tu correo electrónico" class="input" />
        <textarea v-model="message" placeholder="Tu mensaje" class="input"></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        message: ''
      };
    },
    methods: {
      sendMessage() {
        axios.post('/api/send-email', { email: this.email, message: this.message })
          .then(() => alert('Mensaje enviado!'))
          .catch(err => console.error(err));
      }
    }
  };
  </script>
  
  <style scoped>
  .input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.375rem;
  }
  .btn {
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  </style>
  