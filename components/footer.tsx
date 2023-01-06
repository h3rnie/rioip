import styles from "./footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <motion.span
                initial={{ x: -64, opacity: 0, scale: 0.8 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                viewport={{ once: true }}
            >
                <Balancer>
                    Organised by the Raffles Institution Infocomm Club. All
                    rights reserved.
                </Balancer>
            </motion.span>
            <Link
                href="https://github.com/h3rnie/rioip/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.p
                    initial={{ x: 64, opacity: 0, scale: 0.8 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                >
                    Source
                </motion.p>
            </Link>
        </footer>
    );
}
