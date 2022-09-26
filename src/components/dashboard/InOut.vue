<template>
  <Content :titulo="title">
    <v-row>
      <v-col v-for="card in cards" :key="card" cols="12">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>
          <v-list two-line>
            <template v-for="n in 6">
              <v-list-item :key="n">
                <v-list-item-avatar color="grey darken-1">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Message {{ n }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset/>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </Content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Content: () => import('@/components/layout/Content.vue')
  }
})
export default class Dashboard extends Vue {
  private title = 'Resumos de Entradas e Saídas'
  private cards = ['Hoje', 'Ontem']

  public mounted(): void {
    const {title} = this.$route.meta
    if (title) {
      this.title = `${title} - ${this.title}`
    }
  }
}
</script>
