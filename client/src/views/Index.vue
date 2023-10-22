<script setup>
// import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer.vue'
// import axios from 'axios'
</script>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/complaints')
      } else {
        this.$router.push('/login')
      }
    },
  },
};
</script>

<template>
    <div>
    <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6">
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
            </p>
        </div>
    </main>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
