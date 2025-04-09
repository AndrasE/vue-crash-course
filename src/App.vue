<!-- This is a Vue 3 component that demonstrates the use of reactive properties and event handling in the more concise commonly used Composition API style. Setup moved to the script tag, and due to this both the export and return can be removed. -->

<script setup>
import { ref } from 'vue';

const HelloWorld = ref('Hello World');
let status = ref('pending'); // Changed to let
const tasks = ref(["task1", "task2", "task3"]);
const newTask = ref('');


const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1); // Remove the task at the specified index Vue reactivity will handle the DOM update
};

</script>

<template>
  <h1>{{ HelloWorld }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span> {{ task }}
        <button @click="deleteTask(index)">x</button>
      </span>
    </li>
  </ul>
  <form @submit.prevent="addTask">
    <label for="newTask">New Task:</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>
  <br />
  <button @click="toggleStatus">Toggle Paragraph</button>
</template>