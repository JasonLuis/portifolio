import UiPicturePerfil from './PicturePerfil.vue'

export default {
  title: 'Ui/PicturePerfil',
  component: UiPicturePerfil,
  argTypes: {
    img: {
      control: {
        type: 'text'
      },
      description: 'props to fill the circle'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiPicturePerfil },
  setup () {
    return { args }
  },
  template: '<ui-picture-perfil v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  img: 'src/core/assets/img/perfil.jpg'
}

Default.parameters = {
  docs: {
    source: {
      code: `<ui-picture-perfil
        img: 'src/core/assets/img/perfil.jpg'
      />`,
      language: 'vue',
      type: 'auto'
    }
  }
}
