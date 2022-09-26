<template>
  <div id="menu">
    <v-app-bar app clipped-left dense>
      <v-spacer></v-spacer>

      <!--Todo: Componente-->
      <v-btn icon tile to="/">
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <!--Todo: Componente-->
      <v-btn icon tile>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <!--Todo: Componente-->
      <v-btn icon tile>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left offset-y rounded="0" transition="slide-x-transition">
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{on: tooltip}">
              <v-btn icon tile v-bind="attrs" v-on="{...tooltip, ...menu}">
                <v-icon>mdi-cog-outline</v-icon>
              </v-btn>
            </template>
            <span>Configurações</span>
          </v-tooltip>
        </template>

        <v-list dense>
          <template v-for="[icon, text] in config">
            <v-list-item :key="icon" link>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app clipped permanent>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-overlay>

      <template v-if="!overlay">
        <v-list>
          <v-list-item style="height: 65px;">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Rovian Vieceli</v-list-item-title>
              <v-list-item-subtitle>Adiministrador</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon @click.stop="mini = !mini">mdi-chevron-left</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item-group v-model="itemSelect" class="pt-2">
            <template v-for="[icon, text, url] in links">
              <v-list-item :key="icon" :to="url" dense>
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Menu extends Vue {
  private mini = true
  private drawer = true
  private overlay = false
  private itemSelect = 0
  private links = [
    ['mdi-wallet-outline', 'Carteira', 'carteira'],
    ['mdi-file', 'Extrato', 'extrato'],
    ['mdi-finance', 'Projeção', 'projecao'],
    ['mdi-file-document-multiple-outline', 'Relatórios', 'relatorios'],
  ]

  private config = [
    ['mdi-send-outline', 'Messagens'],
    ['mdi-account-box-outline', 'Perfil'],
    ['mdi-help', 'Ajuda'],
  ]
}
</script>
