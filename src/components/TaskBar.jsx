import React, { useState } from 'react';
import "../styles/taskBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';


// {
//                 assigned_user:  <id value from /team api response >, 
//                 task_date: <date in 'YYYY-MM-DD' format from date field in task>,
//                 task_time: <time from time field in task>,seconds in integer format(for ex=01:30am means 5400 seconds) ,
//                 is_completed:<0 or 1 integer data type>,
// 		        time_zone:  < Currenttimezone value in seconds and data type is integer>,(for ex= +05:30 means 19800 seconds),
//                 task_msg: <task description from task description field in task>
//                }

const TaskBar = () => {
    
    const [value, setValue] = useState({
        assigned_user: "",
        task_date: "",
        task_time: "",
        is_completed: "0",
        time_zone: "",
        task_msg: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(value)
    
    }
    

     const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const [open, setOpen] = useState(false)
    
    const handleAdd = () => {
        setOpen(prev => !prev)
        console.log(open)
    }


    return (
        <>
            <div className="addTask">
                <div className='tasks'>
                    <p>Tasks  0</p>
                </div>
                <div className="plus" onClick={handleAdd}>
                    <p>+</p>
                </div>
            </div>
            
            <form className={`taskContainer ${ open  ? "open" : "close"}`} onSubmit={handleSubmit} >
                      
                <div className='taskDescription'>
                    <p>Task Description</p>
                    <div>
                        <input 
                            onChange={handleChange}    
                            name="task_msg"
                            type="text"
                            value={value.task_msg}
                        />
                        <div className="icon"><FontAwesomeIcon icon={faAddressCard} color="gray" /></div>
                    </div>
                </div>
                    
                <div className='taskDetails'>
                    <div className="details">
                        <p>Date</p>
                        <div className='date' >
                            <div className="icon"><FontAwesomeIcon icon={faCalendarAlt} color="gray" /></div>
                            <input
                                onChange={handleChange}    
                                name="task_date"
                                type="date"
                                value={value.task_date}
                            />
                            
                        </div>
                    </div>
                    <div className="details">
                        <p>Time</p>
                        <div className='time'>
                            <div className="icon"><FontAwesomeIcon icon={faClock} color="gray" /></div>
                            <input
                                onChange={handleChange}    
                                name="task_time"
                                type="time"
                                value={value.task_time}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="assignUser">
                    <p>Assign User</p>
                    <select name="" id="" className='select'>
                        <option value="user">user</option>
                        <option value="user">user</option>
                    </select>
                </div>

                <div className="taskBtn">
                    <button className="cancelBtn">
                        Cancel
                    </button>
                    <button className="saveBtn">
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default TaskBar