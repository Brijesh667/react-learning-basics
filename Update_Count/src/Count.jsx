import { useState } from "react";
import './Count.css'
export default function Update_Count()
{
    const [count,setcount] = useState(0)

    return(
        <div className="container" >
            <h1 className="count_h1">Count is: {count}</h1>
            <div className="button_div">
                <button onClick={()=>{setcount(count+1)}}>Increment</button>
                <button onClick={()=>{setcount(count-1)}}>Decrement</button>
            </div>
        </div>
    )
}