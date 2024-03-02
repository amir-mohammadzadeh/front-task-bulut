import { Dispatch, LegacyRef, Ref, SetStateAction } from 'react'
import { SearchIcon } from '../../../assets/Icons'
import './PersonList.css'
import { useOutsideClick } from '../../../Hooks/useOutSideClick'
interface Person {
    id: number,
    name: string,
    number: string,
    image: string
}
interface Prop {
    listValue: Person[],
    onSelect: Dispatch<SetStateAction<Person[]>>,
    selected: Person[],
    closeMenu: Dispatch<SetStateAction<boolean>>
}

const PersonList = ({ listValue, selected, onSelect, closeMenu }: Prop) => {
    const menu_ref = useOutsideClick(closeMenu)
    const inSelect = selected.map(item => item.id)

    const select = (personID: number) => {
        if (inSelect.includes(personID)) {
            onSelect([...selected.filter(i => i.id !== personID)])
        } else {
            const perso = listValue.find(item => item.id == personID)
            onSelect([...selected, perso!])
        }
    }

    return (
        <>
            <div ref={menu_ref} className="person-options">
                <div className="search-box">
                    <span className="search-icon">
                        <SearchIcon />
                    </span>
                    <input type="search" placeholder='Search values' />
                </div>
                <ul className='options-content'>
                    {listValue.map(person =>
                        <li key={person.id} className='menu-item'>
                            <input
                                type="checkbox"
                                id={"menu_item-" + person.id}
                                onChange={() => select(person.id)}
                                checked={inSelect.includes(person.id)}
                            />
                            <label htmlFor={"menu_item-" + person.id} className='option-label'>
                                <img src={person.image} alt="profile" />
                                <span> {person.name}/{person.number} </span>
                            </label>
                        </li>
                    )}

                </ul>
                <div className="options-footer">

                    <small>
                        Selected: {selected.length}
                    </small>
                    <small onClick={() => onSelect([])}>
                        Clear selected
                    </small>

                </div>
            </div>
        </>
    )
}

export default PersonList