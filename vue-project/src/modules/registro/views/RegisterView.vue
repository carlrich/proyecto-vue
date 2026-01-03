<script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import validationSchema from '../schemas/validationSchema.js';

  const onSubmit = (values) => {
    console.log(values);
  };
</script>

<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
      <div class="box-input">
        <label for="nombre">Nombre de usuario</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Nombre de usuario" />
        <ErrorMessage name="nombre" class="error-message" />
      </div>
      <div class="box-input">
        <label for="email">Correo electrónico</label>
        <Field type="email" name="email" id="email" placeholder="Correo electrónico" />
        <ErrorMessage name="email" class="error-message" />
      </div>
      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .box-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  label {
    margin-bottom: 5px;
  }
  input {
    padding: 8px;
    font-size: 16px;
  }
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
  button {
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  button:hover {
    background-color: #45a049;
  }
</style>