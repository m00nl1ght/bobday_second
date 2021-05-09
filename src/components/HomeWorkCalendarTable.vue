<template>
    <v-row class="justify-center align-center">
        <div v-for="user in users" :key='user.id' class="table__row">
            <div class="date_block">{{ user.name }}</div>
            <div v-for="(day, index) in days"
                :key="index"
                class="date_block"
                :class="user.workDay.indexOf( formatDate(currentDate, index) ) != -1 ? 'isActive': ''"
            >
              {{formatDate(currentDate, index)}}
            </div>
        </div>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        days: ['пн', 'вт', 'ср', 'чт', 'пт'],
    }),

    methods: {

    },

    computed: {
        currentDate() {
            return this.$store.getters['datetime/getCurrentDate']
        },

        users() {
            return this.$store.getters['user/getUsers']
        }
    }

}
</script>

<style lang="scss" scoped>
    .date_block {
        width: 14%;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        border: solid 1px #e8e8e8;
        background-color: #f7f9fb;

        &:first-child {
            width: 30%;
        }
    }

    .table__row {
        display: flex;
        width: 100%;
    }

    .isActive {
        background: linear-gradient(#b9ead1 0%, #b9ead1 10%, #eafff6 10%, #eafff6 100%)
    }

    .bg-green {
        background-color: #b9ead5;
    }

    .bg-light-green {
        background-color: #eafff6;
    }

</style>