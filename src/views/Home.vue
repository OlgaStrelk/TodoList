<template>
    <div class="home-container">
        <div class="home">
        <h2>Home page</h2>
        <p>Welcome to the Todo List. It's a simple application with which you will never forget what you postpone to do
        </p>
        <router-link to="/tasks">Try the app</router-link>
        </div>
    </div>
</template>

<style>
.home-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    overflow: auto;  
}

.home {
    margin: auto;
    text-align: center;
}

h2 {
    font-size: 30px;
}

p {
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 400px;
}
</style>