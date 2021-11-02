import { useEffect, useState } from 'react'
import { getDailyIdoContractWithAccount, getDailyIdoContract } from 'utils/contractHelpers'

const useGetPublicData = () => {
    const [publicData, setPublicData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const contract = getDailyIdoContract()
            const curRoundId = await contract.currentRoundId()
            const collected = await contract.getCollectedUSD()
            const returnData = {
                currentRound: curRoundId.toNumber(),
                currentCollectedUSD: parseFloat(collected.currentRoundUSD.toString()) / 1000000000000000000,
                totalUSD: parseFloat(collected.totalUSD.toString()) / 1000000000000000000
            }
            setPublicData(returnData)
        }
        getData()
    }, [])

    return publicData
}

export default useGetPublicData
