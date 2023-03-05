import React from 'react'

function CurrentTask(props, active, setActive) {
  return (
    <div onClick={()=>setActive(false)}>
      <div className={active ? "opened content" : "content"} onClick={(e)=>e.stopPropagation()}>
      CurrentTask
      <h3>{props.elem.task}</h3>
        <p>{props.elem.worker}</p>
        <p>{props.elem.deadline}</p>
        <div className="status_bar">{props.elem.status}</div>
      </div>
      </div>
  )
}

export default CurrentTask