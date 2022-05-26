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
* {
  background: black;
  color: white
}
</style>
