<template>
    <div>
        <ul class="list">
            <TodoItem 
            v-for="item of todos" 
            v-bind:todo="item"
            v-on:remove-task="removeTask" />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"
export default {
    props: ['todos'],
    components: {
        TodoItem
    }, 
    methods: {
        removeTask(id) {
            this.$emit('remove-task', id)
        }
    }
}</script>

<style scoped>
.list {
    list-style: none;
    margin: 20px auto;
    padding: 0;
    max-width: 400px;
    align-self: center;
}
</style>