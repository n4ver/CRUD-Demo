<script>
import axios from 'axios';
//import { ref } from 'vue';

//const complaints = ref(null);

export default {
    data() {
        return {
            complaints: []
        }
    },
    mounted() {
        axios
        .get('http://localhost:8081/api/v1/complaints')
        .then((res => {
            console.log(res.data);
            this.complaints = res.data;
        }));
    }
}
</script>


<template>
    <div>
        <h1>Complaints</h1>
        <div v-for="complaint in complaints" :key="complaint.id">
            <h2>{{ complaint.id }} {{ complaint.title }}</h2>
            <p> {{ complaint.text }}</p>
        </div>
    </div>
</template>
