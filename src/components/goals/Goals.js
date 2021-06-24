import React from 'react'
import { GoalsWrapper } from './goalsStyles'

export default function Goals() {
    return (
        <GoalsWrapper>
            <div className="goal-list">
                <h4>Goal List</h4>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className="goal-list">
                <h4>New Goals</h4>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div className="goal-list">
                <h4>Goals Completed</h4>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            

           
        </GoalsWrapper>
    )
}
