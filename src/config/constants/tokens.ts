import { ChainId, Token } from '@soy-libs/sdk2'

export const SOY: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.CLOTESTNET]: new Token(
    ChainId.CLOTESTNET,
    '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
}

export const WCLO = new Token(ChainId.MAINNET, '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a', 18, 'WCLO', 'Wrapped CLO')
// export const DAI = new Token(ChainId.MAINNET, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin')
export const BUSDT = new Token(ChainId.MAINNET, '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4', 18, 'BUSDT', 'Tether USD')
// export const BTCB = new Token(ChainId.MAINNET, '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', 8, 'WBTC ', 'Wrapped BTC')

// export const UST = new Token(
//   ChainId.MAINNET,
//   '0x692597b009d13C4049a947CAB2239b7d6517875F',
//   18,
//   'UST',
//   'Wrapped UST Token',
// )
export const ETH = new Token(
  ChainId.MAINNET,
  '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
  18,
  'ccETH',
  'Wrapped Ether',
)
// export const USDC = new Token(
//   ChainId.MAINNET,
//   '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // '0xc950a687e8d08e70fc072ca8c3596b62aef91faf',
//   18,
//   'USDC',
//   'Polygon-Peg USD Coin',
// )

const tokens = {
  clo: {
    symbol: 'CLO',
    projectLink: 'https://callisto.network/',
  },
  soy: {
    symbol: 'SOY',
    address: {
      820: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
      20729: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    },
    decimals: 18,
    projectLink: 'https://app.soy.finance/',
  },
  wclo: {
    symbol: 'WCLO',
    address: {
      820: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      20729: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  busdt:{
    symbol: 'BUSDT',
    address: {
      820: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      20729: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
    },
    decimals: 18,
    projectLink: 'https://bullsinvesting.club/',
  },
  cloe:{
    symbol: 'CLOE',
    address: {
      820: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
      20729: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
    },
    decimals: 18,
    projectLink: 'https://callistoenterprise.com/',
  },
  ccetc:{
    symbol: 'ccETC',
    address: {
      820: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
      20729: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F/transactions',
  },
  ccbnb:{
    symbol: 'ccBNB',
    address: {
      820: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      20729: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF/transactions',
  },
  cceth:{
    symbol: 'ccETH',
    address: {
      820: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
      20729: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC00860947035a26Ffe24EcB1301ffAd3a89f910/transactions',
  },
  "ccbnb_erc223":{
    symbol: 'ccBNB',
    address: {
      820: '0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9',
      20729: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9/transactions',
  },
  "cceth_erc223":{
    symbol: 'ccETH',
    address: {
      820: '0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796',
      20729: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796/transactions',
  },
}

export default tokens
