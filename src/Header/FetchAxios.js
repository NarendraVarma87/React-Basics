import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
export default function FetchAxios() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            response => setData(response.data)
        )
    },[]
    )
  return (
    <div>
        {data.map((val)=> <div key={val.id}>{val.username}</div>)}
    </div>
  )
}
