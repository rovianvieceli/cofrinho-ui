<template>
  <div id="home">
    <Dashboard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from "@/components/home/Dashboard.vue";

@Component({
  components: {Dashboard},
})
export default class Home extends Vue {
}
</script>
