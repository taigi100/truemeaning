<template>
  <div id="app">
    <div class="container">
      <div class = "row align-items-start">
        <div class="col align-self-center">
          <h1>True Meaning</h1>
        </div>
      </div>
      <div class = "row align-items-center">
        <div class="col align-self-center">
          <input type="text" v-model="text" class="form-control search-box" />
        </div>
      </div>
      <div class = "row align-items-center buttons">
        <div class="col align-self-center">
          <router-link :to="{ name: 'Dictionary', params: { word: text } }" >
            <button type="button" class="btn btn-secondary">Dictionary</button>
          </router-link>
          <router-link :to="{ name: 'TextAnalyser', query: { text: text } }">
            <button type="button" class="btn btn-secondary">Analise text</button>
          </router-link>
          <router-link :to="{ name: 'Pdf'} ">
            <button type="button" class="btn btn-secondary">Pdf</button>
          </router-link>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col align-self-center">
          <router-view class="content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.Book = window.ePub('https://s3.amazonaws.com/moby-dick/')

export default {
  name: 'App',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}

.search-box {
  margin-top: 10%;
  width: 75%;
  align-self: center;
  display: inline-block;
  text-align: center;
}

.content {
  margin-top: 3%;
}

.buttons{
  margin-top: 1%;
}
</style>
