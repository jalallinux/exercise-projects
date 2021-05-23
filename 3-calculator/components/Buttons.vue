<template>
  <v-row align="center" justify="center">
    <v-col cols="2" v-for="(button, i) in buttons" :key="i">
      <client-only>
        <v-btn
          @click="atClick(button)"
          width="100%"
          class="text-h6"
          :style="button.style"
          style="text-transform: none"
          v-html="button.text"
        />
      </client-only>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {
      buttons: [
        {
          type: 'input',
          text: '(',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: ')',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: 'round',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'operator',
          text: '^',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'input',
          text: 'deg',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'clearOne',
          text: 'CE',
          style: {
            color: '#E0E0E0',
            backgroundColor: 'teal'
          }
        },
        {
          type: 'input',
          text: '7',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          },
        },
        {
          type: 'input',
          text: '8',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          },
        },
        {
          type: 'input',
          text: '9',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'operator',
          text: '÷',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'input',
          text: 'sin',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: 'cos',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: '4',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: '5',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: '6',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'operator',
          text: '×',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'input',
          text: 'tan',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: 'cot',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: '1',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: '2',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: '3',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'operator',
          text: '+',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'input',
          text: 'log',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: '√',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: '.',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: '0',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'input',
          text: ',',
          style: {
            color: '#E0E0E0',
            backgroundColor: ''
          }
        },
        {
          type: 'operator',
          text: '-',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          }
        },
        {
          type: 'input',
          text: 'π',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
        {
          type: 'input',
          text: 'e',
          style: {
            color: '#E0E0E0',
            backgroundColor: '#424242'
          },
        },
      ]
    }
  },
  methods: {
    atClick(button) {
      switch (button.type) {
        case 'input':
          return this.$emit('pressed', button)
        case 'operator':
          return this.$emit('pressed', button)
        default:
          return this.$emit(button.type)
      }
    }
  },
}
</script>

<style scoped>

</style>
