<template>
  <div id="menu">
<!--    <v-navigation-drawer v-model="drawer" app clipped>-->
<!--      <template v-slot:prepend>-->
<!--        <v-list dense flat>-->
<!--          <v-list-item-group v-model="selectedItem">-->
<!--            <template v-for="(item, key) in listMenu">-->
<!--              <v-list-item :key="key" :to="item.url" link>-->
<!--                <v-list-item-icon>-->
<!--                  <v-icon>{{item.icon}}</v-icon>-->
<!--                </v-list-item-icon>-->
<!--              </v-list-item>-->
<!--            </template>-->
<!--          </v-list-item-group>-->
<!--        </v-list>-->
<!--      </template>-->
<!--    </v-navigation-drawer>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Hello extends Vue {
  @Prop() private msg!: string;
}
</script>
