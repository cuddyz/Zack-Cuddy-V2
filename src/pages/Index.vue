<template>
  <Layout>
    <section>
      <div class="f-2 flex column flex-center">
        <div class="flex-1 flex column flex-center w-100 info">
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
      <div>
        <img aria-label="Zack Cuddy" />
      </div>
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
@import '../assets/styles/breaks.scss';

  section {
    display: grid;
    grid-template-columns: auto;
    align-content: center;
    height: 100vh;

    @media (min-width: breaks(tablet)) and (max-height: 949px) {
      grid-template-columns: 1fr 1fr;
      align-content: inherit;
    }

    @media (min-width: breaks(laptop)) and (min-height: 950px) {
      grid-template-columns: 1fr 1fr;
      align-content: inherit;
    }

    @media (min-width: breaks(desktop)) and (min-height: 1250px) {
      grid-template-columns: 1fr 1fr;
      align-content: inherit;
    }

    .info {
      font-size: 0.8em;

      @media (min-width: breaks(phablet)) {
        font-size: 0.9em;
      }
      
      @media (min-width: breaks(tablet)) {
        font-size: 1em;
      }
    }

    .social {
      position: fixed;
      bottom: 0;
      display: flex;
      align-items: flex-end
    }

    a {
      font-size: 1.0em;
      margin: 0 1.5rem;

      &:hover {
        font-size: 1.1em;
      }
    }

    @media (min-width: breaks(laptop)) {
      a {
        font-size: 1.1em;
        margin: 0 2rem;

        &:hover {
          font-size: 1.2em;
        }
      }
    }

    img {
      display: none;
      height: 100%;
      width: 100%;
      background-image: url('/images/Hero.jpg');
      background-repeat: no-repeat;
      background-size: cover;

      @media (min-width: breaks(tablet)) and (max-height: 949px) {
        background-position: 50%;
        display: block;
      }

      @media (min-width: breaks(laptop)) and (min-height: 950px) {
        background-position: 50%;
        display: block;
      }

      @media (min-width: breaks(desktop)) and (min-height: 1250px) {
        background-position: 50%;
        display: block;
      }
    }
  }
</style>

