<template>
  <main class="layout">
    <top-nav />
    <slot/>
  </main>
</template>

<script>
import TopNav from '~/components/TopNav'

export default {
  name: 'Default',
  components: {
    TopNav
  }
}
</script>
