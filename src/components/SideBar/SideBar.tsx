import { useState } from 'react'
import { ArrowLeft, BankIcon, UsersGroupIcon, HomeDashbord, SettingIcon, EmailIcon, ChartIcon, ListIcon, MoneySendIcon } from '../../assets/Icons'
import './SideBar.css'

const SideBar = () => {

    const [openSideBar, setOpenSideBar] = useState(false)
    let link_title_style = openSideBar ? 'link-title opacity-1' : 'link-title opacity-0';

    return (
        <aside className={openSideBar ? "sidebar_container open-sidebar" : "sidebar_container"}>
            <div className='sidebar-header'>
                <h3> Drop </h3>
                <div className="sidebar-toggle" onClick={() => setOpenSideBar(!openSideBar)}>
                    <ArrowLeft />
                </div>
            </div>

            <ul className="sidebar_body">

                <li className='sidebar_link_active'>
                    <a href="" className='sidebar-link'>
                        <span>
                            <HomeDashbord />
                        </span>
                        <span className={link_title_style} >
                            Dashbord
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <ChartIcon />
                        </span>
                        <span className={link_title_style}>
                            Report
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <BankIcon />
                        </span>
                        <span className={link_title_style}>
                            Bank
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <EmailIcon />
                        </span>
                        <span className={link_title_style}>
                            Email
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <UsersGroupIcon />
                        </span>
                        <span className={link_title_style}>
                            Group
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <ListIcon />
                        </span>
                        <span className={link_title_style}>
                            List
                        </span>
                    </a>
                </li>
                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <MoneySendIcon />
                        </span>
                        <span className={link_title_style}>
                            Finance
                        </span>
                    </a>
                </li>

                <li>
                    <a href="" className='sidebar-link'>
                        <span>
                            <SettingIcon />
                        </span>
                        <span className={link_title_style}>
                            Setting
                        </span>
                    </a>
                </li>

            </ul>

        </aside>
    )
}

export default SideBar

/*

                <div className="sidemenu-item">
                    <a href="" className='sidemenu-link'>
                        <span>
                            <HomeDashbord />
                        </span>
                        <span className={link_title_style}>
                            Dashbord
                        </span>
                    </a>
                </div>


*/

/*
<ul>
                    <li className='sidemenu_link_active'>
                        <a href="" className='sidemenu-link'>
                            <span>
                                <HomeDashbord />
                            </span>
                            <span className={link_title_style} >
                                Dashbord
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="" className='sidemenu-link'>
                            <span>
                                <Icons />
                            </span>
                            <span className={link_title_style}>
                                Report
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="" className='sidemenu-link'>
                            <span>
                                <Icons />
                            </span>
                            <span className={link_title_style}>
                                Setting
                            </span>
                        </a>
                    </li>

                </ul>
*/


/*
Dashbord
Report
Bank
Email
Group
List
Finance
Setting
*/