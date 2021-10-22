import { MenuEntry } from '@soy-libs/uikit2'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
      {
        label: t('Bridge'),
        href: 'https://callistobridge.netlify.app/',
        target: "_blank",
      },
      {
        label: t('CHOAM Sale'),
        href: 'https://choamtoken.com/publicsale/',
        target: "_blank",
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/#',
  //   status: menuStatus.SOON,
  // },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://soy.finance/',
    // status: menuStatus.SOON,
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance/soyfinance-swap',
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
      },
    ],
  },
]

export default config
