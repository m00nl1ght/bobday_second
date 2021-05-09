<template>
    <v-container>
        <WeekNavigate />

        <HomeWorkTable class="pt-4"/>
        
        <HomeWorkCalendarTable />
    </v-container>
</template>

<script>
import WeekNavigate from '@/components/WeekNavigate'
import HomeWorkTable from '@/components/HomeWorkTable'
import HomeWorkCalendarTable from '@/components/HomeWorkCalendarTable'

export default {
    components: {
        WeekNavigate,
        HomeWorkTable,
        HomeWorkCalendarTable
    }
}
</script>