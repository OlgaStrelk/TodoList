<template>
    <div>
        <h2 class="app-title">Todo List</h2>
        <router-link to="/" class="link">Home</router-link>
        <AddTask @add-task="addTask" />
        <Loader v-if="loading" />
        <TodoList v-else-if="posts.length" v-bind:todos="posts" @remove-task="removeTask" />
        <p v-else>Кажется, ваши дела закончились. <br />Добавьте новые и&nbsp;отдохните.</p>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import AddTask from "@/components/AddTask"
import Loader from "@/components/Loader"


export default {
    name: 'App',
    data() {
        return {
            posts: [
            ],
            loading: true
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                this.posts = json
                this.loading = false
            })
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
        AddTask,
        Loader
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