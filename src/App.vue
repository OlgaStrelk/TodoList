<template>
  <div id="app">

    <router-view />

  </div>
</template>

<style>
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("@/fonts/Inter-Regular.woff2") format("woff2"),
    url("@/fonts/Inter-Regular.woff") format("woff");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("@/fonts/Inter-Bold.woff2") format("woff2"),
    url("@/fonts/Inter-Bold.woff") format("woff");
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("@/fonts/Inter-Black.woff2") format("woff2"),
    url("@/fonts/Inter-Black.woff") format("woff");
}

* {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  margin: 0 auto;
  background: black;
  color: white
}

.app-title {
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
