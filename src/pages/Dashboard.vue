<template>
  <div id="home">
    <InOut/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    InOut: () => import('@/components/dashboard/InOut.vue')
  },
})
export default class Home extends Vue {
}
</script>
