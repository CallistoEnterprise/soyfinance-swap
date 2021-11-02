import React from 'react';
import styled from 'styled-components'
import { Text } from '@soy-libs/uikit2';

const Counter = () => {

    return (
        <Container>
            <Text fontSize="18px">Round 1 of 180 ends in</Text>
            <Text fontSize="67px">00:00:00</Text>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Counter
