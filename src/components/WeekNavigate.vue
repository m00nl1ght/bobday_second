<template>
    <v-row class="justify-center align-center">
        <v-btn 
            icon 
            class="mr-2"
            @click="changeWeek('down')"
        >
            <v-icon>mdi-chevron-double-left</v-icon>
        </v-btn>

        <div>
            <p class="text-center text-h4 ma-0">Неделя {{ getWeekNumber(currentDate)}}</p>
            <p class="text-center text-h5 ma-0">{{ formatDate(getMonday(currentDate)) }} - {{ formatDate(getFriday(currentDate)) }}</p>
        </div>

        <v-btn 
            icon 
            class="ml-2"
            @click="changeWeek('up')"
        >
            <v-icon>mdi-chevron-double-right</v-icon>
        </v-btn>
    </v-row>
</template>

<script>
export default {
    methods: {
        changeWeek(key) {
            this.$store.dispatch('datetime/changeWeek', key)
        }
    },

    computed: {
        currentDate() {
            return this.$store.getters['datetime/getCurrentDate']
        }
    }
}
</script>