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
            console.log('res.data:', res.data);
            complaint.value = res.data.complaint;
            console.log('complaint:', complaint);
        }));
})
</script>


<template>
    <div class="text-gray-900 md:text-2xl dark:text-white flex flex-col h-screen justify-center items-center">
        <h1 class="flex-none">Complaints</h1>
        <table class="table-auto border-separate">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>