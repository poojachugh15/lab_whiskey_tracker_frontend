import React from 'react';
import Whiskey from "./Whiskey.js";


const WhiskeyDetail = ({whisky}) => {

    if (!whisky){
        return "Loading..."
      }
  
    return (
        <>
        <Whiskey whisky={whisky} />
        <h2>whiskeyDeatils</h2>
        </>
    )
}

export default WhiskeyDetail;
