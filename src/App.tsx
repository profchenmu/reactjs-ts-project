import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import bundle from './Bundle';

const Cao = bundle(() => import('./pages/PageIn'));
const Cao2 = bundle(() => import('./pages/EditAccount'));
const AddAccount = bundle(() => import('./pages/AddAccount'));
const Detail = bundle(() => import('./pages/Detail'));
const Compare = bundle(() => import('./pages/Compare'));
const EditAccount = bundle(() => import('./pages/EditAccount'));
// import './App.scss';
// import Cao from './pages/PageIn';
class App extends React.Component <any, any>{
  public render() {
    return (
      <div className="App">
        {/* <h3 className="App-intro">
          DEMO-TS-REACT
        </h3> */}
        
        <Router>
          <div>
          <Route path="/page1" component={Cao} />
          <Route path="/page2" component={Cao2} />
          <Route path="/addaccount" component={AddAccount} />
          <Route path="/editaccount/:id" component={EditAccount} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/compare/:id/:ts" component={Compare} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
