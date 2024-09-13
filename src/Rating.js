import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Rating = (props) => {
  return (
    <div className='flex md:flex-row'>
      <div>
      <div >
         <img src={props.person} className='w-44' alt="" />
          <div className="over">{props.style}</div>
      </div> 

      {/* Rating */}
      <div className='flex space-x-1 items-center pt-1'>
        < FontAwesomeIcon icon={faStar} className='text-1xl text-red'/>
        <div>
            {props.rating}
        </div>
        <div>
            {props.numbers}
        </div>
        <div>
            {props.country}
        </div>
      </div>

      {/* paragraph */}
      <div className='text-sm'>
        <p>{props.summary}</p>
      </div>

      {/* price */}
      <div>
        <p className='font-bold'>
            {props.price}
        </p>
      </div>
      </div>
    </div>
  )
}

export default Rating
