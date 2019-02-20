<template>
  <Layout>
    <section>
      <div class="content">
        <h1>Zack Cuddy</h1>
        <h3>Developer.</h3>
      </div>
      <div class="img-container" />
    </section>
  </Layout>
</template>

<script>
export default {
 // ..
}
</script>

<style scoped>
  section {
    display: flex;
    height: 100vh;
  }

  .content {
    font-size: 2em;
    flex: 1;
    color: #F5F5F5;
    margin: auto;
    text-align: center;
  }

  .img-container {
    flex: 1;
    background-position: 50%;
    background-image: url('/images/Header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
