import Head from "next/head";
import styles from "../styles/learn.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import photo from "../public/pexels-photo-2072600.jpeg";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Learn() {
    const [displayText, setDisplayText] = useState("");
    const [done, setDone] = useState(false);
    const text: string = "Competitive Programming";

    useEffect(() => {
        let index: number = 0;
        const interval = setInterval(() => {
            setDisplayText(text.substring(0, index));
            index++;

            if (index > text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, 200);
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
                    <h2>Getting Started with C++, Intalling an IDE</h2>
                    <p>
                        To start using C++, you need two things: A text editor,
                        like Notepad, to write C++ code A compiler, like GCC, to
                        translate the C++ code into a language that the computer
                        will understand There are many text editors and
                        compilers to choose from. In this tutorial, we will use
                        an IDE. An IDE (Integrated Development Environment) is
                        used to edit AND compile the code. Popular IDE&apos;s
                        include Code::Blocks, Eclipse, and Visual Studio. These
                        are all free, and they can be used to both edit and
                        debug C++ code. Note: Web-based IDE&apos;s can work as
                        well, but functionality is limited.
                    </p>
                    <h2>Writing our First C++ Code</h2>
                    <p>
                        Let&apos;s create our first C++ file. Write the
                        following C++ code and save the file ending in{" "}
                        <code>.cpp</code> &#40;File &gt; Save File as&#41;:
                    </p>
                    <code>
                        #include &#60;iostream&#62;
                        <br />
                        using namespace std;
                        <br />
                        <br />
                        int main() &#123;
                        <br />
                        &nbsp;cout &#60;&#60; &quot;Hello World!&quot;;
                        <br />
                        &nbsp;return 0;
                        <br />
                        &#125;
                    </code>
                    <p>
                        Line 1: <code>#include {"<iostream>"}</code> is a header
                        file library that lets us work with input and output
                        objects, such as
                        <code>cout</code> &#40;used in line 5&#41;. Header files
                        add functionality to C++ programs.
                        <br />
                        Line 2: <code>using namespace std</code> means that we
                        can use names for objects and variables from the
                        standard library. Don&apos;t worry if you don&apos;t
                        understand how <code>#include &#60;iostream&#61;</code>{" "}
                        and
                        <code>using namespace std</code> works. Just think of it
                        as something that &#40;almost&#41; always appears in
                        your program.
                        <br />
                        Line 3: A blank line. C++ ignores white space. But we
                        use it to make the code more readable.
                        <br />
                        Line 4: Another thing that always appear in a C++
                        program, is <code>int main&#40;&#41;</code>. This is
                        called a function. Any code inside its curly brackets{" "}
                        <code>&#123;&#125;</code>
                        will be executed. Line 5: <code>cout</code>{" "}
                        &#40;pronounced &apos;see-out&apos;&#41; is an object
                        used together with the insertion operator &#40;
                        <code>&#60;&#60;</code>&#41; to output/print text. In
                        our example it will output &apos;Hello World&apos;.
                        <br />
                        Note: Every C++ statement ends with a semicolon ;.
                        <br />
                        Note: The body of <code>int main&#40;&#41;</code>
                        could also been written as:{" "}
                        <code>
                            int main &#40;&#41; &#123; cout &#60;&#60;
                            &apos;Hello World!&apos;; return 0; &#125;
                        </code>{" "}
                        Remember: The compiler ignores white spaces. However,
                        multiple lines makes the code more readable.
                        <br />
                        Line 6: return 0 ends the main function.
                        <br />
                        Line 7: Do not forget to add the closing curly bracket{" "}
                        <code>&#125;</code> to actually end the main function.
                        <br />
                        You might see some C++ programs that runs without the
                        standard namespace library. The using namespace std line
                        can be omitted and replaced with the std keyword,
                        followed by the :: operator for some objects:
                    </p>
                    <h2>
                        C++ Output, <code>cout</code>
                    </h2>
                    <p>
                        The <code>cout</code> object, together with the
                        &#60;&#60; operator, is used to output values/print
                        text.
                    </p>
                    <h2>
                        C++ New Line, <code>\n</code>
                    </h2>
                    <p>
                        To insert a new line, you can use the <code>\n</code>{" "}
                        character. Two <code>\n</code> characters after each
                        other will create a blank line. Another way to insert a
                        new line, is with the <code>endl</code> manipulator.
                    </p>
                </div>
                <Footer />
            </main>
        </>
    );
}
