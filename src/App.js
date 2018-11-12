import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import BookingPage from '../src/pages/UserManagement/BookingPage';

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route exact  path="/dashboard" component={Dashboard}/>
          <Route exact  path="/user-list" component={UserManagement}/>
          <Route exact  path="/bookpage" component={BookingPage}/>
          
        
        
        {/* <Route path="*" component={NoMatch}/> */}
        </div>
      </Router>
      </PersistGate>
   </Provider>
    );
  }
}

export default App;
