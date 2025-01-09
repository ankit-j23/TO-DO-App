import React from 'react'
import Uncheckbox_icon from '../assets/unckeck-box.png'
import Delete_icon from '../assets/delete-icon.png'
import Edit_icon from '../assets/edit-icon.png'
import Checkedbox_icon from '../assets/checked-box.png'
const TodoItem = (props) => {
  
  const { text, isComplete, id, toggleTick, handleDelete , openModal , index} = props;

  return (
    <>
      <div className='container d-flex mt-2 justify-content-between'>
        <div className='d-flex vw-100'>
          <h5 className='ms-2' >{index+1}.&nbsp;</h5>
          <img className='tickimage' onClick={() => { toggleTick(id) }} src={isComplete === false ? Uncheckbox_icon : Checkedbox_icon} style={{ width: '25px', height: '25px' }} alt="" />
          <h5 className={`ms-2 ${isComplete === true ? 'text-decoration-line-through' : ""}`} >{text}</h5>
        </div>
        <div className='d-flex mt-1'>
          <img className='tickimage' onClick={() => { openModal(id) }} src={Edit_icon} style={{ width: '20px', height: '20px' }} alt="" />
          <img onClick={() => { handleDelete(id) }} className='ms-2 tickimage' src={Delete_icon} style={{ width: '20px', height: '20px' }} alt="" />
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default TodoItem
