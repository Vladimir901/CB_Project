import React, { useState } from 'react'
import './Task.css'

function Task(props) {
    
    function handleClick(e) {
        console.log('You clicked submit.');
      }
  return (
    <div>
        <div className={props.elem.status + "_c container nurito"} onClick={handleClick}>
        <h3 className='nurito'>{props.elem.task}</h3>
        <p className='nurito worker'>{props.elem.worker}</p>
        <p className='nurito'>{props.elem.deadline}</p>
        <div className={props.elem.status + " status_bar nurito"}>{props.elem.status}</div>
        </div>
    </div>
  )
}

export default Task