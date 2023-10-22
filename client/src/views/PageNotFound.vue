<script>
import Error from "../components/Error.vue"
import { ref } from 'vue'

export default {
    components: {
        Error
    },
    setup() {
        const errorCode = ref('404')
        const errorMessage = ref(`We couldn't find the page you're looking for.`)

        return {errorCode, errorMessage}
    }
}
</script>

<template>
    <Error :errorCode="errorCode" :errorMessage="errorMessage"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>