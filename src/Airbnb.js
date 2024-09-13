import React from 'react'
import Header from './Header'
import Rating from './Rating'
import one from './img/sport.svg'
import two from './img/sport1.svg'
import three from './img/bike.svg'

const Airbnb = () => {
  return (
    <div className='container mx-auto  '>
      <Header />
     <div className='flex space-x-2 pt-4 pb-4' >
     <Rating 
      person={one} 
      rating='5.0' 
      numbers='(6)' 
      price='From $136 / person'     
      country='.USA' 
      summary='Life lessons with Katie Zaferes'
      />
      <Rating 
      person={two} 
      rating='5.0' 
      numbers='(6)' 
      price='From $136 / person'     
      country='.USA' 
      summary='Life lessons with Katie Zaferes'
      />
      <Rating 
      person={three} 
      rating='5.0' 
      numbers='(6)' 
      price='From $136 / person'     
      country='.USA' 
      summary='Life lessons with Katie Zaferes'
      />
     </div>
    </div>
  )
}

export default Airbnb
