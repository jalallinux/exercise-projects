<template>
  <v-card flat>
    <v-card-text>
      <div class="mb-7">
        <v-card-title class="justify-center teal--text">Login</v-card-title>
        <v-card-subtitle class="text-center">Login to dashboard</v-card-subtitle>
      </div>

      <v-form ref="form" v-model="valid" lazy-validation autocomplete="off">
        <v-text-field
          outlined
          :disabled="loading"
          :rules="rules.email"
          v-model="form.email"
          append-icon="mdi-email"
          label="E-mail"
          required
        />

        <v-text-field
          outlined
          :disabled="loading"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          v-model="form.password"
          :rules="rules.password"
          label="Password"
          @keydown.enter="login"
          required
        />

        <v-divider vertical/>

        <v-card-actions>
          <v-btn :loading="loading" color="teal" @click="login">
            <v-icon left>mdi-door-open</v-icon>
            Login
          </v-btn>
          <v-spacer/>
          <v-btn text @click="goRegister">
            Register
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LoginCard",

  data() {
    return {
      loading: false,
      valid: true,
      showPassword: false,
      form: {
        email: null,
        password: null,
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be at least 6 characters',
        ],
      },
    }
  },

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store.dispatch('auth/login', this.form)
          .then((user) => {
            this.$router.push('/profile')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    goRegister() {
      this.$emit('go-to', 1)
    },
  },
}
</script>

<style scoped>

</style>
