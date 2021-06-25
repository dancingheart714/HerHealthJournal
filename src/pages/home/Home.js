import React from 'react'
import { HomeWrapper } from './homeStyles'
import Footer from '../../shared/footer/Footer'
import Login from '../../components/login/Login'
import { LoginForm } from '../../components/login/LoginForm'


export default function Home() {
    return (
        <HomeWrapper>
            <h1>Her Health Journal</h1>
            <h3>Taking care of your Heart, Body, and Mind.</h3>
            <Login /> 
            <LoginForm />
            <Footer />
        </HomeWrapper>
    )
}
