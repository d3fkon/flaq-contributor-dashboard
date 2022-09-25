import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import useAuthenticationStore from '../stores/authenticationStore';
import { useEffect, useState } from 'react';
import { AuthData } from '../api/authentication';
import Link from 'next/link';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<any>;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ChakraProvider theme={theme}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
