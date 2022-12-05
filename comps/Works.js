import styles from '../styles/works.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Works() {
    return (
        <div className={styles.works}>
            <h2 className={styles.workstext}>Works <Image src={"/right.svg"} width={23} height={26} className={styles.righticon} /></h2>
            <motion.div initial={{ y: 300, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }} 
                 transition={{ duration: 1 }}
                 className={styles.cardbox}>
                <div className={`${styles.down} ${styles.image1}`}></div>
                <div className={styles.image2}></div>
                <div className={`${styles.card} ${styles.down}`}></div>
            </motion.div>

        </div>
    ) 
}