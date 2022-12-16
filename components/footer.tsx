import styles from "./footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <motion.span
                initial={{ x: -256, opacity: 0, scale: 0.9 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1.5 }}
            >
                Organised by the Raffles Institution Infocomm Club. All rights
                reserved.
            </motion.span>
            <Link
                href="https://github.com/h3rnie/rioip/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.p
                    initial={{ x: 256, opacity: 0, scale: 0.9 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 1.5 }}
                >
                    Source
                </motion.p>
            </Link>
        </footer>
    );
}
