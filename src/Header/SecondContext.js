import React, { useState } from 'react'

export default function useSecondContext(initialvalue) {
    const [initial , setInitial] = useState(initialvalue);
    function handleChange(e){
        setInitial(e.target.value)
    }
    const data = {
        initial : initial,
        onChange : handleChange

    }
  return data;
}
