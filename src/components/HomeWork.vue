<template>
    <v-card>
        <v-container>
            <v-row>
                <v-col cols="5">
                    <PictureBlock title="Работа на дому" />
                </v-col>

                <v-col cols="7">
                    <slot></slot>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import PictureBlock from '@/components/PictureBlock'


export default {
  name: 'Home',

  components: {
    PictureBlock,
  }


}
</script>