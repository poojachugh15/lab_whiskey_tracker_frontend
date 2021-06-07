import React from 'react';
import Whiskey from './Whiskey.js';

const WhiskeyList = ({whiskies}) => {

   if (whiskies.length === 0){
       return (<p> Loading Whiskies...</p>)
   }

   const whiskyNodes = whiskies.map((whisky, index) => {
       return (
           <li key={index}>
               <Whiskey whisky={whisky} />
           </li>
       )
   })

    return (
        <ul>
            {whiskyNodes}
        </ul>
    )
  
}
export default WhiskeyList;