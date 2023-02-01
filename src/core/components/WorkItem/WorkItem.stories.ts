import UiWorkItem from './WorkItem.vue'

export default {
  title: 'Ui/WorkItem',
  argTypes: {
    img: {
      control: { type: 'text' },
      description: 'provide the address of the image'
    },
    year: {
      control: { type: 'text' },
      description: 'report to a valid year'
    },
    title: {
      control: { type: 'text' },
      description: 'enter a title for the content'
    },
    subtitle: {
      control: { type: 'text' },
      description: 'enter a subtitle for the content'
    },
    description: {
      control: { type: 'text' },
      description: 'enter a description for the content'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiWorkItem },
  setup () {
    return { args }
  },
  template: '<ui-work-item v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  img: 'src/core/assets/img/image01.png',
  year: '2022',
  title: 'Designing Dashboards',
  subtitle: 'Dashboard',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}

Default.parameters = {
  docs: {
    source: {
      code: `<ui-work-item 
      img: 'src/core/assets/img/image01.png',
  year: '2022',
  title: 'Designing Dashboards',
  subtitle: 'Dashboard',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
      />`,
      language: 'vue',
      type: 'auto'
    }
  }
}
