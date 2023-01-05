import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="X-UA-Compatible"
                    content="IE=edge"
                />
            </Head>
            <MotionConfig reducedMotion="user">
                <Component {...pageProps} />
            </MotionConfig>
        </>
    );
}
