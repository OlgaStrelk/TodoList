<template>
    <li class="task">
        <span class="task-box" v-bind:class="{ done: todo.completed }">

            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            {{ todo.title }}
        </span>
        <button class="remove-button" v-on:click="$emit('remove-task', todo.id)">&times;</button>
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
    height: 45px;
    font-weight: 400;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    margin-bottom: 10px;
}

.task-box {
    font-weight: bold;
    font-size: 17px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.remove-button {
    margin: 0;
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
    margin-right: 40px;
    cursor: pointer;
    width: 0;
}


input::before {
    margin-top: 2px;
    display: block;
    width: 11px;
    height: 11px;
    border: 1px solid #808080;
    border-radius: 50%;
    content: "";
    background: #FFF;
}

input:checked:before {
    background: black;

}

.done {
    text-decoration: line-through;
    opacity: 0.6;
}
</style>