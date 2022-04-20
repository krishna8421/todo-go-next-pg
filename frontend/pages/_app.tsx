import "../styles/globals.css";
import type { AppProps } from "next/app";
import {RootProvider} from "../context/RootContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <RootProvider>
      <Head>
        <title>TODO</title>
        <link rel="shortcut icon" href="./favicons.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </RootProvider>
  );
}

export default MyApp;
