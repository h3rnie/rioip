import Head from "next/head";
import styles from "../styles/learn.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import photo from "../public/photo_2072600.jpg";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Learn() {
    const [displayText, setDisplayText] = useState("");
    const [done, setDone] = useState(false);
    const text: string = "Competitive Programming";

    useEffect(() => {
        let index = 1;
        const interval = setInterval(() => {
            setDisplayText(text.substring(0, index));
            index++;

            if (index > text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, 100);
    }, [text]);

    return (
        <>
            <Head>
                <title>RIOIP | Learn</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="UTF-8" />
                <meta
                    httpEquiv="X-UA-Compatible"
                    content="IE=edge"
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
                ></link>
                <meta
                    name="description"
                    content="The official website for the first inaugural Raffles Institution Olympiad in Informatics (Primary)."
                />
                <meta
                    name="keywords"
                    content="Raffles Institution, RIOIP, Olympiad in Informatics, IO, Informatics Olympiad, Singapore, Raffles Institution Olympiad in Informatics (Primary)"
                />
                <meta
                    name="author"
                    content="Raffles Institution"
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
                <meta
                    property="og:type"
                    content="website"
                />
                <meta
                    property="og:url"
                    content="https://rioip.vercel.app"
                />
                <meta
                    property="og:title"
                    content="RI Olympiad in Informatics"
                />
                <meta
                    property="og:description"
                    content="The official website for the first inaugural Raffles Institution Olympiad in Informatics (Primary)."
                />
                <meta
                    property="og:image"
                    content="/pexels-pixabay-247676.jpg"
                />
                <meta
                    property="og:image-alt"
                    content="Low Angle View of Spiral Staircase Against Black Background (CC0)"
                />
                <meta
                    property="og:locale"
                    content="en-SG"
                />
                <meta
                    property="twitter:card"
                    content="summary"
                />
                <meta
                    property="twitter:url"
                    content="https://rioip.vercel.app"
                />
                <meta
                    property="twitter:title"
                    content="RI Olympiad in Informatics"
                />
                <meta
                    property="twitter:description"
                    content="The official website for the first inaugural Raffles Institution Olympiad in Informatics (Primary)."
                />
                <meta
                    property="twitter:image"
                    content="/pexels-pixabay-247676.jpg"
                />
                <meta
                    property="twitter:image-alt"
                    content="Low Angle View of Spiral Staircase Against Black Background (CC0)"
                />
            </Head>

            <main>
                <Navbar />
                <Image
                    src={photo}
                    alt="Low Angle Photography of Coconut Trees Under A Starry Sky"
                    placeholder="blur"
                    quality={100}
                    priority
                    style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                />
                <div className={styles.container}>
                    <motion.h1
                        initial={{ y: -256, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ type: "spring", duration: 1.5 }}
                    >
                        Intro to C++
                    </motion.h1>
                    <span>
                        {displayText}
                        {done ? "" : "_"}
                    </span>
                </div>
                <div className={styles.content}>
                    <h2>What is C++?</h2>
                    <p>
                        C++ is a cross-platform language that can be used to
                        create high-performance applications. C++ was developed
                        by Bjarne Stroustrup, as an extension to the C language.
                        C++ gives programmers a high level of control over
                        system resources and memory. The language was updated 4
                        major times in 2011, 2014, 2017, and 2020 to C++11,
                        C++14, C++17, C++20.
                    </p>
                    <h2>Why use C++?</h2>
                    <p>
                        C++ is one of the world&apos;s most popular programming
                        languages. C++ can be found in today&apos;s operating
                        systems, Graphical User Interfaces, and embedded
                        systems. C++ is an object-oriented programming language
                        which gives a clear structure to programs and allows
                        code to be reused, lowering development costs. C++ is
                        portable and can be used to develop applications that
                        can be adapted to multiple platforms. C++ is fun and
                        easy to learn! As C++ is close to C, C# and Java, it
                        makes it easy for programmers to switch to C++ or vice
                        versa.
                    </p>
                    <h2>
                        Learn more about Informatics Olympiad below!
                    </h2>
                    <h3 style={{padding: "2vw", paddingBottom: "1vw"}}>
                        Briefing on IO
                    </h3>
                    <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vQTC0Bu5xYGU9XjyAKpk1dQUoSzXuUya6Vx6Z7oIJdQS6D2Nf-WERd6B9lc8eY7yZ65K66y3GZcB--t/embed?start=false&loop=false&delayms=1"
                        frameBorder={0}
                        width="960"
                        height="569"
                        allowFullScreen={true}
                    ></iframe>
                    <h3 style={{padding: "2vw", paddingBottom: "1vw"}}>
                        Intro to C++
                    </h3>
                    <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vRFMfKnCLkVha4q1X5NhyS6NMkmsBr0JGBIiqzZA3kuSuHmziG9mslyp1pgppR0lICwxL99OcH7o7lo/embed?start=false&loop=false&delayms=1"
                        frameBorder={0}
                        width="960"
                        height="569"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <Footer />
            </main>
        </>
    );
}
