import UiListWork from './ListWork.vue'

export default {
  title: 'Ui/ListWork',
  component: UiListWork,
  argTypes: {
    listItems: {
      control: {
        type: 'array'
      },
      description: 'Props for the content of the cards, provides image, year, title, subtitle and description.'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiListWork },
  setup () {
    return { args }
  },
  template: '<ui-list-work v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  listItems: [
    {
      img: 'src/core/assets/img/image01.png',
      year: '2022',
      title: 'Designing Dashboards',
      subtitle: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      img: 'src/core/assets/img/image02.png',
      year: '2022',
      title: 'Vibrant Portraits of 2020',
      subtitle: 'Illustration',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      img: 'src/core/assets/img/image03.png',
      year: '2022',
      title: '36 Days of Malayalam type',
      subtitle: 'Typography',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ]
}

Default.parameters = {
  docs: {
    source: {
      code: `<ui-list-work
      :list-items= "[
        {
          img: 'src/core/assets/img/image01.png',
          year: '2022',
          title: 'Designing Dashboards',
          subtitle: 'Dashboard',
          description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
          img: 'src/core/assets/img/image01.png',
          year: '2022',
          title: 'Designing Dashboards',
          subtitle: 'Dashboard',
          description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
          img: 'src/core/assets/img/image01.png',
          year: '2022',
          title: 'Designing Dashboards',
          subtitle: 'Dashboard',
          description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
      ]"
       />`,
      language: 'vue',
      type: 'auto'
    }
  }
}
