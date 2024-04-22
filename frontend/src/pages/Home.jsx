import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'
import Team from '../components/Team'

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Partners />
            <Team/>
            <style jsx ='true'>
                {
                    `.home{
                    }`
                }
            </style>
        </div>
    )
}
