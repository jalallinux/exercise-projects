<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card max-width="500" class="mx-auto" v-if="currentUser">
        <v-toolbar dark color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-shield-account</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>Profile Card</v-toolbar-title>
          <v-spacer />
          <v-btn @click="logout" icon>
            <v-icon>mdi-account-off-outline</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-title class="justify-center teal--text">Welcome {{ `${currentUser.name} ${currentUser.family}` }}</v-card-title>
        <v-card-subtitle class="text-center">Your Profile Stored Information</v-card-subtitle>

        <v-list subheader three-line>
          <v-row justify="center">
            <v-col cols="6" v-for="(value, key) in currentUser" :key="key" v-if="!['password', 'id'].includes(key)">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="key.charAt(0).toUpperCase() + key.slice(1)" />
                  <v-list-item-subtitle v-text="value" />
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col cols="8">
              <v-list-item>
                <v-list-item-content>
                  <v-text-field
                    outlined
                    v-model="password"
                    :append-icon="icon"
                    :color="iconColor"
                    label="Guess Password"
                    required
                  />
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'
import bcrypt from 'bcryptjs'

export default {
  name: "profile",

  data() {
    return {
      password: null
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser'
    }),
    checkPassword() {
      return this.password && bcrypt.compareSync(this.password, this.currentUser.password)
    },
    iconColor() {
      return this.password && this.checkPassword ? 'green' : 'red'
    },
    icon() {
      return this.password && this.checkPassword ? 'mdi-lock-open-variant' : 'mdi-lock'
    }
  },
}
</script>

<style scoped>

</style>
