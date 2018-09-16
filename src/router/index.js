import Vue from 'vue'
import Router from 'vue-router'
import WordOfTheDayComponent from '@/components/WordOfTheDayComponent'
import DictionaryComponent from '@/components/DictionaryComponent'
import TextAnalyserComponent from '@/components/TextAnalyserComponent'
import PdfComponent from '@/components/PdfComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordOfTheDay',
      component: WordOfTheDayComponent
    },
    {
      path: '/dictionary/:word',
      name: 'Dictionary',
      component: DictionaryComponent,
      props: true
    },
    {
      path: '/text-analyser',
      name: 'TextAnalyser',
      component: TextAnalyserComponent,
      props: (route) => ({ text: route.query.text })
    },
    {
      path: '/pdf',
      name: 'Pdf',
      component: PdfComponent
    }
  ]
})
