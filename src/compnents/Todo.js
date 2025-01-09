import React, { useRef, useState } from 'react'
import TodoImage from '../assets/todoicon.png'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';
import Unticked from '../assets/untick.png'
import Ticked from '../assets/tick.png'


const Todo = () => {
    const inputRef = useRef();
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const modalref = useRef();
    const refmodalinput = useRef();
    const refclose = useRef(null);
    const [imgbool , setImgbool] = useState(false);

    //function for adding a todo
    const handleClick = () => {
        const inputText = inputRef.current.value
        if (inputText === "") {
            return null
        }
        setTodo(inputText);

        const newTodo = {
            id: uuidv4(),
            text: inputText,
            isComplete: false,
        }

        setTodos([...todos, newTodo])

        setTodo("")
    }

    // onchange function for editing in todo
    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    //function for checking and uncheking the todo
    const toggleTick = (id) => {
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos]
        newTodos[index].isComplete = !newTodos[index].isComplete
        setTodos(newTodos)
    }

    //function for deleteing a todo
    const handleDelete = (id) => {
        let temp = [...todos]
        let newToDo = temp.filter((todo) => todo.id !== id)
        setTodos(newToDo)
    }

    //function for opening the modal
    const openModal = (id) => {
        modalref.current.click();
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let value = [...todos][index].text
        refmodalinput.current.value = value
        refmodalinput.current.id = id;
    }

    //onchange functin for writing in modal form input
    const onchange = (e) => {
        setTodo(e.target.value)
    }

    //function for editing a todo in the modal
    const handleEdit = () => {
        let currentId = refmodalinput.current.id;
        let index = todos.findIndex(item => {
            return item.id === currentId;
        })
        let newToDo = [...todos]
        newToDo[index].text = refmodalinput.current.value;
        newToDo[index].isComplete = false;
        setTodos(newToDo);
        setTodo("")
        refclose.current.click();
    }

    //showcompleted function for filtering when clicked on the checkbox
    const showCompleted=()=>{
        setImgbool(!imgbool);
    }


    return (
        <>
            {/* modal for editing the todo */}
            <div>
                <button ref={modalref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your TODO</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='mx-5'>
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">ToDo</label>
                                        <input ref={refmodalinput} onChange={onchange} type="text" className="form-control" aria-describedby="emailHelp" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button  onClick={handleEdit} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            {/* for main todo component */}
            <div className='container mw-100 vh-100 bg-light d-flex align-items-center justify-content-center '>
                <div className='container rounded-4 w-25 h-75 bg-success bg-opacity-75'>
                    <div className='d-flex align-content-center mt-4'>
                        <img className='mx-2' src={TodoImage} alt="" style={{ width: '35px', height: '35px' }} />
                        <h3 style={{ fontWeight: 'bold' }} className=''>MyTodos</h3>
                    </div>
                    <div className='container d-flex mt-4'>
                        <input id='input1' value={todo} onChange={handleChange} ref={inputRef} style={{ width: '400px', height: '40px' }} className='bg-light rounded-2 border border-0 ps-3' type="text" placeholder='Add your task here' />
                        <button onClick={handleClick} type="button" className="btn btn-success h-25 ms-2">ADD</button>
                    </div>
                    {(todos.length!==0) && <div className='d-flex vw-100 mt-3 ms-4'>
                            <img className='tickimage' onClick={showCompleted} src={imgbool===false?Unticked:Ticked} style={{ width: '20px', height: '20px' }} alt="" />
                            <h6 className="ms-2" >Show Completed</h6>
                    </div>}
                    <div className='mt-4'>
                        {todos.map((item, index) => {
                            return (!imgbool || item.isComplete)&&<TodoItem key={index} index={index} id={item.id} text={item.text} isComplete={item.isComplete} toggleTick={toggleTick} handleDelete={handleDelete} openModal={openModal} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
