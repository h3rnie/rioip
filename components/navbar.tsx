import styles from "./navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween" }}
        >
            <h2>RIOIP</h2>
            <div>
                <Link href="/">Home</Link>
                <Link href="/learn">Intro to C++</Link>
            </div>
        </motion.nav>
    );
}
