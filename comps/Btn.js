import styles from '../styles/Btn.module.css'
import Image from 'next/image'


export default function Btn() {
    return (
        <button href="/about" className={styles.button}>
            <Image className={styles.btnbg} src={"/Asset-4.svg"} alt={"button"} width={155} height={50}  ></Image>
            <p className={styles.btntext}>click</p>

        </button>
    )
}