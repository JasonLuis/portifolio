import UiBaseButton from './BaseButton.vue'

export default {
  title: 'Ui/Button',
  component: UiBaseButton,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label of the button'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiBaseButton },
  setup () {
    return { args }
  },
  template: '<ui-base-button v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  label: 'Download Resume'
}

Default.parameters = {
  docs: {
    source: {
      code: '<ui-base-button :label="myLabel" />',
      language: 'vue',
      type: 'auto'
    }
  }
}
