<template>
  <Layout>
    <section class="flex">
      <div class="f-2 flex-1 flex column flex-center">
        <div class="flex-1 flex column flex-center w-100">
          <h1>Zack Cuddy</h1>
          <h3>Developer.</h3>
        </div>
        <div class="social">
          <a href="https://www.facebook.com/zack.cuddy" target="_blank"><i class="fab fa-facebook" /></a>
          <a href="https://twitter.com/zack_cuddy" target="_blank"><i class="fab fa-twitter" /></a>
          <a href="https://www.linkedin.com/in/zcuddy/" target="_blank"><i class="fab fa-linkedin-in" /></a>
          <a href="https://github.com/cuddyz" target="_blank"><i class="fab fa-github" /></a>
          <a href="mailto:zcuddy23@gmail.com"><i class="far fa-envelope" /></a>
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

    .social {
      position: fixed;
      bottom: 0;
      display: flex;
      align-items: flex-end
    }

    a {
      font-size: 1.1em;
      margin: 0 2rem;

      &:hover {
        font-size: 1.2em;
      }
    }

    .img-container {
      background-position: 50%;
      background-image: url('/images/Hero.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>

