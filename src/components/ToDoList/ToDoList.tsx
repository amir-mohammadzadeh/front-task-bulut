import { AddSquareIcon, ReceiptIcon } from '../../assets/Icons'
import './ToDoList.css'

const ToDoList = () => {
    return (
        <>
            <h2>
                Your to-Do list
            </h2>
            <div className="list-content">

                <ul className="todo-list">
                    <li className="todo-item">
                        <span className="todo-icon">
                            <ReceiptIcon />
                        </span>
                        <div className="todo-body">
                            <span>
                                Run payroll
                            </span>
                            <small>
                                Mar 4 at 6:00 pm
                            </small>
                        </div>

                    </li>
                    <li className="todo-item">
                        <span className="todo-icon">
                            <ReceiptIcon />
                        </span>
                        <div className="todo-body">
                            <span>
                                Run payroll
                            </span>
                            <small>
                                Mar 4 at 6:00 pm
                            </small>
                        </div>

                    </li>
                    <li className="todo-item">
                        <span className="todo-icon">
                            <ReceiptIcon />
                        </span>
                        <div className="todo-body">
                            <span>
                                Run payroll
                            </span>
                            <small>
                                Mar 4 at 6:00 pm
                            </small>
                        </div>

                    </li>
                    <li className="todo-item">
                        <span className="todo-icon">
                            <ReceiptIcon />
                        </span>
                        <div className="todo-body">
                            <span>
                                Run payroll
                            </span>
                            <small>
                                Mar 4 at 6:00 pm
                            </small>
                        </div>

                    </li>       
                    <li className="todo-item">
                        <span className="todo-icon">
                            <ReceiptIcon />
                        </span>
                        <div className="todo-body">
                            <span>
                                Run payroll
                            </span>
                            <small>
                                Mar 4 at 6:00 pm
                            </small>
                        </div>

                    </li>
                    
                </ul>

                <div className="todo-add-button todo-item">
                    <span className='todo-icon add-btn'>
                        <AddSquareIcon />
                    </span>
                    <span className='todo-btn-text'>
                        Add to Do
                    </span>
                </div>

            </div>

            <footer className="sidemenu-footer">
                <span className="footer-header">
                    Board meeting
                </span>
                <span className="board-date">
                    Feb 22 at 6:00 PM
                </span>
                <small>
                    You have been invited to attend a
                    meeting of the Boeard Diretors.
                </small>
            </footer>
        </>
    )
}

export default ToDoList