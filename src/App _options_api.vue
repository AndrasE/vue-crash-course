<!-- This is a Vue.js component that uses the Options API to manage state and render a simple UI.
It demonstrates the use of data properties, computed properties, and methods to handle user interactions.
The component displays a greeting message, a status message based on the current state, and a list of tasks.
It also includes a button to toggle the status between "active", "pending", and "inactive".
The component uses Vue's template syntax to bind data and handle events.
It also includes a link that demonstrates how to bind attributes dynamically.
The component is structured using the Options API (Vue 3 encourages Composition API as the future) -->

<script lang="ts">
export default {
  data() {
    return {
      HelloWorld: 'Hello World',
      status: 'pending',
      tasks: ["task1", "task2", "task3"],
      link: "https://vuejs.org",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    }
  },
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
  <p>
    <a v-bind:href="link">Link 1</a>
    // or more simply
    <a :href="link">Link 2</a>
  </p>
  <button v-on:click="toggleStatus">Toggle Paragraph</button>
</template>
