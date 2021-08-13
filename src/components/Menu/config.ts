import { MenuEntry, menuStatus } from '@soy-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/#',
    status: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/#',
    status: menuStatus.SOON
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://soy.finance/',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SoyFinance/soyfinance-swap',
      },
      {
        label: 'Docs',
        href: 'https://callisto.network/',
      },
      {
        label: 'Blog',
        href: 'https://callisto.network/blog/',
      },
    ],
  },
]

export default config
