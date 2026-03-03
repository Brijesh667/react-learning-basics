import { useEffect, useState } from "react";

export default function Fetch_Data()
{
    const [data,setdata] = useState(null);
    const [id,setid] = useState("")
    async function Fetch_By_id(id)
    {
        const num = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
        const response = await fetch(`https://api.github.com/users?since=${num}&per_page=${id}`);
        const new_data = await response.json();
        setdata(new_data);

    }
    async function Fetch_by_Name()
    {
        const response  = await fetch(`https://api.github.com/search/users?q=${id}`)
        const new_data = await response.json();
        setdata(new_data.items);
    }
    useEffect(()=>{
        Fetch_By_id(20);
    },[])

    function Set(e)
    {
        setid(e.target.value);
    }
    console.log(id)
    return {Fetch_By_id,Set,data,id,Fetch_by_Name,setid};
}
