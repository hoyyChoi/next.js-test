import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home(){

    const [num,setNum] = useState(0);

    return (
        <div>
            <h1>up {num}</h1>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
        
    );
}