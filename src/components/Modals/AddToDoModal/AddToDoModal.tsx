import { FormEvent, FormEventHandler, useState } from 'react'
import { ArrowDown } from '../../../assets/Icons'
import ModalContent from '../ModalContent'
import './AddToDoModal.css'
import PersonList from './PersonList'
import PersonsData from '../../../assets/Data/PersonList.json'

interface Person {
    id: number,
    name: string,
    number: string,
    image: string
}
interface Prop {
    onAccept: (newToDo: any) => void;
    onCancel: () => void
}


const AddToDoModal = ({ onAccept, onCancel }: Prop) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [personsInput, setPersonsInput] = useState<Person[]>([])
    const [titleInput, setTitleInput] = useState<string>('')

    const setTitle = (event: FormEvent<HTMLInputElement>) => {
        setTitleInput(event.currentTarget.value)
    }

    const removePerson = (personID: number) => {
        setPersonsInput([...personsInput.filter(person => person.id !== personID)])
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
                        <div style={{ width: '100%', height: '100%' }}>

                            <label className={openMenu || personsInput.length ? 'input-label onFocus' : 'input-label'} >
                                Add a person
                            </label>

                            <span className="icon" onClick={() => setOpenMenu(!openMenu)}>
                                <ArrowDown />
                            </span>

                            <ul className='value-content'>
                                {personsInput.map(item =>
                                    <li key={item.id} className='person'>
                                        <img src={item.image} alt="" />
                                        <span>
                                            {item.name}
                                        </span>
                                        <span className="x-icon" onClick={() => removePerson(item.id)}>
                                            &#10006;
                                        </span>
                                    </li>
                                )}

                            </ul>
                        </div>
                        {openMenu &&
                            <PersonList
                                closeMenu={setOpenMenu}
                                listValue={PersonsData}
                                selected={personsInput}
                                onSelect={setPersonsInput}
                            />
                        }
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