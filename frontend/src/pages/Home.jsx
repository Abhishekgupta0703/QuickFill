import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <Services />
            <Partners />
            <style jsx ='true'>
                {
                    `.home{
                    }`
                }
            </style>
        </div>
    )
}
