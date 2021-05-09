<template>
    <v-container>
        <WeekNavigate />

        <HomeWorkTable />

        <v-row class="justify-end">
            <v-btn color="#e30615" class="white--text mt-4">Выбрать 22.03.2021</v-btn>
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
        page: 0,
        currentDate: Date.now()
    }),

    computed: {
        week() {
// текущее дата/время
var currentDateTime = new Date(this.currentDate);
// время начала текущего года, в миллисекундах
var startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
// текущее время в миллисекундах
var currentTime = currentDateTime.getTime();
// прошедшее время с начала года, в миллисекундах
var pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
// количество миллисекунд в одном часе
var hourOfMillisecs = 3600000;
// количество часов в одном дне
var hoursOfOneWeek = 24;

// document.write("С начала года: <br />");
// document.write("Прошло " + (pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek|0) + " дней<br />");
// document.write("Сегодня " + Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek) + " день");
return "Прошло " + (pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek/7) + " недель"

        }
    }
}
</script>


