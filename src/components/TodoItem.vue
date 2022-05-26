<template>
    <li class="task">
        <span v-bind:class="{done: todo.completed}">
            <input class="input" type="checkbox">
            <strong class="count">{{ todo.id }}</strong>
            {{ todo.title }}
        </span>
        <button class="remove-button">&times;</button>
    </li>
</template>

<script>
export default {
    name: 'App',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.task {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    margin-bottom: 10px;
}

.remove-button {
    font-size: 30px;
    padding: 0;
    top: 8px;
    right: 4px;
    border: none;
    cursor: pointer;
    transition: opacity 0.5s linear;
    opacity: 1;
}

.remove-button:hover {
    opacity: 0.6;
}

input {
    margin-right: 10px;
}

.done {
    text-decoration: line-through;
}
</style>