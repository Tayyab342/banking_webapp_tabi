import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn ={firstName: "Tayyab" , lastName: "Idrees", email: 'tayyabidreex@gmail.com'};
  return (
    <section className = 'home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type= "greeting"
                title= "Welcome"
                user= {loggedIn?.firstName || "Guest"}
                subtext= "Access and Manage your Banks Efficiently"
            />


            <TotalBalanceBox 
            accounts= {[]}
            totalBanks= {1}
            totalCurrentBalance= {1250.70}
            
            />
            </header>
        </div>
        <RightSideBar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 23124.22},{currentBalance: 5321.52}]}
        />
    </section>
  )
}

export default Home