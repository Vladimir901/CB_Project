import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarComponent.css'


function CalendarComponent(props) {

const [date, setDate] = useState(new Date())

  const addTasksToCalendar = ( ) => {

  }

  return (    
      <div className='calendar'>
        <Calendar  onChange={setDate} value={date} 
// @ts-ignore
        onClickDay={''} tileContent={addTasksToCalendar}/>
      </div>    
  )
}

export default CalendarComponent