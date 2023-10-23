<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

var complaint = ref(null);
const route = useRoute();

onMounted(() => {
    axios
        .get(`http://localhost:8081/api/v1/complaints/${route.params.id}`)
        .then((res => {
            complaint = res.data.complaint;
            console.log(complaint);
        }));
})
</script>

<template>
    <div class="text-gray-900 md:text-2xl dark:text-white flex flex-col h-screen justify-center items-center">
        <h1 class="flex-none">
            <pre>{{ complaint }}</pre>
        </h1>
        <table class="table-auto border-separate">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="complaint in complaint" :key="complaint.id">
                    <td>{{ complaint.category }}</td>
                    <td>{{ complaint.status }}</td>
                </tr>
            </tbody>
            <div>
                <p>
                    {{ complaint.text }}
                </p>
            </div>
        </table>
    </div>
</template>

<style scoped>
</style>