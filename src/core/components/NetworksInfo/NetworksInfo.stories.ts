import UiNetworks from './NetworksInfo.vue'

export default {
  title: 'Ui/Networks',
  component: UiNetworks,
  argTypes: {
    icons: {
      control: {
        type: 'array'
      },
      description: 'props to insert the icons'
    },
    text: {
      control: {
        type: 'text'
      },
      description: 'props to insert props to insert footer text'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UiNetworks },
  setup () {
    return { args }
  },
  template: '<ui-networks v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  icons: [
    {
      src: 'src/core/assets/icons/network/facebook.svg'
    },
    {
      src: 'src/core/assets/icons/network/instagram.svg'
    },
    {
      src: 'src/core/assets/icons/network/twitter.svg'
    },
    {
      src: 'src/core/assets/icons/network/linkedin.svg'
    }
  ],
  text: 'Copyright ©2020 All rights reserved'
}

Default.parameters = {
  docs: {
    source: {
      code: `<ui-networks 
      icons="[
        {
          src: 'src/core/assets/icons/network/facebook.svg'
        },
        {
          src: 'src/core/assets/icons/network/instagram.svg'
        },
        {
          src: 'src/core/assets/icons/network/twitter.svg'
        },
        {
          src: 'src/core/assets/icons/network/linkedin.svg'
        }
      ]"
      text="Copyright ©2020 All rights reserved"
      />`,
      language: 'vue',
      type: 'auto'
    }
  }
}
