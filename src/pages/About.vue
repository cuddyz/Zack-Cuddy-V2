<template>
    <Layout>
        <article class="mx-4">
          <section>
            <p class="pb-75">Hi I'm Zack Cuddy.  I live in St. Louis with the love of my life Kelly and our two amazing cats, Mikah and Luna.</p>
            <p class="pb-75">Currently I am employed as a Developer at <a href="https://www.wwt.com/" target="_blank">World Wide Technology</a>.  
               I also enjoy creating websites as a hobby, and love helping people get their new idea up off the group and running!</p>
            <p class="pb-75">My personal life concists of <span class="highlight">Craft Beer</span>, <span class="highlight">Basketball</span>, and <span class="highlight">Traveling</span>.  
              One of my favorite things to do is travel to new cities to explore their beer and NBA scene.
              So far I've been to 7 of the 30 NBA stadiums and that number grows every year!</p>
          </section>
          <section>
            <div class="img-container flex flex-center">
              <img aria-label="Zack and Kelly" />
            </div>
            <div class="img-container flex flex-center">
              <img aria-label="Luna" />
              <img aria-label="Mikah" />
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

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10rem;

    section:first-child {
      color: color(black);
      background-color: color(white);
      border-radius: 5px;
      padding: 4rem;
      font-size: 1.2em;

      .highlight {
        color: color(orange);
      }

      a {
        color: color(blue);

        &:hover {
          cursor: pointer;
          color: color(blueDark);
        }
      }
    }

    .img-container {

      img {
        background-position-y: 20%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 20rem;
        width: 20rem;
      }

      &:first-child {
        img {
          background-image: url('/images/Us.jpg');
          height: 30rem;
          width: 30rem;
        }
      }

      &:nth-child(2) {
        img:first-child {
          background-image: url('/images/Luna.jpg');
        }
        img:nth-child(2) {
          background-image: url('/images/Mikah.jpg');
        }
      }
    }
  }
</style>
