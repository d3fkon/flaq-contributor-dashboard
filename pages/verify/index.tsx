import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { AuthData, Status, verifyDiscordAuth } from '../../api/authentication'
import VerifyLoaderComponent from '../../components/verify'
import useAuthenticationStore from '../../stores/authenticationStore'

const VerifyPage = () => {
  const router = useRouter()
  const verficationCode = router.query.code as string

  useEffect(() => {
    const verify = async (code: string) => {
      const response = await verifyDiscordAuth(code)

      if (response.status === Status.Success) {
        useAuthenticationStore.setState({
          isLoggedIn: true,
          authData: response.data,
        })
        router.push('/dashboard')
      }

      if (response.status === Status.BadRequest) {
        useAuthenticationStore.setState({
          isLoggedIn: false,
          errorMessage: response.data.message,
        })
        router.push('/')
      }
    }

    if (verficationCode !== undefined) {
      verify(verficationCode as string)
    }
  }, [verficationCode])

  return <><VerifyLoaderComponent /></>
}

export default VerifyPage
