import React, { useRef, useState } from 'react'
import TodoImage from '../assets/todoicon.png'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';



const Todo = () => {
    const inputRef = useRef();
    const [todo , setTodo] = useState("");
    const [todos , setTodos] = useState([ ]);

    

    
    const handleClick =()=>{
        const inputText = inputRef.current.value
        setTodo(inputText);

        const newTodo = {
            id : uuidv4(),
            text : inputText,
            isComplete : false,
        }

        setTodos([...todos, newTodo])

        //since i need the placeholder in input field again after doing e.currrent.value in onchange function
        // const placeholdervalue = document.getElementById('input1').getAttribute('placeholder')
        // setTodo(placeholdervalue)
        // console.log(todo.id)
        setTodo(" ")
    }

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }

    //function for checking and uncheking the todo
    const toggleTick=(id)=>{
        let index = todos.findIndex(item=>{
            return item.id === id;
        })
        // console.log(index)
        let newTodos = [...todos]
        newTodos[index].isComplete = !newTodos[index].isComplete
        setTodos(newTodos)
        // console.log(todos)
    }

  return (
    <div className='container mw-100 vh-100 bg-light d-flex align-items-center justify-content-center '>
        <div className='container rounded-4 w-25 h-75 bg-success bg-opacity-75'>
            <div className='d-flex align-content-center mt-4'>
                <img className='mx-2' src={TodoImage} alt="" style={{width : '35px' , height: '35px'}} />
                <h3 style={{fontWeight:'bold'}} className=''>MyTodos</h3>
            </div>
            <div className='container d-flex mt-4'>
            <input  id='input1' value={todo} onChange={handleChange} ref={inputRef} style={{width:'400px' , height:'40px'}} className='bg-light rounded-2 border border-0 ps-3' type="text" placeholder='Add your task here'/>
            <button onClick={handleClick} type="button" className="btn btn-success h-25 ms-2">ADD</button>
            </div>
            <div className='mt-5'>
                {todos.map((item , index)=>{
                    return <TodoItem key={index} id={item.id} text={item.text} isComplete={item.isComplete} toggleTick={toggleTick}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Todo
