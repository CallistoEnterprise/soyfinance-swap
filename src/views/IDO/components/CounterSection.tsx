import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Text } from '@soy-libs/uikit2';

function getDate(seconds) {
    return Math.floor(seconds/(3600 * 24))
}
function getHour2(seconds) {
    const newVal = seconds - getDate(seconds) * 3600 * 24
    return Math.floor(newVal/3600)
}

function getMin(seconds) {
    return Math.floor((seconds%3600)/60)
}

function formatString(val: number) {
    if( val < 10 ) {
        return `0${val.toString()}`
    } 
    return val.toString()
}

const Counter = ({item, curRound}) => {
    const unlockTime = item === undefined? 0 : item.unlockDate / 1000
    const [diff, setDiff] = useState(0)

    useEffect(() => {
        let timer
        const timeCount = () => {

            timer = setInterval(() => {
                const current = Math.floor(Date.now() / 1000)
                if( unlockTime - current > 0) {
                    setDiff(unlockTime - current)
                } else {
                    setDiff(0)
                }
            }, 1000)
        }
        timeCount()
        return () => {
            clearInterval(timer)
        }
    }, [unlockTime])

    const datetime = `${formatString(getDate(diff))} : ${formatString(getHour2(diff))} : ${formatString(getMin(diff))}`

    return (
        <Container>
            <Text fontSize="18px">{`Round ${curRound} of 180 ends in`}</Text>
            {item !== undefined && <Text fontSize="67px">{item.unlockDate === 0 || curRound === 0 ? '00:00:00' : datetime}</Text>}
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
