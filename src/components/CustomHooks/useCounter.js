import React, { useState } from 'react'

function useCounter(initialCount = 0 , value) {

    const [count, setCount] = useState(initialCount)

    const Increment = () => { 
        setCount(count +value)
     } 
     const Decrement = () => { 
        setCount(count -value)

     } 
     const Reset = () => { 
        setCount(initialCount)

     }

     return [Increment , Decrement , Reset , count] 
}

export default useCounter