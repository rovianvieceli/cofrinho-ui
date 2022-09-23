<template>
  <div id="not-found-page">
    <Content :titulo="notFoundTitle">
      <p class="font-weight-light">
        Pedimos desculpa pelo inconveniente, mas a página que foi solicitada não existe mais ou estão passando por
        dificuldades.
      </p>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from "@/components/layout/Content.vue";

@Component({
  components: {Content},
})
export default class NotFoundPage extends Vue {
  private notFoundTitle = "404: Ops...página não foi localizada."
}
</script>
