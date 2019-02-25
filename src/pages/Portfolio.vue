<template>
    <Layout>
        <article class="mx-4">
          <a v-for="edge in $page.projects.edges" :key="edge.node.id" :href="edge.node.url" target="_blank">
            <div class="img-container mb-1" :style="{ 'background-image': `url(${edge.node.image.url})` }" :aria-label="edge.node.title" />
            <h2>{{ edge.node.title }}</h2>
          </a>
        </article>
    </Layout> 
</template>

<page-query>
query Projects {
  projects: allProjects {
    edges {
      node {
        title
        url
        image {
          url
        }
      }
    }
  }
}

</page-query>

<script>
export default {
    name: 'Portfolio'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

  article {
    margin-top: 10rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(850px, 1fr));

    a {
      background-color: white;
      color: color(blue);
      text-align: center;
      box-shadow: 0 0.25rem 0.5rem 0 rgba(color(greyLight), .06);
      padding-bottom: 1rem;

      &:hover {
        box-shadow: 0 1rem 1.5rem 0 rgba(color(greyLight), .1), 0 0.25rem 0.5rem 0 rgba(color(greyLight), .06);
        transform: scale(1.005);
        color: color(blueDark);
      }
      
      .img-container {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 0;
      }
    }
  }
</style>