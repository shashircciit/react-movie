import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "bootstrap-less";
import Home from '../Home';
import { movies } from '../../data/data';
import Catalog from './Catalog';

class UserManagement extends Component {
  render() {
    return (
     <Home>
       <div className="wrap">
       <Catalog items={movies}/>
     </div>
      </Home >

    );
  }
}


export default withRouter(UserManagement);
