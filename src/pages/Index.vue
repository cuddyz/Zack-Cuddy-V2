<template>
  <Layout>
    <header>
      <div class="content">
        <h1>Zack Cuddy</h1>
        <h3>Developer.</h3>
      </div>
      <div class="img-container">
        <g-image src="/images/Header.jpg"/>
      </div>
    </header>
  </Layout>
</template>

<script>
export default {
 // ..
}
</script>

<style scoped>
  h1, h3 {
    margin: 0;
  }
  header {
    display: flex;
    height: 100vh;
    background-image: url('/images/Code BG.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #212121;
  }

  .content {
    font-size: 1.7em;
    flex: 2;
    color: #F5F5F5;
    margin: auto;
    text-align: center;
  }

  .img-container {
    flex: 1;
  }

  img {
    height: 100vh;
  }
</style>
