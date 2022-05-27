<template>
    <form class="form-add-task">
        <input type="text" class="form-input">
        <button class="submit-button" type="submit">Сохранить</button>
    </form>
</template>

<script>
// export default {

// },
// methods: {

// },
// components: {
// }

</script>

<style>
.form-add-task {
    max-width: 400px;
    height: 40PX;
    display: flex;
    justify-content: space-between;
}

.form-input {
    margin: 0;
    width: 290px;
    background: white;
    border: none;
    border-radius: 5px;

}

.submit-button {
    background: white;
    color: #000;
    font-weight: 900;
    margin: 0;
    width: 100px;
    height: 100%;
    border: 1px solid white;
    border-radius: 5px;
}
</style>