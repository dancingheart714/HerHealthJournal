import React from 'react'
import {Link} from 'react-router-dom'
import { BottomWrapper } from './footerStyles'

export default function Footer() {
    return (
        <>
            <BottomWrapper>
                <div className = "botBtn">
                    <Link to="/login" className="botLink">Login</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>

                <div className = "botBtn">
                    <Link to="/register" className="botLink">Register</Link>
                    <span className="BorderTopBottom"></span>
                    <span className="BorderLeftRight"></span>
                </div>
            </BottomWrapper>
            <p> Copyright 2021 Katrina Dierking | Her Time to Code | All Rights Reserved </p>
        </>
    )
}
