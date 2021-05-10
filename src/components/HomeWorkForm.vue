<template>
    <v-container>
        <WeekNavigate />

        <HomeWorkTable
        class="py-4"
            @onClick="onClick"
        />

        <v-row class="justify-end">
            <v-btn 
                color="#e30615" 
                class="white--text mt-4"
                @click="onSubmit"
            >Выбрать {{ selectedDay }}</v-btn>
        </v-row>
    </v-container>
</template>

<script>
import WeekNavigate from '@/components/WeekNavigate'
import HomeWorkTable from '@/components/HomeWorkTable'

export default {
    components: {
        WeekNavigate,
        HomeWorkTable
    },

    data: () => ({
        selectedDay: ''
    }),

    methods: {
        onClick(day) {
            this.selectedDay = day
        },

        onSubmit() {
            this.$store.dispatch('user/addWeekDay', this.selectedDay)
            this.$router.push('Calendar')
        }
    }
}
</script>


