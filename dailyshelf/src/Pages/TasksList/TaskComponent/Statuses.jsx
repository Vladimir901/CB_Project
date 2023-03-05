import React, { Component } from 'react'
import './Statuses.css'
import './Task.css'

export class Statuses extends Component {
    constructor(props){
        super(props)
        this.state = {
            statuses:[
                {
                    key: 'done',
                    name: 'Done'
                },
                {
                    key: 'progress',
                    name: 'Progress'
                },
                {
                    key: 'review',
                    name: 'Review'
                },
                {
                    key: 'reject',
                    name: 'Reject'
                },
            ]
        }
    }
  render() {
    return (
      <div className='statuses'>
        {this.state.statuses.map(elem => (
            <div key={elem.key} className={elem.name+' status'} onClick={()=>this.props.chooseTask(elem.name)}>{elem.name}</div>
        ))}
      </div>
    )
  }
}

export default Statuses