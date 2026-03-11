import type { ThemeConfig } from 'antd'

const config: ThemeConfig = {
  token: {
    fontFamily: "Open Sans, 'san-serif'",
    colorPrimary: '#01D167',
  },
  components: {
    Menu: {
      itemColor: '#FFF',
      itemHoverColor: '#01D167',
      itemHoverBg: 'transparent',
      itemActiveBg: 'transparent',
      itemSelectedBg: 'transparent',
    },
    Button: {
      colorPrimary: '#325BAF',
      borderRadius: 4,
    },
    Tabs: {
      inkBarColor: '#23CEFD',
      itemColor: '#22222230',
      itemSelectedColor: '#222222',
    },
    Collapse: {
      headerBg: '#F5F9FF',
      headerPadding: '24px',
      contentPadding: '24px',
    },
  },
}

export { config }
