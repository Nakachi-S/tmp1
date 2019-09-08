<template>
    <v-container grid-list-md>
        <v-layout row wrap align-center justify-center fill-height>
            <v-flex xs12 sm8 lg4 md5>
                <v-card class="welcome-card">
                    <v-card-title>
                      <span class="headline">Welcome to Smart-Inn!!!</span>
                    </v-card-title>
                    <v-spacer/>
                </v-card>
            </v-flex>
            <v-flex xs12 sm8 lg4 md5>
              <v-card class='login-card'>
                <a href='/auth'>ログインはこちら</a>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8 lg4 md5>
              <v-card class='signup-card'>
                <v-card-title>
                  <span class="headline">サインアップ</span>
                </v-card-title>
                <a href='/signup_guest'>ゲストのサインアップ</a><br>
                <a href='/signup_host'>ホストのサインアップ</a>
              </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// import router from '../../router'
export default {
  name: 'Welcome',
  methods: {
    checkLoggedIn () {
      this.$router.push('/auth')
    }
  }
}
</script>