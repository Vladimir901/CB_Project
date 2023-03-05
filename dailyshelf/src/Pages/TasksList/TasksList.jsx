import React, { useState } from 'react'
import './TasksList.css'
import logo from './images/logo.jpg'
import Task from './TaskComponent/Task'
import Statuses from './TaskComponent/Statuses'
import Homepage from '../Homepage/Homepage'
import Futer from '../Homepage/futer'
import CalendarComponent from './CalendarComponent/CalendarComponent'
export function TasksList(props) {

  const [search_text, setSearch_Text] = useState("")
  const [tasks, setTasks]= useState([
    { 
      id:1,
      task: "Create component1",
      worker: "Anna",
      deadline: "28 марта 2023",
      status: "Done"
    },
    {
      id:2,
      task: "Create component2",
      worker: "Anna",
      deadline: "29 марта 2023",
      status: "Review"
    },
    { 
      id:3,
      task: "Create component3",
      worker: "Anna",
      deadline: "30 марта 2023",
      status: "Reject"
    },
    {
      id:4,
      task: "Create component4",
      worker: "Anna",
      deadline: "31 марта 2023",
      status: "Progress"
    },
  ])
  const [currTasks, setCurrTasks]= useState([...tasks])
  const [currStatus, setCurrStatus]= useState("")
  //const [modalActive, setModalActive] = useState(true)

 const handleSearchInput = (e)=>{
    const value = e.target.value;
    setSearch_Text(value);
  }

const chooseTask = (status) => {
  if(currStatus!==status) {
    setCurrTasks(tasks.filter(elem => elem.status === status))
    setCurrStatus(status)
  }
  else {
    setCurrTasks(tasks)
    setCurrStatus("")
  }
}

  return (
    <>
      <Homepage/>
        <div className='addAndSearch_container'>
          <button className='addTask_btn'>+</button>
          <input type={'search'} className='search_input' placeholder=' Поиск по задачам' value={search_text} onChange={handleSearchInput}></input>
          <button className='Prob_button'>{props.user}</button>     
        </div>
      <div className='main_cont'>
        <div className="tasksAndFilters_container">
        <Statuses chooseTask={chooseTask}/>
        <div className="tasks_container">
        {currTasks.filter(task => task.task.includes(search_text) || task.worker.includes(search_text)).map(filteredTasks => (
              <Task key={filteredTasks.id} elem={filteredTasks} />
        ))}
        </div>
        </div>
        <div className="calendar">
        <CalendarComponent tasks={tasks}/>
        </div>
      </div>
    <Futer />
    </>
  )
}

export default TasksList