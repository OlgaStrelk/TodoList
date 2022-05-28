<template>
    <div>
        <h2 class="app-title">Todo List</h2>
        <router-link to="/" class="link">Home</router-link>
        <AddTask @add-task="addTask" />
        <select v-model="filter" class="filter">
            <option value="all">Все</option>
            <option value="not-completed">Нерешенные</option>
            <option value="completed">Решенные</option>
        </select>
        <Loader v-if="loading" />
        <TodoList v-else-if="filteredTasks.length" v-bind:todos="filteredTasks" @remove-task="removeTask" />
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
            loading: true,
            filter: 'all'
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => {
                this.posts = json
                this.loading = false
            })
    },
    // watch: {
    //     filter(value) {

    //     }
    // },

    computed: {
        filteredTasks() {
            if (this.filter === "all") {
                return this.posts
            }
            if (this.filter === "completed") {
                return this.posts.filter(p => p.completed)
            }
            if (this.filter === "not-completed") {
                return this.posts.filter(p => !p.completed)
            }
        }
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

.filter {
    margin-top: 10px;
    width: 200px;
    display: flex;
    text-align: center;
}

p {
    text-align: center;
}
</style>