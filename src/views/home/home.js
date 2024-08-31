import React from 'react'
import './home.css'
import Nav from '../../components/nav/nav'
import Card from '../../components/card/card'
function home() {
  return (<>
    <Nav />
    <div className='home-container'>
    <Card 
    Imgurl='https://img.freepik.com/premium-photo/large-canister-creatine-supplement-foreground-with-urban-gym-background_1196954-385.jpg?w=826'
    imgs
    title='creatine'
    description='creatine is a metabolic disorder characterized by elevated levels of creatine '
    

    />
    </div>
    

    </>
  )
}

export default home