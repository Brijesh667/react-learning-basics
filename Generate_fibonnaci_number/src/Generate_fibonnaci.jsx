import { useMemo } from "react";
import { useState } from "react"
import './Generate_fibonnaci.css'
function fibonacci(n) {//now this function will not create again and again at eveyr re-render and now this is globlal function 
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

   return b;
}
export default function Generate_Number()
{

    const [nNumber,setnNumber] = useState("")
    const [nth,setnth] = useState(0)

    const memofib = useMemo(()=>{
        return fibonacci(nth)
    },[nth])


    return( 
        <div className="container">
            <div className="div">
                <input placeholder="Enter number" value={nNumber} onChange={(e)=>{setnNumber(Number(e.target.value))}}/>
                <button onClick={()=>setnth(nNumber)}>Generate</button>
            </div>
            <h1>{nth} fibonnaci Number is: {memofib}</h1>

        </div>
    )
}