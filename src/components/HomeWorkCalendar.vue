<template>
    <v-container>
        <WeekNavigate />

        <HomeWorkTable />
    </v-container>
</template>

<script>
import WeekNavigate from '@/components/WeekNavigate'
import HomeWorkTable from '@/components/HomeWorkTable'

export default {
    components: {
        WeekNavigate,
        HomeWorkTable
    }
}
</script>