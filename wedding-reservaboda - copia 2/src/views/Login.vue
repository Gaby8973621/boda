<template>
    <div class="max-w-md mx-auto p-4">
      <h2 class="text-2xl">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="loginUsername" placeholder="Username" class="input" />
        <input type="password" v-model="loginPassword" placeholder="Password" class="input" />
        <button type="submit" class="btn">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginUsername: '',
        loginPassword: ''
      };
    },
    methods: {
      login() {
        // Lógica de inicio de sesión
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
  