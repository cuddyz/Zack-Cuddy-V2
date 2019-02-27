<template>
<Layout>
  <article>
    <h1 class="pt-1 pb-1">Need help with a project?</h1>
    <form id="contact" name="contact" method="POST" action="/contact" data-netlify="true">
      <input name="form-name" value="contact" type="hidden" />
      <input name="name" label="Full Name" :class="{'error': errors.fields && !contact.name }" v-model="contact.name" type="text" placeholder="Full Name" />
      <input name="email" label="Email" :class="{'error': (errors.fields && !contact.email) || errors.email }" v-model="contact.email" type="email" placeholder="Email" />
      <textarea name="details" label="Details" :class="{'error': errors.fields && !contact.details }" v-model="contact.details" placeholder="Details" />
      <button class="hidden" type="submit">Send</button>
    </form>
    <button @click="submit">Submit</button>
    <h4 class="error" v-if="errors.fields">Make sure all the fields are filled out.</h4>
    <h4 class="error" v-if="errors.email">That email doesn't look valid to me.</h4>
    <h4 class="error" v-if="errors.post">Uh oh! Something went wrong with the POST. I console.log() it if you want to take a look!</h4>
  </article>
</Layout>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contact: {
        name: '',
        email: '',
        details: ''
      },
      errors: {
        fields: false,
        email: false
      }
    }
  },
  methods: {
    submit: function() {
      if (!this.validForm()) {
        return
      }

      document.getElementById('contact').submit()
    },
    validForm: function() {
      if (!this.contact.name || !this.contact.email || !this.contact.details) {
        this.errors.fields = true
        return false
      }

      this.errors.fields = false

      var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!emailRegex.test(this.contact.email)) {
        this.errors.email = true
        return false
      }

      this.errors.email = false
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/colors.scss';
  @import '../assets/styles/breaks.scss';

  article {
    height: 80vh;
    display: grid;
    grid-gap: 1rem;
    justify-items: center;
    align-content: center;
    margin: 5rem 1rem 1rem 1rem;

    form {
      text-align: center;
      width: 80%;
      grid-gap: 1rem;

      @media (min-width: breaks(tablet)) {
        width: 50%;
      }
    }

    input,
    textarea {
      font-size: 1.2rem;
      margin: 1rem 0;

      &.error {
        border-color: color(redDark);
      }
    }

    h4 {
      font-size: 1.1rem;
      &.error {
        color: color(redDark);
      }
    }
  }
  .hidden {
    display: none;
  }
</style>
