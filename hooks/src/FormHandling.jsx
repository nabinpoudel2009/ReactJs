// Tow way Binding > Writing on Input box with React (useState)

import React, { useState } from 'react'

const FormHandling = () => {


    const [title, setTitle] = useState('')
    const noReload = (dets) => {
        dets.preventDefault();
        console.log(`Form Sumbited by ${title}`);
        setTitle('')
    }

  return (
        <div className='p-10'>
            <form onSubmit={noReload}>
                <input
                type="text"
                placeholder='Enter'
                onChange={(dets) => {
                    setTitle(dets.target.value);                    
                }}
                value={title}
                className='text-white p-2 ring-1'
                />
                <button className='ml-5 ring-1 p-2'>Sumbit</button>
            </form>
        </div>
  )
}

export default FormHandling