import "../styles/globals.css";
import type { AppProps } from "next/app";
import {RootProvider} from "../context/RootContext";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}

export default MyApp;
