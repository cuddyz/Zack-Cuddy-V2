<template>
    <Layout>
        <article class="flex">
            <h1 class="m-a color-white" v-for="edge in $page.projects.edges" :key="edge.node.id">{{ edge.node.title }}</h1>
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
  article {
    min-height: 100vh;
  }
</style>