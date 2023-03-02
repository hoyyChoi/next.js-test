import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Navbar.module.css'

export default function Navbar(){

    const router = useRouter();
    console.log(router)

    return( <nav className={styles.nav}>
        <Link href="/"><div className={`${styles.link} ${router.pathname === '/'?styles.active :''}`}>home</div></Link>

        <Link href="/about"><div className={[styles.link, router.pathname === '/about'?styles.active :''].join(' ')}>about</div></Link>
    </nav>)
}