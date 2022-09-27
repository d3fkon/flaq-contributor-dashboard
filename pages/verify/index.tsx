import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Status, verifyDiscordAuth } from '../../api/authentication'
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

  // TODO: UI for the page should be udpated.
  return <>Verifying your Account, thank you for your patience.</>
}

export default VerifyPage
