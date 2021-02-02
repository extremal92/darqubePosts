import React from 'react';

import {Header} from './components';
import {Home, Marks} from './pages';
import { Route } from 'react-router-dom';

function App () {

  return(
    <div className="wrapper">
      <Header/>
      <div className='main'>
        <div className='content'>
          <Route path="/" component={Home} exact  />
          <Route path="/marks" component={Marks} exact />
          {/* <Route path="/search" component={SearchPage} exact /> */}
        </div>
      </div>
    </div>
  )
}
export default App;
