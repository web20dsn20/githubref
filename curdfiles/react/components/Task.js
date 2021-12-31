import React from 'react'

const Task = ({task,onDelete,onToggle,getTask}) => {
    return (
        <div className={task.reminder ? 'reminder task' : 'task' } onDoubleClick={()=> onToggle(task._id)}>
            <h1>{task.name}<span style={{float:'right',color:'red'}} onClick={() => onDelete(task._id)}>X</span>
            <span style={{float:'right',color:'blue'}} onClick={() => getTask(task)}>Edit</span></h1>
            <p>{task.email}</p>
        </div>
    )
}

export default Task
