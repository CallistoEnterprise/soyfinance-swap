import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 2, 4) should always be at the top of the file.
   */
  
   {
    pid: 2,
    lpSymbol: 'SOY-CLO LP',
    lpAddresses: {
      20729: '',
      820: '0x1ceE27d0627ce8A81dF9B4D7eEE0d753b8c2F613',
    },
    localFarmAddresses: {
      820: '0xf43Db9BeC8F8626Cb5ADD409C7EBc7272c8f5F8f',
      20729: ''
    },
    token: tokens.soy,
    quoteToken: tokens.wclo,
  },
  {
    pid: 4,
    lpSymbol: 'BUSDT-CLO LP',
    lpAddresses: {
      20729: '',
      820: '0xB852AD87329986EaC6e991954fe329231D1E4De1',
    },
    localFarmAddresses: {
      820: '0x3E5B906eE1Cb467E1511a2b1ad5a1bc4a3F9BF8B',
      20729: ''
    },
    token: tokens.busdt,
    quoteToken: tokens.wclo,
  },
  {
    pid: 5,
    lpSymbol: 'SOY-BUSDT LP',
    lpAddresses: {
      20729: '',
      820: '0x23288A0a9c7ac3bEC523aeED146E4F0bf04d6309',
    },
    localFarmAddresses: {
      820: '0xf16edf5Ba6bc116C17f6769deB470a190e272381',
      20729: ''
    },
    token: tokens.soy,
    quoteToken: tokens.busdt,
  },
  {
    pid: 3,
    lpSymbol: 'CLOE-CLO LP',
    lpAddresses: {
      20729: '',
      820: '0x6cC3F66d249D6bF299b226DEeB3E1c9Ed4dF60Da',
    },
    localFarmAddresses: {
      820: '0xfe61A8dc1458D013f31b7B5d0DDf82864Cf89035',
      20729: ''
    },
    token: tokens.cloe,
    quoteToken: tokens.wclo,
  },
  {
    pid: 8,
    lpSymbol: 'ETC-SOY LP',
    lpAddresses: {
      20729: '',
      820: '0xcE49b862ED38414C86914Df5E6d854AfBe203563',
    },
    localFarmAddresses: {
      820: '0xF257e70b0B4A5E75BD351ceA7499b54f29636b0c',
      20729: ''
    },
    token: tokens.ccetc,
    quoteToken: tokens.soy,
  },
  {
    pid: 9,
    lpSymbol: 'ETC-CLO LP',
    lpAddresses: {
      20729: '',
      820: '0x3493391e234834c93C0ED675A4872cF48D63AD1C',
    },
    localFarmAddresses: {
      820: '0x009B08c79aF977557513a71132fC1CcC582Be310',
      20729: ''
    },
    token: tokens.ccetc,
    quoteToken: tokens.wclo,
  },
  {
    pid: 10,
    lpSymbol: 'SOY-ETH LP',
    lpAddresses: {
      20729: '',
      820: '0xE0A4D8356c0Ded2e0E7A4Af6DB2a164f7d1aD243',
    },
    localFarmAddresses: {
      820: '0xC2d33425aD2A25d78252a31d6f2C51A2F4f31394',
      20729: ''
    },
    token: tokens.cceth_erc223,
    quoteToken: tokens.soy,
  },
  {
    pid: 11,
    lpSymbol: 'CLO-ETH LP',
    lpAddresses: {
      20729: '',
      820: '0x162c8b62cDa2Ec98DafE8ccb0624bB2bc08d6a7b',
    },
    localFarmAddresses: {
      820: '0xe32077c789f671A7Ef41D5706b6D7A411C7dB98f',
      20729: ''
    },
    token: tokens.cceth_erc223,
    quoteToken: tokens.wclo,
  },
  {
    pid: 12,
    lpSymbol: 'SOY-BNB LP',
    lpAddresses: {
      20729: '',
      820: '0x3006b056eA9423804084D6bA9080d6356EC78c10',
    },
    localFarmAddresses: {
      820: '0xF411Ff92CAcd87Ee7EcB4fD83A5e7AF5D2946c9e',
      20729: ''
    },
    token: tokens.ccbnb_erc223,
    quoteToken: tokens.soy,
  },
  {
    pid: 13,
    lpSymbol: 'CLO-BNB LP',
    lpAddresses: {
      20729: '',
      820: '0x7543bf769903fEc667D73D58C602dEfFEcb2c9C2',
    },
    localFarmAddresses: {
      820: '0xC58556bdA9A0083E3acF8fdDE838fd8941A423bF',
      20729: ''
    },
    token: tokens.ccbnb_erc223,
    quoteToken: tokens.wclo,
  },
  {
    pid: 15,
    lpSymbol: 'SOY-CAKE LP',
    lpAddresses: {
      20729: '',
      820: '0x4309b1FfF68E4C46abc9c92FB813cAFD1fC05A70',
    },
    localFarmAddresses: {
      820: '0xa99E8864A727717F5C4c82031F99D360eb577738',
      20729: ''
    },
    token: tokens.cake,
    quoteToken: tokens.soy,
  },
  {
    pid: 16,
    lpSymbol: 'SOY-TWT LP',
    lpAddresses: {
      20729: '',
      820: '0x7f342fEd3A80ea475631196709D2C6c4a94816C8',
    },
    localFarmAddresses: {
      820: '0x6eFf6b17d4Ad50a25483Cc8d149fbfC275B05435',
      20729: ''
    },
    token: tokens.twt,
    quoteToken: tokens.soy,
  },
  {
    pid: 17,
    lpSymbol: 'SOY-WSG LP',
    lpAddresses: {
      20729: '',
      820: '0xE92a69F2aCAad1480ec945A60fBFdFB921436F51',
    },
    localFarmAddresses: {
      820: '0xDA979A3878AFF6cf6228740dfA75Da39c1aF141c',
      20729: ''
    },
    token: tokens.wsg,
    quoteToken: tokens.soy,
  },
]

export default farms
