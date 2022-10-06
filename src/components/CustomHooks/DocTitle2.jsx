import React , { useState} from 'react'
import useDocTitle from './useDocTitle'

const DocTitle2 = () => {
    const [count, setCount] = useState(0)

    useDocTitle(count)

    

  return (
    <div>
        <button onClick={()=>setCount(count +1)}>counter 1 {count}</button>
    </div>
  )
}

export default DocTitle2