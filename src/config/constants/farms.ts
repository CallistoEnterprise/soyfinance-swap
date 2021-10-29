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
]

export default farms


// SOY-ETH LP: 0xe0a4d8356c0ded2e0e7a4af6db2a164f7d1ad243
// CLO-ETH LP: 0x162c8b62cda2ec98dafe8ccb0624bb2bc08d6a7b
// SOY-BNB LP: 0x3006b056ea9423804084d6ba9080d6356ec78c10
// CLO-BNB LP: 0x7543bf769903fec667d73d58c602deffecb2c9c2
// CLO-ETC pair: 0x3493391e234834c93c0ed675a4872cf48d63ad1c
// SOY-ETC pair: 0xce49b862ed38414c86914df5e6d854afbe203563


// 0xf16edf5ba6bc116c17f6769deb470a190e272381