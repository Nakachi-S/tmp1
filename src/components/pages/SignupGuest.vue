<template>
    <v-container grid-list-md>
        <v-layout row wrap align-center justify-center fill-height>
            <v-flex xs12 sm8 lg4 md5>
                <v-card class="login-card">
                    <v-card-title>
                    <span class="headline">Signup to Smart-Inn (Guest)</span>
                    </v-card-title>

                    <v-card-text>

                    <v-layout
                        row
                        fill-height
                        justify-center
                        align-center
                        v-if="loading"
                    >
                        <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                        />
                    </v-layout>


                    <v-form v-else ref="form" v-model="valid" lazy-validation>
                        <v-container>

                        <v-text-field
                            v-model="credentials.email"
                            :counter="70"
                            label="Eメールアドレス"
                            maxlength="70"
                            required
                        />

                        <v-text-field
                            type="password"
                            v-model="credentials.password"
                            :counter="20"
                            label="パスワード"
                            maxlength="20"
                            required
                        />

                        </v-container>
                        <v-btn class="pink white--text" :disabled="!valid" @click="submit">登録</v-btn>

                    </v-form>


                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm8 md5>
              <a href='/'>Homeにもどる</a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
  name: 'SignupGuest',
  data: () => ({
    credentials: {},
    valid: true,
    loading: false,
    email: [
      v => !!v || 'ユーザー名は必須です'
    ],
    password: [
      v => !!v || 'パスワードは必須です'
      // v => (v && v.length > 4) || "ユーザー名は5文字以上でなければなりません"
    ]
  }),
  methods: {
    submit () {
      this.$request.auth.signup_guest(this.credentials.email, this.credentials.password).then(res => {
        console.log(res)
        // this.$request.defaults.headers.common['Authorization'] = `JWT ${res.data.token}`
        // this.$router.push('/auth')
      }, err => {
        this.nonFieldErrors = err.response.data.nonFieldErrors
        console.log(err)
      })
    }
  }
}
</script>