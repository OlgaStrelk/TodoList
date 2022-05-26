<template>
    <li>{{ todo.title }}</li>
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