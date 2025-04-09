<!-- This is a Vue 3 component that demonstrates the use of reactive properties and event handling in the more concise commonly used Composition API style. Setup moved to the script tag, and due to this both the export and return can be removed. -->

<script setup>
import { ref } from 'vue';

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