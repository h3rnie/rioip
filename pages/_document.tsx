import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-SG">
            <Head>
                <meta
                    name="robots"
                    content="index, follow"
                />
                <meta
                    name="author"
                    content="Raffles Institution Infocomm Club"
                />
                <meta
                    name="theme-color"
                    content="#07a783"
                />
                <link
                    rel="shortcut icon"
                    sizes="512x512"
                    href="/favicon_io/android-chrome-512x512.png"
                />
                <link
                    rel="shortcut icon"
                    sizes="192x192"
                    href="/favicon_io/android-chrome-192x192.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon_io/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon_io/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon_io/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/ico"
                    href="/favicon_io/favicon.ico"
                />
                <link
                    rel="manifest"
                    href="/favicon_io/site.webmanifest"
                />
            </Head>
            <body>
                <noscript>
                    This application requires JavaScript to be enabled.
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
