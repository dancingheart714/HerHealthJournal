import React from 'react'
import Header from './header/Header'
import DashboardNav from '../pages/dashboard/DashboardNav'

export default function Layout({children}) {
    return (
        <>
        <Header />
            <main>
            {
                children
            }
            </main>
        <DashboardNav />
        </>
    )
}
