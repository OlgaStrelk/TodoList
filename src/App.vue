<template>
  <h1>Todo List</h1>
  <hr>
  <TodoList v-bind:todos="posts" />
</template>

<script>
import TodoList from "@/components/TodoList"
export default {
  name: 'App',
  data() {
    return {
      posts: [
        { id: 1, title: 'Проект 11', completed: false },
        { id: 2, title: 'Проект 12', completed: false },
        { id: 3, title: 'Тренажер', completed: false }


      ]
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
