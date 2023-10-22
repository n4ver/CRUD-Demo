<script>
import Error from "../components/Error.vue"

export default {
    components: {
        Error
    },
    data() {
        return {
            errorCode: "404",
            errorMessage: "We couldn't find the page you're looking for."
        }
    }
}
</script>

<template>
    <Error />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>