import Vue from 'vue'
import { evaluate } from 'mathjs'

const MathMethod = {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        $evaluate(phrase) {
          try {
            const result = evaluate(phrase)
            return !(result instanceof Function) ? result : ''
          } catch (err) {
            return ''
          }
        }
      },
    })
  }
}

Vue.use(MathMethod)
