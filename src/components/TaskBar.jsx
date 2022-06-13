import React from 'react';
import "../styles/taskBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const TaskBar = () => {
    return (
        <form className="taskContainer">
            <div>
                <div className='tasks'>
                    <p>Tasks</p>
                    <p>0</p>
                </div>
                <div className="plus">
                    <p>+</p>
                </div>
            </div>
            <div className='taskDescription'>
                <p>Task Description</p>
                <div>
                    <input type="text" name="" />
                    <div className="icon"><FontAwesomeIcon icon={faAddressCard} color="gray" /></div>
                </div>
            </div>
            <div className='taskDetails'>
                <div className="details">
                    <p>Date</p>
                    <div className='date' >
                        <div className="icon"><FontAwesomeIcon icon={faCalendarAlt} color="gray" /></div>
                        <input type="date" />
                    </div>
                </div>
                <div className="details">
                    <p>Time</p>
                    <div className='time'>
                        <div className="icon"><FontAwesomeIcon icon={faClock} color="gray" /></div>
                        <input type="time" />
                    </div>
                </div>
            </div>
            <div className="assignUser">
                <p>Assign User</p>
                <input type="number" />
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
    )
}

export default TaskBar