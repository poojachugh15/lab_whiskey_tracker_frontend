import React from 'react';
import {Link} from 'react-router-dom';


const Whiskey = ({whisky}) => {

    if (!whisky){
        return <p>Loading Whiskey...</p> 
    }

    const url = "/whiskies/" + whisky.id;

    return (
        <>
        <Link to ={url}>
            {whisky.name}
            {whisky.distillery.name}
        </Link>
        </>
    )
  
}
export default Whiskey;