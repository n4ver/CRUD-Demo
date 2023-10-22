<script setup>
// import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer.vue'
// import axios from 'axios'
</script>

<script>
export default {
  name: "App",
  components: {
  },
  computed: {
    /* username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }, */
  },
  methods: {
    /* goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/complaints')
      } else {
        this.$router.push('/login')
      }
    }, */
  },
};
</script>

<template>
    <div>
    <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6 text-gray-900 md:text-2xl dark:text-white" >
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
