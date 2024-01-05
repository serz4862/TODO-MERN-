/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Create from './Create'


const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h2>ToDo List</h2>
        <Create/>
        {
            todos.length === 0
            ?
            <div>
                <h2>
                    No Record
                </h2>
            </div>
            :
            <div> Good </div>
            // todos.map(todo => (
            //     <div>
            //         {todo}
            //     </div>
            // ))
        }
    </div>
  )
}

export default Home
