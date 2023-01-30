import UiBaseButton from './BaseButton.vue'

export default {
  title: 'Ui/Button',
  component: UiBaseButton,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiBaseButton },
  setup () {
    return { args }
  },
  template: '<UiBaseButton v-bind="args" />'
})

export const Default = Template.bind({})

// Default.args = {}

Default.parameters = {
  docs: {
    source: {
      code: '<UiBaseButton />',
      language: 'vue',
      type: 'auto'
    }
  }
}
