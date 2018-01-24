<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TextAnalyser',
  props: {
    text: String,
    default: ''
  },
  data () {
    return {
      msg: 'Text Analyser'
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
