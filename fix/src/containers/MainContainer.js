import React, {useState, useEffect} from 'react';
import WhiskeyContainer from './WhiskeyContainer';
import Request from '../helpers/request';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';


const MainContainer = () => {
    const [whiskies, setWhiskies] = useState([]);
    const [distilleries, setDistilleries] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const whiskeyPromise = request.get('/api/whiskies')
        const distilleryPromise = request.get('/api/distilleries')

        Promise.all([whiskeyPromise, distilleryPromise])
        .then((data) => {
            console.log(data);
        setWhiskies(data[0]);
        setDistilleries(data[1]);
        
    })
}

useEffect(()=>{
    requestAll()
  }, [])

  return (
      <Router>
      <>
      <NavBar />
      <Switch>
          <Route exact path="/whiskies" render ={() => {
            return <WhiskeyContainer whiskies={whiskies} distilleries={distilleries}/>
          }} />
     
      </Switch>
      </>
      </Router>
  )
}

export default MainContainer;