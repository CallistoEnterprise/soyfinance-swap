// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */

export const DEFAULT_TOKEN_LIST_URL = 'soyswap'
export const UNSUPPORTED_LIST_URLS: string[] = []

const GEMINI_LIST = 'https://www.gemini.com/uniswap/manifest.json'

export const DEFAULT_LIST_OF_LISTS: string[] = [
    ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [GEMINI_LIST]
 