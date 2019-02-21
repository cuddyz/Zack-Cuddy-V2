<template>
    <nav class="mx-2 flex align-center">
        <g-link :to="{ name: 'home' }">
            <g-image src="/images/logo_transparent.png" width="100px" />
        </g-link>
        <div class="links">
            <g-link class="pl-1" :to="{ name: 'portfolio' }">Portfolio</g-link>
            <g-link class="pl-1" :to="{ name: 'contact' }">Contact</g-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TopNav'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
    nav {
        position: sticky;
        top: 4rem;
        height: 0;
        
        .links {
            a {
                text-transform: uppercase;
                color: color(white);
                text-decoration: none;
                font-size: 1.5em;
            }
        }
    }
</style>
