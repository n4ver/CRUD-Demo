<template>
  <div id="app">
    <body>
      <Navbar/>
      <main class="bg-gray-50 dark:bg-gray-900">
      <router-view ></router-view>
      </main>
      <Footer/>
    </body>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
main {
    -webkit-flex: 1 0 0; /* Safari 6.1+ */
    -ms-flex: 1 0 0; /* IE 10 */
    flex: 1 0 0; /* Grow to fill space */
    overflow-y: auto; /* Add scrollbar */
    height: 100%; /* Needed to fill space in IE */
}
header, footer {
    -webkit-flex: 0 0 auto; /* Safari 6.1+ */
    -ms-flex: 0 0 auto; /* IE 10 */
    flex: 0 0 auto;
}
body {
    display: -webkit-flex; /* Safari 6.1+ */
    display: -ms-flex; /* IE 10 */ 
    display: flex;
    -webkit-flex-direction: column; /* Safari 6.1+ */
    -ms-flex-direction: column; /* IE 10 */
    flex-direction: column;
    -webkit-justify-content: space-between; /* Safari 6.1+ */
    -ms-justify-content: space-between; /* IE 10 */
    justify-content: space-between; /* Header top, footer bottom */
    height: 100vh;  /* Fill viewport height */
}

</style>