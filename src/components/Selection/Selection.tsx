import { useState } from 'react'
import './Selection.css'
import { ArrowDown, SearchIcon } from '../../assets/Icons'
import { useOutsideClick } from '../../Hooks/useOutSideClick'


const Selection = () => {
    const itemList = Array.from(Array(50).keys())
    const [dropMenu, setDropMenu] = useState(false)
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    // _____ Custom Hook => If click outside of selection, selection will close! 
    const menu_ref = useOutsideClick(setDropMenu)

    const onSelect = (itemID: number) => {
        selectedItems.includes(itemID) ?
            setSelectedItems([...selectedItems.filter(i => i !== itemID)])
            : setSelectedItems([...selectedItems, itemID]);
    }

    const applayAction = () => {
        setDropMenu(false)
        console.log('_______ SELECTION ________')
        console.log('Selected items :\n', selectedItems)
        console.log('##########################')
    }

    return (
        <div className="selection-btn">
            <span className='selection-label'>
                Employes involved
            </span>
            <div className="selected" onClick={() => setDropMenu(!dropMenu)}>
                select
                <span><ArrowDown /></span>
            </div>
            {dropMenu &&
                <div ref={menu_ref} className="options">
                    <div className="search-box">
                        <span className="search-icon">
                            <SearchIcon />
                        </span>
                        <input type="search" placeholder='Search values' />
                    </div>
                    <ul className='options-content'>
                        {itemList.map(i =>
                            <li key={i} className='menu-item'>
                                <input
                                    type="checkbox"
                                    id={"menu_item-" + i}
                                    onChange={() => onSelect(i)}
                                    checked={selectedItems.includes(i)}
                                />
                                <label htmlFor={"menu_item-" + i}>Menu item {i}</label>
                            </li>
                        )}

                    </ul>
                    <div className="option-footer">
                        <button className='btn btn-primary select-btn' onClick={applayAction}>
                            Applay
                        </button>
                        <div className="option-footer-labels">
                            <small>
                                Selected: {selectedItems.length}
                            </small>
                            <small onClick={() => setSelectedItems([])}>
                                Clear seleced
                            </small>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Selection