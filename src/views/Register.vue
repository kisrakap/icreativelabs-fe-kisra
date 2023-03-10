<template>
  <v-container fluid>
    <v-row justify="center" class="pt-15">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#143C4A" class="text-white" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
              ></v-text-field>
              <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>
          <v-alert
            v-if="confirmPassword && confirmPassword !== password"
            type="error"
          >
            Passwords do not match
          </v-alert>
          <v-btn
            color="success"
            block
            :disabled="password !== confirmPassword"
            @click.prevent="register"
          >
            Register
          </v-btn>
          <div class="pa-5">

          </div>
          <span>
            Sudah punya akun ? 
          </span><v-btn
          color="secondary"
          block
          dark
          @click.prevent="tologin()"
        >
          To Login
        </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  created(){
    
  },
  methods: {
    register() {
      let payload = {
        email : this.email,
        password : this.password,
        confpassword : this.confirmPassword
      }
      this.$store.dispatch('register', payload)
    },
    tologin() {
      this.$router.push('/login')
    }
  }
}
</script>

