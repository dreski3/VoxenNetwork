import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div>
                <header className="Home-header">
                <img src={'/VXN.gif'} className="VXN-logo" alt="logo" />
                </header>
                <input type="text" placeholder='Search volumes' />
                <img src={'/cube.png'} class='cube' />
            </div>
            <h1>
                Welcome to the Voxen Network
                The Republic of 3D Models
                Featured Volumes
            </h1>
            
            
        </div>
    )
}

export default HeroSection