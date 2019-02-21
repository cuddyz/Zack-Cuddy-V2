<template>
    <nav class="mx-2 flex align-center">
        <g-link :to="{ name: 'home' }">
            <g-image class="logo" src="/images/logo_transparent.png" width="100px" />
        </g-link>
        <div class="links">
            <g-link :to="{ name: 'portfolio' }">Portfolio</g-link>
            <g-link :to="{ name: 'contact' }">Contact</g-link>
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
        
        .logo {
            &:hover {
                width: 110px;
                cursor: pointer;
            }
        }
        
        .links {
            a {
                padding-left: 1rem;
                text-transform: uppercase;
                color: color(white);
                text-decoration: none;
                font-size: 1.5em;

                &:hover {
                    cursor: pointer;
                    font-size: 1.6em;
                }
            }
        }
    }
</style>
