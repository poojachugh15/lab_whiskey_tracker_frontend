import React from 'react';
import Whiskey from "./Whiskey.js";


const WhiskeyDetail = ({whisky}) => {

    if (!whisky){
        return "Loading..."
      }
  
    return (
        <>
        <Whiskey whisky={whisky} />
        <p>Year: {whisky.year}</p>
        <p>Age: {whisky.age}</p>
        </>
    )
}

export default WhiskeyDetail;
