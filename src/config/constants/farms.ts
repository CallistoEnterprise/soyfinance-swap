import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 1,
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
    pid: 2,
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
    pid: 3,
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
    pid: 4,
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
    pid: 5,
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
    pid: 6,
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
]

export default farms
