<!-- Composition API Longer Example 
This is a Vue 3 component that demonstrates the use of reactive properties and event handling in the less commonly used longer version using the Composition API.
It uses the Composition API to define a setup function that initializes data and methods.
It also includes a template section that displays the data and binds events to methods.
The component uses the ref function from Vue to create reactive references for the data properties.
The setup function returns an object that exposes the reactive properties and methods to the template.
The template section uses Vue's directives to conditionally render content based on the status property.
The component also includes a button that toggles the status property when clicked. -->

<script>
import { ref } from 'vue';
export default {
  setup() {
    const HelloWorld = ref('Hello World');
    let status = ref('pending'); // Changed to let
    const tasks = ref(["task1", "task2", "task3"]);

    
    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    };
    return {
      HelloWorld,
      status,
      tasks,
      toggleStatus
    };
  }
};
</script>

<template>
  <h1>{{ HelloWorld }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p> 
  <p v-else>User is inactive</p>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
    </li>
  </ul>
  <button @click="toggleStatus">Toggle Paragraph</button>
</template>