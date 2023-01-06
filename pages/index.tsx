import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

import Navbar from "../components/navbar";
import Particle from "../components/particles";
import Footer from "../components/footer";

export default function Home() {
    const text = `#include <bits/stdc++.h>
using namespace std;

#define int long long
const long long oo = (long long)1e18 + 500;

template <typename T> void chmax(T& a, const T b) { a=max(a,b); }
template <typename T> void chmin(T& a, const T b) { a=min(a,b); }

int32_t main() {
    ios_base::sync_with_stdio(false); cin.tie(0);
    int n,k; cin >> n >> k;
    vector<int> v;
    int m=0;
    int ans=-oo;
    for(int i = 1; i <= (int)n; ++i) {
        int x; cin >> x;
        if(x)v.push_back(x);
        if(x>0)--m;
        if(x<0)++m;
    }
    int sum= 0;
    for(auto i:v)sum+=i;
    chmax(ans, sum);
    v.push_back(k);
    sort((v).begin(), (v).end(),[](int a, int b) {
        return llabs(a) < llabs(b);
    });

    int c = 0;
    for(auto i:v) {
        int idx = llabs(i);
        int dif = idx-c;
        sum+=dif*m;
        c=idx;
        if(i>0)++m;
        else --m;
        chmax(ans, sum);
        if(llabs(i)==k)break;
    }
    cout << ans;
}`;

    const [displayTextIdx, setDisplayTextIdx] = useState(0);
    const codeMarkup = () => {
        const meow = hljs.highlight(text.substring(0, displayTextIdx), {
            language: "c++",
            ignoreIllegals: true,
        }).value;
        return { __html: meow };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayTextIdx(displayTextIdx + 1);
            if (displayTextIdx + 1 > text.length) {
                clearInterval(interval);
            }
        }, 1);
        return () => clearInterval(interval);
    });

    return (
        <>
            <Head>
                <title>RIOIP</title>
                <meta
                    name="description"
                    content="The official website for the first inaugural Raffles Institution Olympiad in Informatics (Primary)."
                />
                <meta
                    name="keywords"
                    content="Raffles Institution, RIOIP, Olympiad in Informatics, IO, Informatics Olympiad, Singapore, Raffles Institution Olympiad in Informatics (Primary)"
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
                    content="/socials.jpg"
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
                    content="/socials.jpg"
                />
                <meta
                    property="twitter:image-alt"
                    content="Low Angle View of Spiral Staircase Against Black Background (CC0)"
                />
            </Head>
            <Navbar />
            <main>
                <Particle />
                <div className={styles.hero}>
                    <motion.span
                        initial={{ y: -64, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ type: "spring" }}
                    >
                        1<sup>st</sup> Inaugural
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0.2, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" }}
                    >
                        <Balancer>
                            Raffles Institution Olympiad in Informatics
                        </Balancer>
                    </motion.h1>
                    <motion.span
                        initial={{ y: 64, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ type: "spring" }}
                    >
                        Primary
                    </motion.span>
                </div>
                <div className={styles.container}>
                    <section>
                        <motion.h2
                            initial={{ x: -64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            What is an Informatics Olympiad &#40;IO&#41;?
                        </motion.h2>
                        <motion.p
                            initial={{ x: 64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring", duration: 1 }}
                            viewport={{ once: true }}
                        >
                            Informatics Olympiad is one of many Science
                            Olympiads held across the globe with emphasis on
                            Competitive Programming. Typically open to students
                            at Secondary education and above, Raffles
                            Institution Infocomm Club will be organising the
                            very first IO competition, RIOIP, for primary school
                            students in Singapore.
                        </motion.p>
                    </section>
                    <motion.section
                        initial={{ x: 64, opacity: 0, scale: 0.8 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <pre>
                            <code dangerouslySetInnerHTML={codeMarkup()} />
                        </pre>
                    </motion.section>
                    <section>
                        <motion.h2
                            initial={{ x: -64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            About the Competition
                        </motion.h2>
                        <motion.div
                            initial={{ x: 64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Participants are tested on computer programming and
                            problem-solving of algorithmic nature to sharpen
                            their informatics skills:
                            <ul>
                                <li>Problem Analysis</li>
                                <li>
                                    Design of Algorithms and Data Structures
                                </li>
                                <li>
                                    Implementation of DSA through Programming
                                </li>
                                <li>Testing and Debugging</li>
                            </ul>
                            The Raffles Institution Olympiad of Informatics
                            Primary is open to Primary 4 to 6 students. It
                            comprises two days of workshops to teach
                            participants the basics of IO, then a competition
                            day. The entirety of the programme will be held at
                            the Raffles Institution campus. The competition will
                            have two components:
                            <ol>
                                <li>Pen and paper component</li>
                                <li>Practical test with CMS</li>
                            </ol>
                        </motion.div>
                    </section>
                    <section>
                        <motion.h2
                            initial={{ x: -64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Registration
                        </motion.h2>
                        <motion.div
                            initial={{ x: 64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Registration will be in teams of 3-4 students.
                            Please contact your school&apos;s teachers for the
                            registration of the competition or the training.
                            <ul>
                                <li>Workshop days: T1W7 and T1W8 Fridays</li>
                                <li>Competition: T1W10 Thursday</li>
                            </ul>
                        </motion.div>
                    </section>
                    <section>
                        <motion.h2
                            initial={{ x: -64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Prerequisites
                        </motion.h2>
                        <motion.p
                            initial={{ x: 64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Mathematics Olympiad experience or basic knowledge
                            in Programming, in addition to an open mindset to
                            learn and grow during the workshop.
                        </motion.p>
                    </section>
                    <section>
                        <motion.h2
                            initial={{ x: -64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Syllabus
                        </motion.h2>
                        <motion.div
                            initial={{ x: 64, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Recommended programming language is C++, as is the
                            standard for IO.
                            <ol>
                                <li>Intro to IO</li>
                                <li>C++ Syntax</li>
                                <li>STL Data Structures</li>
                                <li>Classic Techniques</li>
                            </ol>
                            <Link
                                href="https://isocpp.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Standard C++ here.
                            </Link>
                        </motion.div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
