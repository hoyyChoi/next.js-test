import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";



export default function Home({results}){

    const [movies,setMovies] = useState();
    // const getMovies = async()=>{
    //     const url = `/api/movies`
    //     const response = await fetch(url)
    //     const {results} =  await response.json()
    //     setMovies(results)
    // }
    
    const router = useRouter()
    const onClick = (id,title)=>{
        router.push(`/movies/${title}/${id}`)
    }
    
    useEffect(()=>{
        // getMovies()
    },[])

    return (
        <div>
            <div className="container">
                <Seo title='home'/>
                {/* {!movies && <h4>loading....</h4>} */}
                {results?.map((movie)=>{
                   return ( 
                    <div className="movie" key={movie.id}>
                        <img onClick={()=>onClick(movie.id,movie.original_title)} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <Link style={{textDecoration:'none'}} key={movie.id} href={`/movies/${movie.id}`}>
                            <h4>{movie.original_title}</h4>
                        </Link>
                    </div>       
                   )
                })}
            </div>
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie{
                    cursor:pointer;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                color: black;
                }
            `}</style>
        </div>
        
    );
}

export async function getServerSideProps(){
    const url = `http://localhost:3000/api/movies`
    const response = await fetch(url)
    const {results} =  await response.json()
    return {
        props:{
            results
        }
    }
}