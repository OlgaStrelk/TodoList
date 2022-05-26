<template>
    <div>
        <ul>
            <TodoItem 
            v-for="item of todos"
            v-bind:todo="item"/>
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