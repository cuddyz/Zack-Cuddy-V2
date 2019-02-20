<template>
  <div class="layout">
    <!--
    <header class="header">
      <strong>
        <g-link :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
      </nav>
    </header>
    -->
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

body {
  height: 300vh;
  font-family: 'Rubik', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-image: url('/images/Background.png');
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #212121;
}
</style>
