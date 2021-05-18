<template>
  <v-card flat>
    <v-card-text>
      <div class="mb-7">
        <v-card-title class="justify-center teal--text">Register</v-card-title>
        <v-card-subtitle class="text-center">Register as new user</v-card-subtitle>
      </div>

      <v-form ref="form" v-model="valid" lazy-validation autocomplete="off">
        <v-row>
          <v-col cols="6">
            <v-text-field
              outlined
              :rules="rules.name"
              v-model="form.name"
              append-icon="mdi-account"
              label="Name"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              outlined
              :rules="rules.family"
              v-model="form.family"
              append-icon="mdi-account"
              label="Family"
              required
            />
          </v-col>
        </v-row>

        <v-text-field
          outlined
          :rules="rules.mobile"
          v-model="form.mobile"
          prefix="+98"
          append-icon="mdi-phone"
          type="number"
          label="Mobile"
          required
        />

        <v-text-field
          outlined
          :rules="rules.email"
          v-model="form.email"
          append-icon="mdi-email"
          type="email"
          label="E-mail"
          required
        />

        <v-row>
          <v-col cols="6">
            <v-text-field
              outlined
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.password"
              :rules="rules.password"
              label="Password"
              required
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              outlined
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password_confirmation"
              :rules="rules.password_confirmation"
              label="Password Confirmation"
              :append-icon="showPassword ? 'mdi-lock-open-variant' : 'mdi-lock'"
              required
            />
          </v-col>
        </v-row>

        <v-divider vertical />

        <v-card-actions>
          <v-btn :loading="loading" color="teal" @click="register">
            <v-icon left>mdi-account-plus</v-icon>
            Register
          </v-btn>
          <v-spacer />
          <v-btn text @click="goLogin">
            Login
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "RegisterCard",

  data() {
    return {
      loading: false,
      valid: true,
      showPassword: false,
      form: {
        name: null,
        family: null,
        mobile: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      rules: {
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length >= 3) || 'Name must be less than 10 characters',
        ],
        family: [
          v => !!v || 'Family is required',
          v => (v && v.length >= 3) || 'Family must be less than 10 characters',
        ],
        mobile: [
          v => !!v || 'E-mail is required',
          v => (v && v.length <= 10) || 'Mobile must be less than 10 characters',
          v => /^9\d{9}$/.test(v) || 'Mobile must be valid IR mobile number'
        ],
        email: [
          v => !!v || 'Mobile is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid email',
        ],
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be at least 6 characters',
        ],
        password_confirmation: [
          v => !!v || 'Password confirmation is required',
          v => (v && v === this.form.password) || 'Password confirmation must match with password',
        ],
      },
    }
  },

  methods: {
    register() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store.dispatch('auth/register', this.form)
        .finally(() => {
          this.loading = false
        })
      }
    },
    goLogin() {
      this.$emit('go-to', 0)
    },
  },
}
</script>

<style scoped>

</style>
