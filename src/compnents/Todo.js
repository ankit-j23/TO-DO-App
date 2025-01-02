import React from 'react'
import TodoImage from '../assets/todoicon.png'

const Todo = () => {
  return (
    <div className='container mw-100 vh-100 bg-light d-flex align-items-center justify-content-center '>
        <div className='container rounded-4 w-25 h-75 bg-success bg-opacity-75'>
            <div className='d-flex align-content-center mt-4'>
                <img className='mx-2' src={TodoImage} alt="" style={{width : '35px' , height: '35px'}} />
                <h3 style={{fontWeight:'bold'}} className=''>MyTodos</h3>
            </div>
            <div className='container d-flex mt-3'>
            <input style={{width:'400px' , height:'40px'}} className='bg-light rounded-2 border border-0' type="text" placeholder='Add your task here'/>
            <button type="button" class="btn btn-success h-25 ms-2">ADD</button>
            </div>
        </div>
    </div>
  )
}

export default Todo
