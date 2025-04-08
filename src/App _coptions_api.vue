<script>
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
