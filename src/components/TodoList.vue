<template>
    <div>
        <ul class="list">
            <TodoItem v-for="item of todos" v-bind:todo="item" />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"
export default {
    props: ['todos'],
    components: {
        TodoItem
    }
}</script>

<style scoped>
.list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 400px;
    align-self: center;
}
</style>