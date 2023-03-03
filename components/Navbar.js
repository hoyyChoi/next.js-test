import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar(){

    const router = useRouter();
    console.log(router)

    return( <nav>
        <Link href="/"><div className={ router.pathname === '/' ? "active":''}>home</div></Link>

        <Link href="/about"><div className={ router.pathname === '/about' ? "active":''}>about</div></Link>
        <style jsx> {`
        nav{
            background-color:lightgray;
        }
        div{
            font-size:30px;
        }
        .active{
            color:red;
        }
        `} </style>

    </nav>)
}