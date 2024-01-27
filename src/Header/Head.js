import React from 'react'
import { useState } from 'react'
export default function Head() {
  const [submit , afterSubmit] = useState("");
  const handleClick=()=>{
    afterSubmit("submitted")
  }
  return (
    <div>
      <input type="file" id="img" name="img" accept='image/*'/><br/>
      <input type="submit" value="send" onClick={handleClick}/>
      {submit}
    </div>
  )
}
