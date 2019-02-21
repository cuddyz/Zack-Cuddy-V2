<template>
  <Layout>
    <section class="flex">
      <div class="content text-center m-a flex-1">
        <h1>Zack Cuddy</h1>
        <h3>Developer.</h3>
      </div>
      <div class="img-container flex-1" />
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

  section {
    height: 100vh;

    .content {
      font-size: 2em;
      color: color(white);
    }

    .img-container {
      background-position: 50%;
      background-image: url('/images/Hero.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
