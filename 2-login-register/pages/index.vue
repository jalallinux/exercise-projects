<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card max-width="500" class="mx-auto">
        <v-toolbar dark color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-shield-account</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>Login Register System</v-toolbar-title>
        </v-toolbar>

        <v-tabs v-model="currentTab" dark fixed-tabs>
          <v-tabs-slider />
          <v-tab v-for="(tab, i) in tabs" :key="i" class="primary--text">
            <v-icon v-text="tab.icon" />
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="currentTab">
          <v-tab-item v-for="(tab, i) in tabs" :key="i">
            <component @go-to="changeTab" :is="tab.component" />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";

export default {
  name: 'index',

  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          name: 'login',
          icon: 'mdi-account-arrow-right',
          component: LoginCard
        },
        {
          name: 'register',
          icon: 'mdi-account-plus',
          component: RegisterCard
        },
      ]
    }
  },

  methods: {
    changeTab(newTab) {
      this.currentTab = newTab
    }
  },
}
</script>
