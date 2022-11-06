import React from 'react'
import './index.css'

const Centered: React.FC = () => {
  return (
    <>
      <div className='container'>
        <div className='block'>
          <div className='centered one'></div>
        </div>
        <div className='block twoblock'>
          <div className='centered two'></div>
        </div>
        <div className='block'>
          <div className='centered three'></div>
        </div>
        <div className='block fourblock'>
          <div className='centered four'></div>
        </div>
      </div>
    </>
  )
}

export default Centered
