import { motion } from "framer-motion"
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0.8 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{duration: 1}}>
            <header>
              <a href="/"><Image src={"/kanashi-02.png"} alt={"logo"} width={127} height={127} /></a>
            </header>
            <main className={styles.content}>
              <div className={styles.img1}></div>
              <div className={styles.img2}></div>
              <div className={styles.img1}></div>

            </main>

      </motion.div>
    )
      
  }
  