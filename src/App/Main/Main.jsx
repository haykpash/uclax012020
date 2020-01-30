import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Welcome from '../Pages/Welcome.jsx';
import Services from '../Pages/Services.jsx';
import Contact from '../Pages/Contact.jsx';

const Main = () => {
    return (
        <main className='Main'>
            <Switch>
                <Route path='/services'>
                   <Services/>
                </Route>
                <Route path='/contact'>
                   <Contact/>
                </Route> 
                <Route path='/'>
                  <Welcome/>
                </Route>  
            </Switch>            
     </main>
    )
};

export default Main;