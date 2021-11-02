import React from 'react';
import styled from 'styled-components'
import { Text } from '@soy-libs/uikit2'
import { AutoColumn } from 'components/Layout/Column'
import { AutoRow } from 'components/Layout/Row'

const BidderStatus = ({item}) => {

    return (
        <Container>
            <AutoColumn>
                <AutoRow justify="space-between" >
                    <AutoColumn justify="space-between">
                        <Text fontSize="14px">{item.id}</Text>
                        <Text fontSize="24px" mt="5px" color="primary">{item.soyAmount} SOY</Text>
                    </AutoColumn>
                    <Line />
                    <AutoColumn justify="space-between">
                        <Text fontSize="14px">Price</Text>
                        <Text fontSize="14px" mt="5px">Unlocked on:</Text>
                    </AutoColumn>
                    <AutoColumn justify="space-between">
                        <Text fontSize="14px">{item.cloAmount} CLO</Text>
                        <Text fontSize="14px" mt="5px">{item.unlockDate}</Text>
                    </AutoColumn>
                </AutoRow>
            </AutoColumn>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 16px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.input};
    box-shadow: ${({ theme }) => theme.shadows.inset};
    margin: 10px 0;
`
const Line = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`
export default BidderStatus
