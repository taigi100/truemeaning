<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>Insert text date</label>
    <input type="number" v-model="date" placeholder="Insert text date">
    <p class="content" v-html="analisedText"></p>
  </div>
</template>

<script>

import api from '../InMemoryAPI'

export default {
  name: 'TextAnalyser',
  props: {
    text: String,
    default: ''
  },
  data () {
    return {
      msg: 'Text Analyser',
      analisedText: '',
      date: 2018
    }
  },
  mounted () {
    this.Analyse(this.text)
  },
  beforeUpdate () {
    this.Analyse(this.text)
  },
  methods: {
    Analyse: function (text) {
      var words = text.split(' ')
      var solution = ''
      for (var word of words) {
        const dictWord = api(word)
        if (!dictWord) {
          solution += word
        } else if (dictWord) {
          solution += this.ComputeSolution(word, dictWord.meanings)
        }
        solution += ' '
      }
      this.analisedText = solution
    },
    ComputeSolution: function (word, meanings) {
      var solution = '<span title="'
      for (var meaning of meanings) {
        solution += meaning.year + ':' + meaning.meaning + '\n'
      }
      solution += '"><mark>' + word + '</mark></span>'
      return solution
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
  .content {
    margin-top: 3%;
  }
</style>
