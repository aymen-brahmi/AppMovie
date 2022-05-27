import React from 'react'

function Rate({rate} ) {
    const ratingArr=[1,2,3,4,5]
  return (
    <div>
        {ratingArr.map((el)=> el<=rate ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i> )}
    </div>
  )
}

export default Rate