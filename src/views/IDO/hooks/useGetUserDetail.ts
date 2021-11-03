import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { getDailyIdoContractWithAccount } from 'utils/contractHelpers'

const useGetUserDetail = () => {
    const [userData, setUserData] = useState({
        statistics: [],
        soyLocked: 0,
        soyToClaim: 0
    })
    const { account, library } = useWeb3React()

    useEffect(() => {
        const getData = async () => {
            const contract = getDailyIdoContractWithAccount(library, account)
            const res = await contract.getUserDetail('0xC7d98c4c919E93eD44755718E27b53791E7F3521')
            const { lockedDate, lockedSoy, soyPrice} = res
            const soyLocked = parseFloat(res.soyLocked.toString()) / 1000000000000000000
            const soyToClaim = parseFloat(res.soyToClaim.toString()) / 1000000000000000000
            const ret = lockedSoy.map((item, index) => {
                    return {
                        cloAmount: parseFloat(soyPrice[index].toString()) / 1000000000000000000,
                        soyAmount: parseFloat(item.toString()) / 1000000000000000000,
                        unlockDate: parseInt(lockedDate[index].toString()) * 1000,
                    }
            })

            setUserData({
                statistics: ret,
                soyLocked,
                soyToClaim
            })
        }
        if(account)
            getData()
    }, [account, library])

    return userData
}

export default useGetUserDetail
