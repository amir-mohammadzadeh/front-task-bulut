import { AddSquareIcon, ArrowDown, CalendarIcon, MessageNotifIcon, NotificationIcon, ReceiptIcon } from '../../assets/Icons'
import ToDoList from '../ToDoList/ToDoList'
import './SideMenu.css'


const SideMenu = () => {

    console.log(window.screen.availHeight)
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
            <section className="formation_container">
                <header className="formation-headr">
                    <h2>
                        Formation status
                    </h2>
                    <span>
                        In progress
                    </span>
                </header>
                <div className="formation-body">
                    <div className="formation-progressBar" style={{ '--progress-value': '50%' } as React.CSSProperties}></div>
                    <div className="formation-estimate">
                        <span className='estimate-title'>
                            Estimated processing
                        </span>
                        <span className='estimate-value'>
                            4-5 business days
                        </span>
                    </div>
                    <button className="btn btn-primary font-josefin">
                        View status
                    </button>
                </div>
            </section>

            <section className="todoList_container">
                <ToDoList  />
            </section>

        </div>
    )
}

export default SideMenu
