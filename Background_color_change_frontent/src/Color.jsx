import { useEffect, useState } from "react"
import './Color.css'

export default function ColorChange()
{
    let [color,setcolor] = useState("black")
    useEffect(()=>{
      document.body.style.backgroundColor = color;
    },[color])
    return(
       
        <div className="div">
          <button style={{ backgroundColor: "white" }} onClick={() => setcolor("white")}>
            White
          </button>

          <button style={{ backgroundColor: "black", color: "white" }} onClick={() => setcolor("black")}>
            Black
          </button>

          <button style={{ backgroundColor: "red" }} onClick={() => setcolor("red")}>
            Red
          </button>

          <button style={{ backgroundColor: "blue" }} onClick={() => setcolor("blue")}>
            Blue
          </button>

          <button style={{ backgroundColor: "green" }} onClick={() => setcolor("green")}>
            Green
          </button>

          <button style={{ backgroundColor: "yellow" }} onClick={() => setcolor("yellow")}>
            Yellow
          </button>

          <button style={{ backgroundColor: "orange" }} onClick={() => setcolor("orange")}>
            Orange
          </button>

          <button style={{ backgroundColor: "purple", color: "white" }} onClick={() => setcolor("purple")}>
            Purple
          </button>

          <button style={{ backgroundColor: "pink" }} onClick={() => setcolor("pink")}>
            Pink
          </button>

          <button style={{ backgroundColor: "brown", color: "white" }} onClick={() => setcolor("brown")}>
            Brown
          </button>
        </div>
       
    )
}