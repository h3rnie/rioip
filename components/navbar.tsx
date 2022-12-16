import styles from "./navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -128 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1 }}
        >
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0, duration: 1 }}
            >
                RIOIP
            </motion.h2>
            <div>
                <Link href="/">Home</Link>
                <Link href="/learn">Intro to C++</Link>
            </div>
        </motion.nav>
    );
}
