<template>
  <v-app>
    <v-main>
      <v-container id="main-container" fluid>
        <slot/>
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar" :multi-line="true">
      {{ text }}
      <template v-slot:action="{attrs}">
        <v-btn text v-bind="attrs" @click="snackbar = false">Fechar</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Main extends Vue {
  private snackbar = false
  private text = 'A Snackbar example'
}
</script>
