
// Its incomplete, Because my brain is not brain

import React, { useState } from 'react'

const Note = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [task, setTask] = useState([])

    const submitHandler = (elem) => {
        elem.preventDefault()
        setTask([...task, { title, detail }])
        setTitle('')
        setDetail('')
    }

  return (
    <div className='h-screen max-w-7xl mx-auto'>

        <h3 className='text-4xl font-mono ml text-center'>Add Notes</h3>

        <form className='p-5 flex mx-auto flex-col gap-y-5 lg:w-1/2' 
            onSubmit={submitHandler}>

            {/* Note Title input */}
            <input className='ring-1 p-2 w-full rounded-sm outline-none'
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(elem) => 
                    setTitle(elem.target.value)
                }
            />

            {/* Note Description Input */}
            <textarea className='ring-1 p-2 h-30 w-full rounded-sm outline-none'
                type="text"
                placeholder="Write Details"
                value={detail}
                onChange={(elem) => 
                    setDetail(elem.target.value)
                }
            />
            <button className='bg-gray-300 transition-all duration-150 ease-in-out hover:bg-gray-400 w-full text-black p-2 outline-none cursor-pointer'>Add Note</button>

        </form>

        <div>
            <h3 className='text-4xl font-mono text-center border-t-2'>Recent Notes</h3>
            <div className='mt-5 flex flex-wrap gap-y-5 justify-center'>
                <div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Note