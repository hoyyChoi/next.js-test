import Layout from "@/components/Layout";


export default function App({Component, pageProps}){
    return (
    <div>
        <Layout>
            <Component {...pageProps}/>  {/* Layout 태그 안에 감싼 것이 Layout 태그의 props = children이 되서 들어가진다. */}
        </Layout>
    </div>
    )
}