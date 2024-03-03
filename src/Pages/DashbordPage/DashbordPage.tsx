import { CardResiveIcon, ChartIcon_2, WalletIcon, WalletIcon_2 } from '../../assets/Icons'
import Card from '../../components/Card/Card'
import Chart from '../../components/Chart/Chart'
import EmailsList from '../../components/EmailsList/EmailsList'
import SideMenu from '../../components/MainSideMenu/SideMenu'
import { PercentCard } from '../../components/PercentCard/PercentCard'
import Selection from '../../components/Selection/Selection'
import './DashbordPage.css'
import ChartData from '../../assets/Data/ChartsData.json'
import { useEffect } from 'react'

const DashbordPage = () => {

    useEffect(()=>{
        document.title = 'Bulut - Dashbord'
    },[])

    return (
        <main className='App_Main'>
            <header className="main-header">
                <Selection />
            </header>

            <div className="main_container">
                <div className="main-sidemenu-area">
                    <SideMenu />
                </div>
                <div className="main-cards-area">
                    <Card title='Your bank balance' value='$143.223'  >
                        <WalletIcon />
                    </Card>
                    <Card title='Your Tax' value='$43.110'  >
                        <ChartIcon_2 />
                    </Card>
                    <Card title='Employees working today' value='24'  >
                        <WalletIcon_2 />
                    </Card>
                    <Card title='This week`s card spending' value='$3.287'  >
                        <CardResiveIcon />
                    </Card>
                </div>
                <div className="main-chart-area">
                    <div className="chart-area_container">
                        <Chart title='Revenue' data={ChartData} />
                        <PercentCard title='New clients' value={54} percent={18.7} />
                        <PercentCard title='invoice overdue' value={6} percent={-2.7} />
                    </div>
                </div>
                <section className="main-emails-area">
                    <h2>
                        Emails
                    </h2>
                    <EmailsList />
                </section>
            </div>

        </main>
    )
}

export default DashbordPage