<template>
    <Layout>
        <article>
          <section>
            <p class="pb-75">Hi I'm Zack Cuddy.  I live in St. Louis with the love of my life Kelly and our two amazing cats, Mikah and Luna.</p>
            <p class="pb-75">Currently I am employed as a Frontend Engineer at <a href="https://about.gitlab.com/" rel="noreferrer" target="_blank">Gitlab</a>.
              I also enjoy creating websites as a hobby, and love helping people get their new idea up off the group and running!</p>
            <p class="pb-75">My personal life consists of <span class="highlight">Craft Beer</span>, <span class="highlight">Basketball</span>, and <span class="highlight">Traveling</span>.  
              One of my favorite things to do is travel to new cities to explore their beer and NBA scene.
              So far I've been to 7 of the 30 NBA stadiums and that number grows every year!</p>
          </section>
          <section>
            <div class="img-container flex flex-center">
              <div class="bg-img" aria-label="Zack and Kelly" />
            </div>
            <div class="img-container flex flex-center">
              <div class="bg-img" aria-label="Luna" />
              <div class="bg-img" aria-label="Mikah" />
            </div>
          </section>
        </article>
    </Layout>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';
@import '../assets/styles/breaks.scss';

  article {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
    margin: 7rem 1rem 1rem 1rem;

    @media (min-width: breaks(phablet)) {
      margin: 10rem 4rem 1rem 4rem;
    }

    @media (min-width: breaks(laptop)) {
      grid-template-columns: repeat(auto-fill, minmax(45vw, 1fr));
    }

    section:first-child {
      color: color(black);
      background-color: color(white);
      border-radius: 5px;
      padding: 1rem;
      font-size: 0.8em;

      @media (min-width: breaks(phone)) {
        font-size: 1em;
        padding: 2rem;
      }

      @media (min-width: breaks(tablet)) {
        font-size: 1.2em;
        padding: 3rem;
      }

      @media (min-width: breaks(megawide)) {
        font-size: 1.4em;
        padding: 4rem;
      }


      .highlight {
        color: color(orangeDark);
      }

      a {
        color: color(blueDark);

        &:hover {
          cursor: pointer;
          color: darken(color(blueDark), 10%);
        }
      }
    }

    .img-container {

      .bg-img {
        background-position-y: 20%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 10rem;
        width: 10rem;

        @media (min-width: breaks(phablet)) {
          height: 15rem;
          width: 15rem;
        }

        @media (min-width: breaks(tablet)) {
          height: 20rem;
          width: 20rem;
        }

        @media (min-width: breaks(megawide)) {
          height: 25rem;
          width: 25rem;
        }
      }

      &:first-child {
        .bg-img {
          background-image: url('/images/Us.jpg');
          height: 15rem;
          width: 15rem;

        @media (min-width: breaks(phablet)) {
          height: 20rem;
          width: 20rem;
        }

        @media (min-width: breaks(tablet)) {
          height: 25rem;
          width: 25rem;
        }

          @media (min-width: breaks(megawide)) {
            height: 30rem;
            width: 30rem;
          }
        }
      }

      &:nth-child(2) {
        .bg-img:first-child {
          background-image: url('/images/Luna.jpg');
        }
        .bg-img:nth-child(2) {
          background-image: url('/images/Mikah.jpg');
        }
      }
    }
  }
</style>
