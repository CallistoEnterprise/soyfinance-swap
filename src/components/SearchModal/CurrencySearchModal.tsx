import React, { useCallback, useEffect, useState } from 'react'
import { Currency, Token } from '@soy-libs/sdk'
import { TokenList } from '@uniswap/token-lists'
import usePrevious from 'hooks/usePrevious'
import useLast from '../../hooks/useLast'
import { useSelectedListUrl } from '../../state/lists/hooks'
import Modal from '../Modal'
import { CurrencySearch } from './CurrencySearch'
import Manage from './Manage' /* eslint-disable-line */
import { ImportList } from './ImportList' /* eslint-disable-line */
import { ImportToken } from './ImportToken'

interface CurrencySearchModalProps {
    isOpen: boolean
    onDismiss: () => void
    selectedCurrency?: Currency | null
    onCurrencySelect: (currency: Currency) => void
    otherSelectedCurrency?: Currency | null
    showCommonBases?: boolean
}

export enum CurrencyModalView {
    search,
    manage,
    importToken,
    importList
}

export default function CurrencySearchModal({
    isOpen,
    onDismiss,
    onCurrencySelect,
    selectedCurrency,
    otherSelectedCurrency,
    showCommonBases = false
}: CurrencySearchModalProps) {
    const [listView, setListView] = useState<CurrencyModalView>(CurrencyModalView.manage)
    const lastOpen = useLast(isOpen)

    useEffect(() => {
        if (isOpen && !lastOpen) {
            setListView(CurrencyModalView.search)
        }
    }, [isOpen, lastOpen])

    const handleCurrencySelect = useCallback(
        (currency: Currency) => {
            onCurrencySelect(currency)
            onDismiss()
        },
        [onDismiss, onCurrencySelect]
    )

    // for token import view
    const prevView = usePrevious(listView);

    // used for import token flow
    const [importToken, setImportToken] = useState<Token | undefined>()
    // used for import list
    const [importList, setImportList] = useState<TokenList | undefined>()
    const [listURL, setListUrl] = useState<string | undefined>()

    const selectedListUrl = useSelectedListUrl()
    const noListSelected = !selectedListUrl

    return (
        <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90} minHeight={listView ? 40 : noListSelected ? 0 : 80} >
            {listView === CurrencyModalView.search ? (
            <CurrencySearch
                isOpen={isOpen}
                onDismiss={onDismiss}
                onCurrencySelect={handleCurrencySelect}
                selectedCurrency={selectedCurrency}
                otherSelectedCurrency={otherSelectedCurrency}
                showCommonBases={showCommonBases}
                showImportView={() => setListView(CurrencyModalView.importToken)}
                setImportToken={setImportToken}
                showManageView={() => setListView(CurrencyModalView.manage)}
            />
            ) : listView === CurrencyModalView.importToken && importToken ? (
            <ImportToken
                tokens={[importToken]}
                onDismiss={onDismiss}
                onBack={() =>
                    setListView(prevView && prevView !== CurrencyModalView.importToken ? prevView : CurrencyModalView.search)
                }
                handleCurrencySelect={handleCurrencySelect}
            />
            ) : listView === CurrencyModalView.importList && importList && listURL ? (
            <ImportList list={importList} listURL={listURL} onDismiss={onDismiss} setModalView={setListView} />
            ) : listView === CurrencyModalView.manage ? (
            <Manage
                onDismiss={onDismiss}
                setModalView={setListView}
                setImportToken={setImportToken}
                setImportList={setImportList}
                setListUrl={setListUrl}
            />
            ) : (
            ''
            )}
        </Modal>
    )
}