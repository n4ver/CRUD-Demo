<script>

export default {
    name: 'Error',
    props: ['errorCode', 'errorMessage'],
    setup(props) {
        console.log(props)
    }
}
</script>

<template>
    <main>
        <section class="w-full flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-6xl md:text-9xl font-medium  text-gray-900 dark:text-white">
                    {{ errorCode }}
                </h1>
                <div class="py-4 text-2xl md:text-3xl text-gray-900 dark:text-white">
                    {{ errorMessage }}
                </div>
                <div class="py-4">
                    <a href="/" class="hover:underline text-gray-900 dark:text-white">Back to the Homepage</a>
                </div>
            </div>
        </section>
      </main>
</template>