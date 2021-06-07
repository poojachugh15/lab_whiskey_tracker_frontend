import React, {useState, useEffect} from 'react';
// import Whiskey from '../components/whiskey/Whiskey';
import WhiskeyList from '../components/whiskey/WhiskeyList';
import WhiskeyDetail from '../components/whiskey/WhiskeyDetail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Whiskey from '../components/whiskey/Whiskey';


const WhiskeyContainer = ({whiskies}) => {


    const findWhiskyById = function(id){
        return whiskies.find((whisky) => {
          return whisky.id === parseInt(id);
        })
      }

      if(!whiskies){
        return null
      }

   return (
       <Router>
       <>
       <Switch>
       
       
      <Route exact path="/whiskies/:id" render={(props) =>{
        const id = props.match.params.id;
        const whisky = findWhiskyById(id);
        return <WhiskeyDetail whisky={whisky}/>
      }}/>
      <Route render={() => {
        return <WhiskeyList whiskies={whiskies}/>
      }} />
       </Switch>
       </>
       </Router>
   )
}

export default WhiskeyContainer;