import React from 'react'
import {Link} from 'react-router-dom'
import { BottomWrapper } from '../../shared/footer/footerStyles'

export default function DashboardNav() {
    return (
        <BottomWrapper>
            <div className = "botBtn">
                <Link to="/" className="botLink">Home</Link>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>

            <div className = "botBtn">
                <Link to="/health" className="botLink">Health</Link>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>

            <div className = "botBtn">
                <Link to="/period" className="botLink">Period</Link>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>

            <div className = "botBtn">
                <a href = "https://github.com/Katrina-Dierking"  target="_blank" rel="noreferrer" className="botLink">Mind</a>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>

            <div className = "botBtn">
                <a href = "https://www.linkedin.com/in/kalynn-dier/" target="_blank" rel="noreferrer" className="botLink">Game Room</a>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>

            <div className = "botBtn">
                <Link to = "/resume" className="botLink">Forum</Link>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>
        </BottomWrapper>
    )
}
