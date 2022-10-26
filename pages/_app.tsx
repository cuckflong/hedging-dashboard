import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/layout";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
