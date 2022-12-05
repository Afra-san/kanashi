import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../comps/Header'
import { motion } from 'framer-motion'
import Rebel from '../comps/Rebel'
import Warera from '../comps/Warera'
import { useState, useEffect } from 'react'
import Loading from '../comps/Loading'
import Works from '../comps/Works'


export default function Home() {
  const [loading , setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanashi</title>
        <meta name="kanasi studio" content="kanasi studio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
      <Header/>

      <main className={styles.main}>
      <div className={styles.mobile}>
        <motion.h1 initial={{ opacity: 0, y: 0 }}
                   animate={{ opacity: 1, y: 100 }}
                   transition={{ duration: 0.8, delay: 0.5 }} 
                   className={styles.name}>KANASHI
        </motion.h1>
        <div className={styles.desbox}>
          <p className={styles.des}>
          kanashi means saroofull , my always mod and feelings
          and now i make it to my personal brande to maybe to
          mahe mony kanashi kanashi kanashi kanashi kanashi 
          </p>
          {/* <Image src={"/afrachinsaw.svg"} alt={"afrachinsaw"} width={170} height={65} /> */}
          <h2 className={styles.stutext}>STUDIO</h2>

        </div>
      </div>

      <div className={styles.iconsec}>
        <div className={styles.iconbox}>
          <div className={styles.iconone}><Image className={styles.icon} src={"/icon.svg"} alt={"icon"} layout="fill" /></div>
          <div className={styles.icontwo}><Image className={styles.icon} src={"/icon2.svg"} alt={"icon2"} layout="fill" /></div>
        </div>
        <div><h2 className={styles.kanashijpn}>悲しい</h2></div>
      </div>
    </main>
    {/* <Rebel /> */}
    <Warera />
    <Works />
    </>
      )




    }
    </div>
  )
}
