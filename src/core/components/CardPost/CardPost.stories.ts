import UiCardPost from './CardPost.vue'

export default {
  title: 'Ui/CardPost',
  component: UiCardPost,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title to card'
    },
    date: {
      control: { type: 'text' },
      description: 'The data to card'
    },
    nameProject: {
      control: { type: 'text' },
      description: 'The name project to card'
    },
    info: {
      control: { type: 'text' },
      description: 'The info to card'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiCardPost },
  setup () {
    return { args }
  },
  template: '<ui-card-post v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  title: 'Making a design system from scratch',
  date: '12 Feb 2020',
  nameProject: 'Design, Pattern',
  info: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}

Default.parameters = {
  docs: {
    source: {
      code: '<ui-card-post />',
      language: 'vue',
      type: 'auto'
    }
  }
}
