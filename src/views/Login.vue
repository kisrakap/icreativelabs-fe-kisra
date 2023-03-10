<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#143C4A" class="text-white">
            <v-toolbar-title>Login Page </v-toolbar-title>
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
              <v-btn
                color="success"
                block
                dark
                @click.prevent="login()"
              >
                Login
              </v-btn>
              <div class="pa-5">

              </div>
              <span>
                Belum punya akun ? 
              </span><v-btn
              color="secondary"
              block
              dark
              @click.prevent="toregister()"
            >
              To Register
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
      password: ''
    }
  },
  methods: {
    login() {
      let payload = {
        email : this.email,
        password : this.password
      }
      this.$store.dispatch('login', payload)
    },
    toregister(){
      this.$router.push('/register')
    }
  }
}
</script>

