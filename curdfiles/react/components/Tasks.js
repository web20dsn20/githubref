import React from 'react'
import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle,getTask}) => {
    return (
        
        <ul>
            {
                tasks.map(task => <Task key={task.id} task={task}onDelete={onDelete}onToggle={onToggle} getTask={getTask}/>)
            }
        </ul>
    )
}

export default Tasks
