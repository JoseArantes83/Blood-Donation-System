<script>
import Modal from './Modal.vue';
import DoacaoService from '@/services/DoacaoService';

export default {
    name: "BuscaDoacoes",
    data() {
        return {
            donationData: {
                volume: "",
                date: "",
                hour: "",
            },
            donationsSearched: Object,
        };
    },
    components: { Modal },
    methods: {
        
    }
}


</script>

<template>
    <div>
        
    </div>
</template>