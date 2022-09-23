<template>
  <div id="content">
    <v-row>
      <v-col v-if="titulo" cols="12">
        <p class="heading title">{{ titulo }}</p>
      </v-col>
      <v-col cols="12">
        <slot/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Content extends Vue {
  @Prop() public titulo!: string
}
</script>
