<template>
    <Layout>
        <article>
          <a v-for="edge in $page.projects.edges.reverse()" :key="edge.node.id" :href="edge.node.url" target="_blank">
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
@import '../assets/styles/breaks.scss';

  article {
    margin: 10rem 1rem 0 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto;

    @media (min-width: breaks(phablet)) {
      margin: 10rem 4rem 0 4rem;
    }

    @media (min-width: breaks(laptop)) {
      grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
    }
    

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
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 0;

        @media (min-width: breaks(phablet)) {
          height: 300px;
        }
      }
    }
  }
</style>