<template>
    <div class="timeline">
        <div class="timeline__legend">
            <div class="timeline__milestone timeline__milestone--work">Experiencia laboral</div>
            <div class="timeline__milestone timeline__milestone--education">Formación</div>
            <div class="timeline__milestone timeline__milestone--aditional">Formación adicional</div>
            <div class="timeline__milestone timeline__milestone--achievements">Logros</div>
        </div>
        <div class="timeline__rect">
            <ul class="timeline__year" v-for="year in years" :data-year="year.year">
                <li class="timeline__milestone" v-for="milestone in year.milestones" :class="'timeline__milestone--'+milestone.type">
                    <span class="timeline__milestone-title" v-html="milestone.title"></span>
                    <span class="timeline__milestone-info" v-if="milestone.info">({{milestone.info}})</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    mounted() {
        axios.get('/years.json')
        .then(response => {
            this.years = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    data() {
        return {
            years: []
        };
    }
};
</script>
