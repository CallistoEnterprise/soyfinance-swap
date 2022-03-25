import React from 'react'
import styled from 'styled-components'
import { Heading, Text, LinkExternal } from '@soy-libs/uikit2'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import NftList from './components/NftList'

const StyledHero = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Collectibles = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Charity NFTs')}
        </Heading>
      </StyledHero>
      <Text>The SOY Finance Charity NFT is designed as a reminder that we all share one planet, and we all need to spread one love.</Text>
      <Text mt="8px">Considering the charitable nature of the series, a minimum price is set, but no maximum price: everyone is free to donate as much as they wish.</Text>
      <Text mt="8px">All funds collected will be used to support people in need.</Text>

      <LinkExternal href="https://soy-finance.gitbook.io/soy-finance/soy-products/nfts/one-earth-one-heart" marginTop="20px">Learn more about Charity NFTs</LinkExternal>
      <NftList />
    </Page>
  )
}

export default Collectibles
