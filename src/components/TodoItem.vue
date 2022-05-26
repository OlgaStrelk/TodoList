<template>
    <li>
        <span><input type="checkbox"><strong>{{ todo.id }}</strong>{{ todo.title }}</span><button>&times;</button>
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

<style>
</style>