import { FormEvent, useState } from 'react'
import ModalContent from '../ModalContent'
import './AddToDoModal.css'
import PersonSelection from './PersonSelection'
import { PersonInfo, TodoItem } from '../../assets/Data/Interfaces';

interface newToDo extends Omit<TodoItem, 'id'> { }

interface Prop {
    onAccept: (newToDo: newToDo) => void;
    onCancel: () => void
}

const AddToDoModal = ({ onAccept, onCancel }: Prop) => {
    const [personsInput, setPersonsInput] = useState<PersonInfo[]>([])
    const [titleInput, setTitleInput] = useState<string>('')

    const setTitle = (event: FormEvent<HTMLInputElement>) => {
        setTitleInput(event.currentTarget.value)
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const icon = "clipboard_tik" // We can put another input to choose an icon for the todo...
        getDate()
        const newToDo = {
            title: titleInput,
            persons: personsInput,
            date: getDate(),
            icon: icon
        }
        onAccept(newToDo)
        onCancel()
    }

    return (
        <ModalContent >
            <div className="add-todo-modal">
                <span className="modal-title">
                    Add to do
                </span>
                <form className='add-todo-form' onSubmit={submitHandler}>
                    <div className="input-box">
                        <input name='title' id='todo_title' type="text" value={titleInput} onChange={setTitle} required />
                        <label htmlFor="todo_title" className='input-label'>
                            Write a title
                        </label>
                        <span className="icon" onClick={() => setTitleInput('')}>
                            &#10006;
                        </span>
                    </div>

                    <div className="select-box">
                        <PersonSelection
                            selectedItems={personsInput}
                            updateSelected={setPersonsInput}
                        />
                    </div>

                    <div className="button-group">
                        <button className='btn btn-secoundry' onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className='btn btn-primary'>
                            Accept
                        </button>
                    </div>

                </form>
            </div>
        </ModalContent>
    )
}

export default AddToDoModal

function getDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const d = new Date()
    const hr = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const date = `${months[d.getMonth()]} ${d.getDate()} at ${hr}`
    return date
}