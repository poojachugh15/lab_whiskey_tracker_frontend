import React from 'react';
import {Link} from 'react-router-dom';


const Whiskey = ({whisky}) => {

    if (!whisky){
        return <p>Loading...</p> 
    }

    const url = "/whiskies/" + whisky.id;

    return (
        <>
        <Link to ={url}>
            {whisky.name}
            {whisky.distillery}
        </Link>
        </>
    )
  
}
export default Whiskey;