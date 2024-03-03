import { useState } from 'react'
import { AddSquareIcon, ClipboardIcon, ClipboardTickIcon, ClockIcon, ReceiptIcon } from '../../assets/Icons'
import AddToDoModal from '../Modals/AddToDoModal/AddToDoModal'
import './ToDoList.css'
import toDoData from '../../assets/Data/ToDoList.json'

interface Person {
    id: number,
    name: string,
    number: string,
    image: string
}

interface TodoList {
    id: number,
    title: string,
    date: string,
    icon: string,
    persons: Person[]
}

const iconMap: { [key: string]: any } = {
    receipt: <ReceiptIcon />,
    clock: <ClockIcon />,
    clipboard: <ClipboardIcon />,
    clipboard_tik: <ClipboardTickIcon />
}

const ToDoList = () => {
    const [toDoList, setToDoList] = useState<TodoList[]>(toDoData)
    const [openAddTodoModal, setOpenAddTodoModal] = useState<boolean>(false)

    const addNewTodo = (newToDo: TodoList) => {
        setToDoList([...toDoList, { ...newToDo, id: toDoList.length + 1 }])
    }

    return (
        <>
            <div className="list-content">
                <ul className="todo-list">
                    {toDoList.map(todo =>
                        <li key={todo.id} className="todo-item">
                            <span className="todo-icon">
                                {iconMap[todo.icon]}
                            </span>
                            <div className="todo-body">
                                <span>
                                    {todo.title}
                                </span>
                                <small>
                                    {todo.date}
                                </small>
                            </div>

                        </li>
                    )}
                </ul>

                <div className="todo-add-button todo-item" onClick={() => setOpenAddTodoModal(true)}>
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
            {openAddTodoModal && <AddToDoModal onAccept={addNewTodo} onCancel={() => setOpenAddTodoModal(false)} />}
        </>
    )
}

export default ToDoList