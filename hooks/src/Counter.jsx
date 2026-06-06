// Counter

import React, { useState } from 'react'

const App = () => {

    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num+1)
    }

    const decrease = () => {
        setNum(num-1)
    }
    const reset = () => {
        setNum(0)
    }

  return (
    <div className='text-center mt-5'>
        <h3 className='text-6xl'>{num}</h3>
        <button className='p-2 text-sm bg-gray-800 mt-5 mx-2' onClick={increase}>Increase</button>
        <button className='p-2 text-sm bg-gray-800 mt-5 mx-2' onClick={decrease}>Decrease</button>
        <button className='p-2 text-sm bg-gray-800 mt-5 mx-2' onClick={reset}>Reset</button>
    </div>
  )
}

export default App 