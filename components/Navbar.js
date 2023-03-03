import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar(){

    const router = useRouter();
    console.log(router)

    return( <nav>
        <img src="/vercel.svg" />
        <div className="select">
            <Link style={{textDecoration:'none'}} href="/"><div className={ router.pathname === '/' ? "active":''}>home</div></Link>
            <Link style={{textDecoration:'none'}} href="/about"><div className={ router.pathname === '/about' ? "active":''}>about</div></Link>
        </div>
        <style jsx> {`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                  }
                  img {
                    max-width: 100px;
                    margin-bottom: 5px;
                  }
                  .select div {
                    font-weight: 600;
                    font-size: 20px;
                  }
                  .active {
                    color: tomato;
                  }
                  nav .select {
                    display: flex;
                    gap: 10px;
                  }
        `} </style>

    </nav>)
}