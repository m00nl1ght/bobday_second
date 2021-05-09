<template>
    <v-row class="justify-center align-center py-4">
        <div class="table__row">
            <div class="date_block"></div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
        </div>
        <div class="table__row">
            <div class="date_block"></div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
            <div class="date_block">пн 22</div>
        </div>
    </v-row>
</template>


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

    .bg-green {
        background-color: #b9ead5;
    }

    .bg-light-green {
        background-color: #eafff6;
    }

</style>