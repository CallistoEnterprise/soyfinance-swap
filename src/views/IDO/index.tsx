import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CurrencyAmount } from '@soy-libs/sdk2'
import { Button, Text, Box, Card } from '@soy-libs/uikit2'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { BidderHeader } from 'components/App/AppHeader'
import Counter from './components/CounterSection'
import { AutoColumn } from '../../components/Layout/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import { AutoRow } from '../../components/Layout/Row'
import { Wrapper } from './components/styleds'
import { AppHeader, AppBody } from '../../components/App'

import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { ApprovalState, useApproveCallbackFromTrade } from '../../hooks/useApproveCallback'
import { useSwapCallback } from '../../hooks/useSwapCallback'
import useWrapCallback, { WrapType } from '../../hooks/useWrapCallback'
import { Field } from '../../state/swap/actions'
import {
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from '../../state/swap/hooks'
import { useExpertModeManager, useUserSlippageTolerance } from '../../state/user/hooks'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { computeTradePriceBreakdown, warningSeverity } from '../../utils/prices'
import CircleLoader from '../../components/Loader/CircleLoader'
import IDOPage from '../IDOPage'
import StatusSection from './components/StatusSection'
import BidderStatus from './components/BidderStatus'

// const Label = styled(Text)`
//   font-size: 12px;
//   font-weight: bold;
//   color: ${({ theme }) => theme.colors.secondary};
// `

const CustomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;

  }
`
const SpacerH = styled.div`
  width: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const SpacerV = styled.div`
  height: 50px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
const BidderWrapper = styled(Card)`
  border-radius: 24px;
  max-width: 436px;
  width: 100%;
  height: fit-content;
  z-index: 0;
`
const statistics = [
  {
    id: 'Round 1',
    cloAmount: 150,
    soyAmount: 50,
    unlockDate: '01/05/2022'
  },{
    id: 'Round 2',
    cloAmount: 150,
    soyAmount: 150,
    unlockDate: '01/05/2022'
  },{
    id: 'Round 3',
    cloAmount: 150,
    soyAmount: 150,
    unlockDate: '01/05/2022'
  }
]
export default function IDODaily({ history }: RouteComponentProps) {

  const { t } = useTranslation()

  const { account } = useActiveWeb3React()

  // for expert mode
  const [isExpertMode] = useExpertModeManager()

  // get custom setting values for user
  const [allowedSlippage] = useUserSlippageTolerance()

  // swap state
  const { independentField, typedValue, recipient } = useSwapState()
  const { v2Trade, currencyBalances, parsedAmount, currencies, inputError: swapInputError } = useDerivedSwapInfo()

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue)
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE
  const trade = showWrap ? undefined : v2Trade

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
      }

  const { onCurrencySelection, onUserInput } = useSwapActionHandlers()
  const isValid = !swapInputError
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput],
  )

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ''
      : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  // check whether the user has approved the router on the input token
  const [approval, approveCallback] = useApproveCallbackFromTrade(trade, allowedSlippage)

  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true)
    }
  }, [approval, approvalSubmitted])

  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(currencyBalances[Field.INPUT])
  const atMaxAmountInput = Boolean(maxAmountInput && parsedAmounts[Field.INPUT]?.equalTo(maxAmountInput))

  // the callback to execute the swap
  const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(trade, allowedSlippage, recipient)

  const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade)

  const handleSubmit = useCallback(() => {
    console.error("handle submit")
  }, [])

  // warnings on slippage
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee)

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false) // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, inputCurrency)
    },
    [onCurrencySelection],
  )

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toExact())
    } 
  }, [maxAmountInput, onUserInput])

  return (
    <IDOPage>
      <CustomRow>
        <AppBody>
          <AppHeader title={t('SOY Finance IDO')} subtitle={t('Invest In Your Funds Safety')} />
          <Wrapper id="swap-page">
            <AutoColumn gap="md">
              <Counter />
              <AutoColumn justify="space-between">
                <StatusSection />
              </AutoColumn>
              <AutoColumn justify="space-between">
                <AutoRow justify='space-between' style={{ padding: '0 1rem' }}>
                  <Text>Average Price</Text>
                  <Text>1 CLO = 0.2 SOY</Text>
                </AutoRow>
              </AutoColumn>
              <CurrencyInputPanel
                label={independentField === Field.OUTPUT && !showWrap && trade ? t('From (estimated)') : t('From')}
                value={formattedAmounts[Field.INPUT]}
                showMaxButton={!atMaxAmountInput}
                currency={currencies[Field.INPUT]}
                onUserInput={handleTypeInput}
                onMax={handleMaxInput}
                onCurrencySelect={handleInputSelect}
                otherCurrency={currencies[Field.OUTPUT]}
                id="swap-currency-input"
              />
            </AutoColumn>
            <Box mt="1rem">
                <Button
                  variant={isValid && priceImpactSeverity > 2 && !swapCallbackError ? 'danger' : 'primary'}
                  onClick={() => {
                    if (account) {
                      handleSubmit()
                    } else {
                      console.error("connect wallet!")
                    }
                  }}
                  id="swap-button"
                  width="100%"
                  disabled={!account && (!isValid || (priceImpactSeverity > 3 && !isExpertMode) || !!swapCallbackError)}
                >
                  {/* <CircleLoader/> */}
                  Submit Your Bid
                </Button>
            </Box>
          </Wrapper>
        </AppBody>
        <SpacerH />
        <SpacerV />
        <BidderWrapper>
          <BidderHeader title={t('Bidder Statistics')} />
          <Wrapper id="swap-page">
              <AutoColumn justify="space-between">
                {
                  statistics.map((item) => <BidderStatus item={item} key={item.id}/>)
                }
              </AutoColumn>
          </Wrapper>
        </BidderWrapper>
      </CustomRow>
    </IDOPage>
  )
}
