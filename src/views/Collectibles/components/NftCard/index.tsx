import React, { useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  Card,
  CardBody,
  Heading,
  AutoRenewIcon,
  Button,
  // ChevronUpIcon,
  // ChevronDownIcon,
  // Text,
  // CardFooter,
  // useModal,
} from '@soy-libs/uikit2'
import useToast from 'hooks/useToast'
import { useTranslation } from 'contexts/Localization'
import { Nft } from 'config/constants/types'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import { BIG_TEN } from 'utils/bigNumber'
import useBuyNft from '../../hooks/useBuyNft'
import { Input as NumericalInput } from './NumericalInput'
import InfoRow from '../InfoRow'
// import TransferNftModal from '../TransferNftModal'
// import ClaimNftModal from '../ClaimNftModal'
import Preview from './Preview'

export interface NftCardProps {
  nft: Nft
  canClaim?: boolean
  tokenIds?: number[]
  onClaim?: () => Promise<ethers.providers.TransactionResponse>
  refresh: () => void
}

const StyledCard = styled(Card)`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

const Header = styled(InfoRow)<{bkColor?: string}>`
  min-height: 45px;
  width: 100%;
  background-color: ${({bkColor}) => bkColor};
  justify-content: center;
`
const BuyButton = styled(Button)<{bkColor?: string}>`
  background-color: ${({bkColor}) => bkColor};
  color: #FFFFFF;
`
// const DetailsButton = styled(Button).attrs({ variant: 'text' })`
//   height: auto;
//   padding: 16px 24px;

//   &:hover:not(:disabled):not(:active) {
//     background-color: transparent;
//   }

//   &:focus:not(:active) {
//     box-shadow: none;
//   }
// `

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  min-height: 40px;
  width: 100%;
`

const NftCard: React.FC<NftCardProps> = ({ nft, tokenIds = [], refresh }) => {
  const [isConfirming, setIsConfirming] = useState(false)
  const [inputAmount, setInputAmount] = useState('')
  const { t } = useTranslation()
  const { toastError, toastSuccess, toastWarning } = useToast()
  const { name } = nft
  const walletOwnsNft = tokenIds.length > 0

  const { onBuyNft } = useBuyNft()
  const { balance } = useGetBnbBalance()

  const handleConfirm = async () => {

    const intAmount = parseInt(inputAmount, 10)
    if ((nft.classId === 0) && intAmount > nft.maxPrice && nft.minPrice > intAmount) {
      toastWarning('Please input a correct amount!')
      return;
    }
    if ((nft.classId === 1) && intAmount > nft.maxPrice && nft.minPrice > intAmount) {
      toastWarning('Please input a correct amount!')
      return;
    }
    if (nft.classId === 2 && nft.minPrice > intAmount) {
      toastWarning('Please input a correct amount!')
      return;
    }
    const decimalBalance = balance.dividedBy(BIG_TEN.pow(18))

    if (decimalBalance.toNumber() <= intAmount) {
      toastWarning('Insufficient balance!')
      return;
    }
    setIsConfirming(true)

    const receipt = await onBuyNft(nft.classId, inputAmount)
    if (receipt) {
      toastSuccess(t('Successfully claimed!'))
      setIsConfirming(false)
    } else {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setIsConfirming(false)
    }
  }

  const handleSuccess = () => {
    refresh()
  }

  const handleTypeInput = (value: string) => {
    setInputAmount(value)
  }

  return (
    <StyledCard isActive={walletOwnsNft}>
      <Header bkColor = {nft.primaryColor}>
        <Heading textAlign="center">{name}</Heading>
      </Header>
      <PriceSection>
        <Heading color="#000">{`${nft.minPrice} - ${nft.maxPrice}`} CLO</Heading>
      </PriceSection>
      <Preview nft={nft} isOwned={walletOwnsNft} />

      <NumericalInput
        className="token-amount-input"
        placeholder="Enter Amount"
        value={inputAmount}
        onUserInput={(val) => {
          handleTypeInput(val)
        }}
      />

      <CardBody>
        <BuyButton
          width="100%"
          mt="0px"
          bkColor = {nft.primaryColor}
          onClick={handleConfirm}
          endIcon={isConfirming ? <AutoRenewIcon color="currentColor" spin /> : null}
        >
          {t('Buy Now')}
        </BuyButton>
      </CardBody>
    </StyledCard>
  )
}

export default NftCard
