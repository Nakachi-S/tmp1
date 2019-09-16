<template>
  <div>
    <v-app-bar app :flat="true" color="light-blue" dark src="../../assets/Smart-Inn-logo-white.png">
        <!--<v-spacer></v-spacer>-->
      <v-toolbar-title>Smart-Inn</v-toolbar-title>
    </v-app-bar>

    <v-container fluid fill-height class="pt-0">
      <v-layout justify-center align-center wrap row class="keyvisual pa-0">
        <v-flex xs12 class="keyvisual-title">
          チェックインを<br>
          スムーズに、スマートに。
        </v-flex>
        <v-flex xs12 sm6 md4 text-center mt-10 mb-10 class="keyvisual-btn">
          <v-btn large outlined  color="white" href="/guest/signup">はじめる</v-btn>
          <v-btn large depressed color="white" style="color: #03A9F4;" href="/login">ログイン</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container fluid fill-height mt-10>
      <v-layout justify-center align-center wrap row class="host">
        <v-flex sm6 text-center>
          <v-layout justify-center align-center wrap coloumn class="host">
            <v-flex xs12 text-center>
              <img src="../../assets/airbnb.svg">
            </v-flex>
            <v-flex xs12 text-center> 
              <img src="../../assets/hotel.png">
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm4>
          <v-card outlined>
            <v-card-title>宿泊施設提供者へ</v-card-title>
            <v-card-text>あなたの宿泊施設をスマートに</v-card-text>
            <v-card-actions>
              <v-btn color="light-blue" href="/host/signup"><span style="color:white">はじめる</span></v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    
    
    <v-footer app color="light-blue">
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </div>
  <!--<img src="../../assets/Smart-Inn-logo-white.png">
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
              <a href='/login'>ログインはこちら</a>
            </v-card>
          </v-flex>
          <v-flex xs12 sm8 lg4 md5>
            <v-card class='signup-card'>
              <v-card-title>
                <span class="headline">サインアップ</span>
              </v-card-title>
              <a href='/guest/signup'>ゲストのサインアップ</a><br>
              <a href='/host/signup'>ホストのサインアップ</a>
            </v-card>
          </v-flex>
      </v-layout>
  </v-container>
  -->
</template>

<script>
// import router from '../../router'
export default {
  name: 'Welcome',
  methods: {
    checkLoggedIn () {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.keyvisual {
    background-color: #03A9F4;
}
.keyvisual-title {
  font-size: 1.6em;
  text-align: center;
  color: white;
  padding-top: 50px;
}
.keyvisual-logo img{
  width: 20%;
  height: auto;
}
.host img{
  width: 30%;
  height: auto;
}

</style>