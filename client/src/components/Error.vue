<script>
export default {
    name: 'Error',
    data() {
        return {
            errorCode: "",
            errorMessage: ""
        }
    }
}
</script>

<template>
    <main>
        <section class="w-full flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-6xl md:text-9xl font-medium">
                    {{ errorCode }}
                </h1>
                <div class="py-4 text-2xl md:text-3xl">
                    {{ errorMessage }}
                </div>
                <div class="py-4">
                    <a href="/" class="hover:underline">Back to the Homepage</a>
                </div>
            </div>
        </section>
      </main>
</template>