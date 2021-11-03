import { useEffect, useState } from 'react'
import { getDailyIdoContract } from 'utils/contractHelpers'

const useGetPublicData = () => {
    const [publicData, setPublicData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const contract = getDailyIdoContract()
            const curRoundId = await contract.currentRoundId()
            const collected = await contract.getCollectedUSD()
            const auctionRound = await contract.auctionRound(curRoundId)
            const soyToSell = parseFloat(auctionRound.soyToSell.toString()) / 1000000000000000000
            const usdCollected = parseFloat(auctionRound.usdCollected.toString()) / 1000000000000000000
            const start = parseFloat(auctionRound.start.toString())
            const end = parseFloat(auctionRound.end.toString())
            const averagePrice = soyToSell === 0 ? 0 : usdCollected / soyToSell
            const returnData = {
                currentRound: curRoundId.toNumber(),
                currentCollectedUSD: parseFloat(collected.currentRoundUSD.toString()) / 1000000000000000000,
                totalUSD: parseFloat(collected.totalUSD.toString()) / 1000000000000000000,
                soyAvgPrice: averagePrice,
                startTime: start,
                endTime: end,
            }
            setPublicData(returnData)
        }
        getData()
    }, [])

    return publicData
}

export default useGetPublicData
