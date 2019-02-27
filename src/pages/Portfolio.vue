<template>
    <Layout>
        <article>
          <a v-for="project in projects" :key="project.node.id" :href="project.node.url" target="_blank">
            <div class="img-container mb-1" :style="{ 'background-image': `url(${project.node.image.url})` }" :aria-label="project.node.title" />
            <h2>{{ project.node.title }}</h2>
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
        order
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
    name: 'Portfolio',
    computed: {
      projects: function() {
        let projects = this.$page.projects.edges
        return projects.sort(function(a, b) {
          return (a.order < b.order) ? 1 : -1
        })
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@import '../assets/styles/breaks.scss';

  article {
    margin: 7rem 1rem 1rem 1rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto;

    @media (min-width: breaks(phablet)) {
      margin: 10rem 4rem 1rem 4rem;
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