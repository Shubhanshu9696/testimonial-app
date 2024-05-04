import React, { useState } from 'react'
import { Card } from './Card.jsx'
export const Testimonials = (props) => {
  let reviews = props.reviews;
  // const [index, setIndex] = useState(0);

  // function indexHandler() {
  //   setIndex(current => current);
  // }


  const [index, setIndex] = useState(0);

  function previousHandler() {
    let n = reviews.length;
    setIndex( (prev)=> ( prev - 1 + n )% n );
  }

  function nextHandler() {
    let n = reviews.length;
    setIndex( (prev)=> ( prev + 1 )% n );
  }


  return (
    <div>
      <Card previousHandler={previousHandler} nextHandler={nextHandler}  review={reviews[index]}></Card>
      {/* <Card setIndex = {setIndex} length ={ reviews.length}  review={reviews[index]}></Card> */}
      
      {/* <Card review={reviews[1]}></Card> */}
    </div>
  )
}
