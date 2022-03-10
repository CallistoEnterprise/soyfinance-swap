import React, { useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  Card,
  CardBody,
  Heading,
  // Tag,
  Button,
  // ChevronUpIcon,
  // ChevronDownIcon,
  // Text,
  // CardFooter,
  useModal,
} from '@soy-libs/uikit2'
// import { useProfile } from 'state/profile/hooks'
import { useTranslation } from 'contexts/Localization'
import { Nft } from 'config/constants/types'
import { Input as NumericalInput } from './NumericalInput'
import InfoRow from '../InfoRow'
// import TransferNftModal from '../TransferNftModal'
import ClaimNftModal from '../ClaimNftModal'
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

const NftCard: React.FC<NftCardProps> = ({ nft, canClaim = false, tokenIds = [], onClaim, refresh }) => {
  // const [isOpen, setIsOpen] = useState(false)
  const [inputAmount, setInputAmount] = useState('')
  const { t } = useTranslation()
  const { name } = nft
  const walletOwnsNft = tokenIds.length > 0

  // const Icon = isOpen ? ChevronUpIcon : ChevronDownIcon

  // const handleClick = async () => {
  //   setIsOpen(!isOpen)
  // }

  const handleSuccess = () => {
    refresh()
  }

  const handleTypeInput = (value: string) => {
    setInputAmount(value)
  }

  // const [onPresentTransferModal] = useModal(
  //   <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  // )
  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} onClaim={onClaim} />)

  return (
    <StyledCard isActive={walletOwnsNft}>
      <Header bkColor = {nft.primaryColor}>
        <Heading textAlign="center">{name}</Heading>
        {/* {walletOwnsNft && (
          <Tag outline variant="secondary">
            {t('In Wallet')}
          </Tag>
        )} */}
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
        <BuyButton width="100%" mt="0px" bkColor = {nft.primaryColor} onClick={onPresentClaimModal}>
          {t('Buy Now')}
        </BuyButton>

        {/* {walletOwnsNft && (
          <Button width="100%" variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {t('Transfer')}
          </Button>
        )} */}
      </CardBody>
      {/* <CardFooter p="0">
        <DetailsButton width="100%" endIcon={<Icon width="24px" color="primary" />} onClick={handleClick}>
          {t('Details')}
        </DetailsButton>
        {isOpen && (
          <InfoBlock>
            <Text as="p" color="textSubtle" style={{ textAlign: 'center' }}>
              {t(description)}
            </Text>
          </InfoBlock>
        )}
      </CardFooter> */}
    </StyledCard>
  )
}

export default NftCard
