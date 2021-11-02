import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { getDailyIdoContractWithAccount } from 'utils/contractHelpers'

const useGetUserDetail = () => {
    const [userData, setUserData] = useState(null)
    const {account, library} = useWeb3React()
    useEffect(() => {
        const getData = async () => {
            const contract = getDailyIdoContractWithAccount(library, account)
            const res = await contract.getUserDetail(account)
            // console.log(res, "<=====")
            // setUserData(returnData)
        }
        if(account)
            getData()
    }, [account, library])

    return userData
}

export default useGetUserDetail
