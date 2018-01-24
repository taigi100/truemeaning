<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ word }}</h2>
    <h3>{{ meaning }}</h3>
  </div>
</template>

<script>

import api from '../InMemoryAPI'

export default {
  name: 'Dictionary',
  props: ['word'],
  data () {
    return {
      msg: 'Dictionary',
      meaning: ''
    }
  },
  mounted () {
    this.FindWord(this.word)
  },
  beforeUpdate () {
    this.FindWord(this.word)
  },
  methods: {
    FindWord: function (word) {
      let foundWord = api(this.word)
      if (!foundWord) {
        this.meaning = 'Word not found'
      }
      let meanings = foundWord.meanings
      if (meanings && meanings[0]) {
        this.meaning = meanings[0].meaning
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
