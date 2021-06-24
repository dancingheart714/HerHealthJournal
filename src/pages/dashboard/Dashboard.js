import React from 'react'
import Goals from '../../components/goals/Goals'
import DashboardNav from './DashboardNav'
import { DashWrapper } from './dashboardStyles'

export default function Dashboard() {
    return (
        <DashWrapper>
            <Goals />
            <DashboardNav />
        </DashWrapper>
    )
}
