import React, { useState } from 'react'
import Modal from "react-modal"
import Daytime from 'react-daytime';




const AddEvent=({isOpen, onClose, onEventAdd}) => {
  const [title, settitle]= useState("")
  const [start, setStart]= useState(new Date())
  const [end, setEnd]= useState(new Date())

  const onSubmit= (event)=>{
    event.preventDefault();

    onEventAdd({
        title,
        start,
        end
    })
    onClose();
  }

  return(
   <Modal isOpen={isOpen} onRequestClose={onClose}>
    <form onSubmit={onSubmit}>
        <input placeholder='Title' value={title} onChange={e=> settitle(e.target.value)} />
        <div>
            <label >Start date</label>
            <Daytime value={start} onChange={date => setStart(date)}/>
        </div>
        <div>
            <label >End date</label>
            <Daytime value={end} onChange={date => setEnd(date)}/>
        </div>
        <button>Add Events</button>
    </form>
   </Modal>
      

  )
}
export default AddEvent;