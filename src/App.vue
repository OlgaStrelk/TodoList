<template>
  <h1 class="app-title">Todo List</h1>
  <AddTask />
  <TodoList v-bind:todos="posts" @remove-task="removeTask" />
</template>

<script>
import TodoList from "@/components/TodoList"
import AddTask from "@/components/AddTask"

export default {
  name: 'App',
  data() {
    return {
      posts: [
        { id: 1, title: 'Проект 11', completed: false },
        { id: 2, title: 'Проект 12', completed: false },
        { id: 3, title: 'Тренажер', completed: false },
        { id: 1, title: 'Проект 11', completed: false },
        { id: 2, title: 'Проект 12', completed: false },
        { id: 3, title: 'Тренажер', completed: false }


      ]
    }
  },
  methods: {
    removeTask(id) {
      this.posts = this.posts.filter(t => t.id !== id)
    }
  },
  components: {
    TodoList,
    AddTask
  }
}
</script>

<style>
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("@/fonts/Inter-Regular.woff2") format("woff2"),
    url("@/fonts/Inter-Regular.woff") format("woff");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("@/fonts/Inter-Bold.woff2") format("woff2"),
    url("@/fonts/Inter-Bold.woff") format("woff");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("@/fonts/Inter-Black.woff2") format("woff2"),
    url("@/fonts/Inter-Black.woff") format("woff");
}

* {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  margin: 0 auto;
  background: black;
  color: white
}

.app-title {
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
