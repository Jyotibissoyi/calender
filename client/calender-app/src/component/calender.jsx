import React, {userRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEvent from "./addEvent"





const Calender=() => {

  const [modalOpen, setModalOpen]= useState(false)
 const calenderRef = userRef(null)

 
const onEventAdd= event=>{
  let calendarApi = this.calendarRef.current.getApi()
  calendarApi.AddEvent(event);
}

  return(
    <selection>
      <button onClick={()=> setModalOpen(true)}>ADD EVENT</button>
        <div style={{position: "relative", zIndex:0}}>
            <FullCalendar
               ref={calenderRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
            </div>
            <AddEvent isOpen={modalOpen} onClose={()=> setModalOpen(false)} onEventAdd={event => onEventAdd(event)}/>
        </selection>

  )
}
export default Calender
