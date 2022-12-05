import styles from '../styles/watashi.module.css'
import Btn from './Btn'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Warera() {
    return (
        <div className={styles.watashi}>
            <motion.div initial={{ x: 100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }} 
                 transition={{ duration: 1 }}
                 className={styles.sepybox}>
                    <h2 className={styles.sepytext}>
                        {/* <Image src={"/sad.svg"} width={25} height={25} className={styles.sadicon} /> */}
                         3pvey / セペール</h2>
                <div className={styles.afrabg}>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                      <Image className={styles.afra} src={"/sepy.png"} alt={"sepy"} layout='fill' 
                    //   width={507} height={637} 
                      />
                    </div>

                </div>
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }} 
                 transition={{ duration: 1 }}
                 className={styles.mebox}>

                <div className={styles.afrabg}>
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                   <Image className={styles.afra} src={"/af.png"} alt={"afra"} layout='fill' />
                 </div>

                </div>
                <h2 className={styles.metext}>
                        {/* <Image src={"/sad.svg"} width={25} height={25} className={styles.sadicon} /> */}
                         AFRA / アフラ</h2>
            </motion.div>
            {/* <motion.div initial={{ x: -100, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }} 
                 transition={{ duration: 1, delay: 1 }}
                  
                 className={styles.cardbox}>
                    <h2 className={styles.workstext}>Works <Image src={"/right.svg"} width={23} height={26} className={styles.righticon} /></h2>
                <div className={`${styles.card} ${styles.down}`}></div>
                <div className={styles.card}></div>
                <div className={`${styles.card} ${styles.down}`}></div>
                <div className={styles.card}></div>
            </motion.div> */}

     

        </div>
    )

}