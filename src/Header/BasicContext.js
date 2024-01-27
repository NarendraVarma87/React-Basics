import React from 'react'
import {useState,useEffect} from "react"
import { createContext } from 'react'
export default function BasicContext() {
    const [userData , setUserData] = useState("");
    const CurrentUserData = createContext(null);
    const handleClick=()=>{
        setUserData()
    }
  return (
    <div>
        <CurrentUserData.Provider>
            <form>
                <input type="text" value={userData} onChange={handleClick}/>
            </form>
        
        </CurrentUserData.Provider>
    </div>
  )
}
