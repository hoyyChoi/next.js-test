import Navbar from "@/components/Navbar";
import '../styles/globals.css'

export default function App({Component, pageProps}){
    return (
    <div>
        <Navbar/>
        <Component {...pageProps}/>
        <h2>hello</h2>
        <style jsx global>{
                `
                div{
                    color:blue;
                }
                `
            }

            </style>
    </div>
    )
}