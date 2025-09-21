import { Dispatch, FormEvent, SetStateAction, useState } from "react"
<<<<<<< HEAD:src/Modals/AddToDoModal/PersonSelection.tsx
import { PersonInfo } from "../../assets/Data/Interfaces"
import { ArrowDown, SearchIcon } from "../../assets/Icons"
import Data from '../../assets/Data/PersonList.json'
import { useOutsideClick } from "../../Hooks/useOutSideClick"
=======
import { PersonInfo } from "../../../assets/Data/Interfaces"
import { ArrowDown, SearchIcon } from "../../../assets/Icons"
import Data from '../../../assets/Data/PersonList.json'
import { useOutsideClick } from "../../../Hooks/useOutSideClick"
>>>>>>> 547732f (Update AddTodo modal):src/components/Modals/AddToDoModal/PersonSelection.tsx
import './PersonSelection.css'

interface Prop {
    selectedItems: PersonInfo[],
    updateSelected: Dispatch<SetStateAction<PersonInfo[]>>
}

const PersonSelection = ({ selectedItems, updateSelected }: Prop) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [personsList, setPersonsList] = useState<PersonInfo[]>(Data)
    const menu_ref = useOutsideClick(setOpenMenu)
    const inSelect = selectedItems.map(item => item.id)

    const selectHandler = (personID: number) => {
        if (inSelect.includes(personID)) {
            updateSelected([...selectedItems.filter(i => i.id !== personID)])
        } else {
            const perso = Data.find(item => item.id == personID)
            updateSelected([...selectedItems, perso!])
        }
    }
    const removePerson = (personID: number) => {
        updateSelected([...selectedItems.filter(person => person.id !== personID)])
    }

    const searchHandler = (e: FormEvent<HTMLInputElement>) => {
        const searchText = e.currentTarget.value.toLowerCase()
        const result = Data.filter(i => i.name.toLowerCase().includes(searchText))
        setPersonsList(result)
    }

    return (
        <>
            <div>

                <label className={openMenu || selectedItems.length ? 'input-label onFocus' : 'input-label'} >
                    Add a person
                </label>

                <span className="icon" onClick={() => setOpenMenu(!openMenu)}>
                    <ArrowDown />
                </span>

                <ul className='value-content'>
                    {selectedItems.map(item =>
                        <li key={item.id} className='person'>
                            <img src={`/public/profiles/${item.image}`} alt="" />
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
                <div ref={menu_ref} className="person-options">
                    <div className="search-box">
                        <span className="search-icon">
                            <SearchIcon />
                        </span>
                        <input type="search" placeholder='Search values' onChange={searchHandler} />
                    </div>
                    <ul className='options-content'>
                        {personsList.map(person =>
                            <li key={person.id} className='menu-item'>
                                <input
                                    type="checkbox"
                                    id={"menu_item-" + person.id}
                                    onChange={() => selectHandler(person.id)}
                                    checked={inSelect.includes(person.id)}
                                />
                                <label htmlFor={"menu_item-" + person.id} className='option-label'>
                                    <img src={`/public/profiles/${person.image}`} alt="profile" />
                                    <span> {person.name}/{person.number} </span>
                                </label>
                            </li>
                        )}

                    </ul>
                    <div className="options-footer">

                        <small>
                            Selected: {selectedItems.length}
                        </small>
                        <small onClick={() => updateSelected([])}>
                            Clear selected
                        </small>

                    </div>
                </div>
            }
        </>
    )
}

export default PersonSelection