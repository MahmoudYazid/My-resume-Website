import React from 'react'

export default function titles({title}) {
  return (


      <div className='backgroundGeneral flex justify-center items-center'>
          <div class="loader">
              <div data-glitch={title} class="glitch">{title}.</div>
          </div>
      </div>
  )
}
