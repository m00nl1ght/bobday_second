<template>
  <HomeWork>
      <template v-slot:default>
        <HomeWorkCalendar />
      </template>
  </HomeWork>
</template>

<script>
import HomeWork from '@/components/HomeWork'
import HomeWorkCalendar from '@/components/HomeWorkCalendar'

export default {
  name: 'Calendar',

  components: {
    HomeWork,
    HomeWorkCalendar
  }
}
</script>
