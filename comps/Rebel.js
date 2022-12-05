import styles from '../styles/Rebel.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Rebel() {
    return (
        <div className={styles.rebel}>
            {/* <div className={styles.line}></div>
            <div className={styles.line2}></div>
            <motion.div initial={{ opacity: 0, y: 100 }}
                     animate={{ opacity: [0.1,0.2,0.3, 1], y: 0 }}
                     transition={{ duration: 0.8, delay: 0.8 }}  
                     className={styles.rebelbox}>
                        <Image className={styles.rebelimg} src={"/rebel.png"} width={444} height={479} />
            </motion.div> */}


        </div>
    )
}