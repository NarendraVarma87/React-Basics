import React , {useState} from 'react'
import Data from './Datas'
export default function FetchApi() {
   const [search , setSearch] = useState([])

  return (
    <div>
      Search Here:<br></br>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {Data.filter(val => val.name.toLowerCase().includes(search)).map((val) => <div style={{background:"pink" , border:"2px solid black" , margin :"5px" ,padding:"5px"}}>{val.name}</div>)}
    </div>
  )
}
