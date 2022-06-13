import React from 'react'

const TaskBar = () => {
    return (
        <div className="taskContainer">
            <div>
                <div className='tasks'>
                    <p>Tasks</p>
                    <p>0</p>
                </div>
                <div className="plus">
                <p>+</p>
                </div>
            </div>
        </div>
    )
}

export default TaskBar