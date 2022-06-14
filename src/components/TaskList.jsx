import React from 'react'
import "../styles/taskList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <li className='taskResults'>
            <div className="tasksSection">
                {/* image avatar is rendered here from the dispatch login action */}
                <img src={`${user.results.icon}`} alt="img" className='img' />
                
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