import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { getDailyIdoContractWithAccount } from 'utils/contractHelpers'

const empty = [
    {
      id: 'Round 1',
      cloAmount: 0,
      soyAmount: 0,
      unlockDate: 0
    },{
      id: 'Round 2',
      cloAmount: 0,
      soyAmount: 0,
      unlockDate: 0
    },{
      id: 'Round 3',
      cloAmount: 0,
      soyAmount: 0,
      unlockDate: 0
    }
]

const useGetUserDetail = () => {
    const [userData, setUserData] = useState({
        statistics: empty,
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
            const ret = empty.map((item, index) => {
                if (lockedSoy.length > index){
                    return {
                        ...item,
                        cloAmount: parseFloat(soyPrice[index].toString()) / 1000000000000000000,
                        soyAmount: parseFloat(lockedSoy[index].toString()) / 1000000000000000000,
                        unlockDate: parseInt(lockedDate[index].toString()) * 1000,
                    }
                }
                return item
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
