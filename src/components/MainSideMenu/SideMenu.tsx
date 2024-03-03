import { ArrowDown, CalendarIcon, MessageNotifIcon, NotificationIcon } from '../../assets/Icons'
import FormationCard from '../FormationCard/FormationCard'
import ToDoList from '../ToDoList/ToDoList'
import './SideMenu.css'

const SideMenu = () => {
    return (
        <div className='main-sidemenu_container'>
            <header className='sidemenu-header'>
                <span>
                    <CalendarIcon />
                </span>
                <span>
                    <NotificationIcon />
                </span>
                <span>
                    <MessageNotifIcon /> {/* Add Count   */}
                </span>
                <div className="header-profile-img">
                    <img src="/public/profiles/profile_3.jpg" alt="" width='100%' height='100%' />
                </div>
                <span>
                    <ArrowDown />
                </span>
            </header>

            <FormationCard progress_value={75} />

            <section className="todoList_container">
                <h2>
                    Your to-Do list
                </h2>
                <ToDoList />
            </section>
        </div>
    )
}

export default SideMenu
