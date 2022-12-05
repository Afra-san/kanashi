import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { motion } from 'framer-motion'


export default function Header() {
    return (
      <header 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: [0.2, 0.4, 1], y: 0 }}
        transition={{ duration: 1 }} 
        className={styles.header}>

        <div className={styles.headerspin}>
          <div className={styles.spin}></div>
        </div>

        <div className={styles.kanalogocon}><a href='/'><Image className={styles.kanalogo} src={"/kanashi-02.png"} alt={"logo"} layout="fill" /></a></div>
        <div className={styles.headermenu}>
        <div className={styles.iconlight}>
          <a className={styles.a} href='/about'><Image src={"/light.svg"} layout="fill" /></a>
        </div>
        <div className={styles.iconhome}>
           <a className={styles.a} href='#'><Image src={"/home.svg"} layout='fill' /></a>
        </div>

        </div>

      </header>
    )
  }
  