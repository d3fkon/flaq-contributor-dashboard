<<<<<<< HEAD
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import { AuthData, Status, verifyDiscordAuth } from '../../api/authentication'
import VerifyLoaderComponent from '../../components/verify'
import useAuthenticationStore from '../../stores/authenticationStore'

const VerifyPage = () => {
  const router = useRouter()
  const verficationCode = router.query.code as string
=======
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AuthData, Status, verifyDiscordAuth } from '../../api/authentication';
import VerifyLoaderComponent from '../../components/verify';
import useAuthenticationStore from '../../stores/authenticationStore';

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
  const router = useRouter();
>>>>>>> d04b438 (prettier setup and formating with it)

  useEffect(() => {
    const verify = async (code: string) => {
      const response = await verifyDiscordAuth(code);

      if (response.status === Status.Success) {
        useAuthenticationStore.setState({
          isLoggedIn: true,
          authData: response.data,
        });
        router.push('/dashboard');
      }

      if (response.status === Status.BadRequest) {
        useAuthenticationStore.setState({
          isLoggedIn: false,
          errorMessage: response.data.message,
        });
        router.push('/');
      }
    };

<<<<<<< HEAD
    if (verficationCode !== undefined) {
      verify(verficationCode as string)
    }
  }, [verficationCode])
=======
    if (router.query.code !== undefined) {
      verify(router.query.code as string);
    }
  }, [router.query.code]);
>>>>>>> d04b438 (prettier setup and formating with it)

  return (
    <>
      <VerifyLoaderComponent />
    </>
  );
};

<<<<<<< HEAD
export default VerifyPage
=======
export default verifyPage;
>>>>>>> d04b438 (prettier setup and formating with it)
