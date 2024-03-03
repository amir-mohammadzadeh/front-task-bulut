import { useState } from 'react'
import { ArrowLeft, BankIcon, UsersGroupIcon, HomeDashbord, SettingIcon, EmailIcon, ChartIcon, ListIcon, MoneySendIcon } from '../../assets/Icons'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    
    const [openSideBar, setOpenSideBar] = useState(false)

    const onLinkActive = (link: { [key: string]: boolean }) => {
        return link.isActive ? "sidebar-link sidebar_link_active" : "sidebar-link";
    }

    return (
        <aside className={openSideBar ? "sidebar_container open-sidebar" : "sidebar_container"}>
            <div className='sidebar-header'>
                <h3> Drop </h3>
                <div className="sidebar-toggle" onClick={() => setOpenSideBar(!openSideBar)}>
                    <ArrowLeft />
                </div>
            </div>

            <ul className="sidebar_body">
                <li>
                    <NavLink to='/' className={link => onLinkActive(link)}>
                        <span>
                            <HomeDashbord />
                        </span>
                        <span className="link-title" >
                            Dashbord
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/report' className={link => onLinkActive(link)}>
                        <span>
                            <ChartIcon />
                        </span>
                        <span className="link-title">
                            Report
                        </span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to='/bank' className={link => onLinkActive(link)}>
                        <span>
                            <BankIcon />
                        </span>
                        <span className="link-title">
                            Bank
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/email' className={link => onLinkActive(link)}>
                        <span>
                            <EmailIcon />
                        </span>
                        <span className="link-title">
                            Email
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/group' className={link => onLinkActive(link)}>
                        <span>
                            <UsersGroupIcon />
                        </span>
                        <span className="link-title">
                            Group
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/list' className={link => onLinkActive(link)}>
                        <span>
                            <ListIcon />
                        </span>
                        <span className="link-title">
                            List
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/finance' className={link => onLinkActive(link)}>
                        <span>
                            <MoneySendIcon />
                        </span>
                        <span className="link-title">
                            Finance
                        </span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/setting' className={link => onLinkActive(link)}>
                        <span>
                            <SettingIcon />
                        </span>
                        <span className="link-title">
                            Setting
                        </span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar