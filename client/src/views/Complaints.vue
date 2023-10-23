<script setup>
//import ComplaintService from '@/services/ComplaintService';
import axios from 'axios';
import { ref, onMounted } from 'vue';

var complaints = ref(null);

onMounted(() => {
    axios
        .get('http://localhost:8081/api/v1/complaints')
        .then((res => {
            console.log('res.data:', res.data);
            complaints.value = res.data.complaints;
            console.log('complaints:', complaints);
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
                <tr v-for="complaint in complaints" :key="complaint.id">
                    <td>{{ complaint.title }}</td>
                    <td>{{ complaint.category }}</td>
                    <td>{{ complaint.status }}</td>
                    <td>
                        <a v-bind:href="'/complaints/' + complaint.id">Click Here to View</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>