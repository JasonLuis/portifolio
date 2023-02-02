import UiTopBar from './TopBar.vue'

export default {
  title: 'Ui/TopBar',
  argTypes: {
    options: {
      control: {
        type: 'array'
      },
      description: 'Props for toolbar item.'
    },
    modelValue: {
      control: 'text',
      description: 'Default props for the functioning of v-model'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiTopBar },
  setup () {
    return { args }
  },
  data () {
    return {
      model: ''
    }
  },
  template: '<ui-top-bar v-bind="args" v-model="model" />'
})

export const Default = Template.bind({})
Default.args = {
  options: [
    {
      label: 'Works',
      value: 'works'
    },
    {
      label: 'Blog',
      value: 'blog'
    },
    {
      label: 'Contact',
      value: 'contact'
    }
  ]
}
Default.parameters = {
  docs: {
    source: {
      code: `<ui-top-bar 
      options="[
        {
          label: 'Works',
          value: 'works'
        },
        {
          label: 'Blog',
          value: 'blog'
        },
        {
          label: 'Contact',
          value: 'contact'
        }
      ]"
      />`,
      language: 'vue',
      type: 'auto'
    }
  }
}
