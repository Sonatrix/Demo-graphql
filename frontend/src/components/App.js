import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../styles/App.css';
import LinkList from './LinkList';

class App extends Component {
  render() {
    return  (
      <div>
        <AppBar title="Description" 
        	iconClassNameRight="muidocs-icon-navigation-expand-more"
  		/>
  		<LinkList />    
  	  </div>
  	 )
  }
}

export default App;
