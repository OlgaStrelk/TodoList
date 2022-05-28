<template>
    <div>
        <h2 class="app-title">Todo List</h2>
        <router-link to="/" class="link">Home</router-link>
        <AddTask @add-task="addTask" />
        <TodoList v-if="posts.length" v-bind:todos="posts" @remove-task="removeTask" />
        <p v-else>Кажется, ваши дела закончились. <br />Добавьте новые и&nbsp;отдохните.</p>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import AddTask from "@/components/AddTask"

export default {
    name: 'App',
    data() {
        return {
            posts: [
            ]
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => { this.posts = json })
    },
    methods: {
        removeTask(id) {
            this.posts = this.posts.filter(t => t.id !== id)
        },
        addTask(todo) {
            this.posts.push(todo)
        }
    },
    components: {
        TodoList,
        AddTask
    }
}
</script>

<style>
.link {
    margin-left: 5px;
}

p {
    text-align: center;
}
</style>