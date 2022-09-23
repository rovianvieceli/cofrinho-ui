<template>
  <div id="app">
    <Main>
      <router-view :key="$route.fullPath"/>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Main: () => import('@/components/layout/Main.vue')
  }
})
export default class App extends Vue {
}
</script>
