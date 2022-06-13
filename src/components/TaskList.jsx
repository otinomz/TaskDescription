import React from 'react'
import "../styles/taskList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
    return (
        <li className='taskResults'>
            <div className="tasksSection">
                <img src="" alt="img" className='img'/>
                <div className="taskDetail">
                    <p>$12</p>
                    <p>20% on 1/16/2020</p>
                </div>
                <div className="btn">
                    <button className="edit">
                        <FontAwesomeIcon icon={faPen} color="gray" />
                    </button>
                    <button className="trash">
                        <FontAwesomeIcon icon={faTrash} color="gray" />
                    </button>
                </div>
            </div >
        </li >
    )
}

export default TaskList