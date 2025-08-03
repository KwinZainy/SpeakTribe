import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Languages from '../components/Languages'
import Action from '../components/Action'
import Header from '../static/Header'


const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero />
        <About/>
        <Languages/>
        <Action/>
    </div>
  )
}

export default HomePage