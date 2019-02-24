<template>
  <Layout>
    <section class="flex">
      <div class="f-2 flex-1 flex column flex-center">
        <div class="flex-1 flex column flex-center w-100">
          <h1>Zack Cuddy</h1>
          <h3>Web Dev.</h3>
        </div>
        <div>
          <a href="/" target="_blank"><i class="fab fa-facebook" /></a>
          <a href="/" target="_blank"><i class="fab fa-twitter" /></a>
          <a href="/" target="_blank"><i class="fab fa-linkedin-in" /></a>
          <a href="/" target="_blank"><i class="fab fa-github" /></a>
          <a href="/" target="_blank"><i class="fab fa-steam" /></a>
        </div>
      </div>
      <div class="img-container flex-1" />
    </section>
  </Layout>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

  section {
    height: 100vh;

    a {
      padding: 0 2rem;
    }

    .img-container {
      background-position: 50%;
      background-image: url('/images/Hero.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>

