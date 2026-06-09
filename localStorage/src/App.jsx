import React from 'react'

// Lets do something that really makes sense.

const App = () => {

    localStorage.setItem('name', 'John Doe')
    const name = localStorage.getItem('name')
    console.log(name)

    const user = {
        name: 'John Doe',
        age: 30
    }

    localStorage.setItem('user', JSON.stringify(user))
    const userFromStorage = JSON.parse(localStorage.getItem('user'))
    console.log(userFromStorage)

    return (
        <div>
        </div>
    )
}

export default App