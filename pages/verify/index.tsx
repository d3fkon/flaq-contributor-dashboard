import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AuthData, Status, verifyDiscordAuth } from '../../api/authentication'
import useAuthenticationStore from '../../stores/authenticationStore'

// export const getServerSideProps = async (context: any) => {
//   const { query } = context

//   const response = await verifyDiscordAuth(query.code as string)
//   console.log(response)
//   if (response.status === Status.Success) {
//     useAuthenticationStore.setState({
//       isLoggedIn: true,
//       authData: response.data,
//     })

//     return {
//       redirect: {
//         destination: '/dashboard',
//         permanent: false,
//       },
//     }
//   }

//   if (response.status === Status.BadRequest) {
//     useAuthenticationStore.setState({
//       isLoggedIn: false,
//       errorMessage: response.data.message,
//     })

//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
// }

const verifyPage = () => {
  const router = useRouter()

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

    if (router.query.code !== undefined) {
      verify(router.query.code as string)
    }
  }, [router.query.code])

  return <>Verifying your Account, thank you for your patience.</>
}

export default verifyPage
