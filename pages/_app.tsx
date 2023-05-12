import "../styles/reset.css";
import "../styles/debug.scss";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MouseStalker } from "../components/MouseStalker/MouseStalker";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MouseStalker/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
