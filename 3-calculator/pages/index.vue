<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-width="475" class="mx-auto">
        <v-toolbar dark color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-calculator</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>Calculator</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            class="calculator-display"
            clearable
            v-model="display"
            hide-details
            readonly
            outlined
          />
          <v-card-text style="height: 64px" class="text-center text-h6" v-text="result" />
          <Buttons @pressed="input" @clearOne="clearOne" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Buttons from "../components/Buttons";

export default {
  name: 'index',
  components: {Buttons},
  data() {
    return {
      operators: ['+', '-', '×', '÷'],
      display: '',
      result: '',
    }
  },

  methods: {
    input(button) {
      if (button.type === 'operator' && this.resultLastItemIsOperator) {
        this.display = (this.display.slice(0, -1) + button.text)
      } else {
        this.display += button.text
        this.display = this.display.replace(/\s+/g, ' ').trim()
      }
    },
    clearOne() {
      this.display = this.display.slice(0, -1)
    },
    eval(phrase) {
      phrase = phrase.replace('×', '*')
      phrase = phrase.replace('÷', '/')
      phrase = phrase.replace('π', 'pi')
      phrase = phrase.replace('√', 'sqrt')
      const result = this.$evaluate(phrase)
      return result ? result.toString() : ''
    }
  },

  computed: {
    resultLastItemIsOperator() {
      return this.operators.includes(this.display.charAt(this.display.length - 1));
    }
  },

  watch: {
    display(newValue, oldValue) {
      if (newValue === null)
        this.display = ''
      this.result = this.eval(this.display)
    },
  },
}
</script>

<style>
.calculator-display input {
  text-align: center !important;
  letter-spacing: 3px;
}
</style>
