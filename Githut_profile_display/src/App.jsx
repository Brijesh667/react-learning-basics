import { useState } from "react";
import Fetch_Data from "./Fetch_Data";
import Card from "./Card";
import './App.css'
export default function()
{
    const {Fetch_By_id,Set,data,id,Fetch_by_Name,setid} = Fetch_Data();
    const [button_name,set_button_name] = useState("Search by Name")
    const [state,setstate] = useState(false)
    const [my_placeholder,set_my_placeholder] = useState("Enter Profile's Number")
    const [my_type, set_my_type] = useState("Number")

    function handlebutton()
    {
        if(!state)
        {
            set_button_name("Search By Id")
            set_my_placeholder("Enter User Name")
            set_my_type("text")
            setstate(true)
            setid("")
        }

        else
        {
            set_button_name("Search by Name")
            set_my_placeholder("Enter Profile's Number")
            set_my_type("Number")
            setstate(false)
            setid("")
        }   
    }
  
    function handleSearchButton()
    {
        
        if(!state)
            Fetch_By_id(id);
        

        else
            Fetch_by_Name(id)

        setid("")

    }

    return(
       <div className="Main_div">
            <div className="Nav_bar" >
                <button type="button" className="Search_by" onClick={()=>handlebutton()} >{button_name}</button>
                <input className="input_box" type={my_type} value={id} onChange={Set} placeholder={my_placeholder} />
                <button type="button" className="Search" onClick={()=>{handleSearchButton()}}>Search</button>
            </div>
            <div className="Body">
                {
                    data?.map((value)=> <Card name = {value.login} img = {value.avatar_url} link = {value.html_url} key={value.id}/>) 
                }
            </div>
       </div>
    )
}