import { useState } from 'react'
import './Selection.css'
import { ArrowDown, SearchIcon } from '../../assets/Icons'
import { useOutsideClick } from '../../Hooks/useOutSideClick'


const Selection_B = () => {
    const [dropMenu, setDropMenu] = useState(false)
    const [selectCount, setSelectCount] = useState(0)

    // _____ Custom Hook => If click outside of selection, selection will close! 
    const menu_ref = useOutsideClick(setDropMenu)

    const itemList = Array.from(Array(50).keys())
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
                    <ul className='options-content'>
                    <li className="search-box">
                        <span className="search-icon">
                            <SearchIcon />
                        </span>
                        <input type="search" placeholder='Search values'/>
                    </li>
                        {itemList.map((i, j) =>
                            <li key={j}  className='menu-item'>
                                <input type="checkbox" id={"menu_item-" + i} />
                                <label htmlFor={"menu_item-" + i}>Menu item {i}</label>
                            </li>
                        )}

                    </ul>
                    <div className="option-footer">
                        <button className='btn btn-primary select-btn'>
                            Applay
                        </button>
                        <div className="option-footer-labels">
                            <small>
                                Selected: {selectCount}
                            </small>
                            <small>
                                Clear seleced
                            </small>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Selection_B