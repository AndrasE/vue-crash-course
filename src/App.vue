<script>
export default {
  data() {
    return {
      HelloWorld: 'Hello World',
      status: true,
      tasks: ["task1", "task2", "task3"],
      link: "https://vuejs.org",
    }
  },
}
</script>

<template>
  <h1>{{ HelloWorld }}</h1>
  <p v-if="status">This is a paragraph</p>
  <p v-else>This is another paragraph</p>
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
  <button @click="status = !status">Toggle Paragraph</button>
</template>
