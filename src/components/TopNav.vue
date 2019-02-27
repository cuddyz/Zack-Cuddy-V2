<template>
    <nav class="mx-2 flex align-center">
        <g-link :to="{ name: 'home' }">
            <g-image class="logo" src="/images/logo_transparent.png" width="100px" />
        </g-link>
        <div class="links">
            <g-link :to="{ name: 'about' }">About</g-link>
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
@import '../assets/styles/breaks.scss';

    nav {
        position: absolute;
        top: 4rem;
        height: 0;
        
        .logo {
            width: 70px;
            &:hover {
                width: 80px;
                cursor: pointer;
            }
            
            @media (min-width: breaks(phablet)) {
                width: 80px;

                 &:hover {
                    width: 90px;
                }
            }

            @media (min-width: breaks(laptop)) {
                width: 100px;

                 &:hover {
                    width: 110px;
                }
            }
        }
        
        .links {
            a {
                padding-left: 1rem;
                text-transform: uppercase;
                font-size: 0.9em;

                &:hover {
                    font-size: 1em;
                }

                @media (min-width: breaks(phablet)) {
                    font-size: 1.1em;

                    &:hover {
                        font-size: 1.3em;
                    }
                }

                @media (min-width: breaks(laptop)) {
                    font-size: 1.3em;

                    &:hover {
                        font-size: 1.4em;
                    }
                }

                @media (min-width: breaks(desktop)) {
                    font-size: 1.5em;

                    &:hover {
                        font-size: 1.6em;
                    }
                }
            }
        }
    }
</style>
