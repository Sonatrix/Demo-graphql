import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import '../styles/App.css';
import LinkList from './LinkList';

class App extends Component {
  render() {
    return  (
      <MuiThemeProvider>
        <AppBar title="Description" 
        	iconClassNameRight="muidocs-icon-navigation-expand-more"
  		/>
  		<LinkList />    
  	  </MuiThemeProvider>
  	 )
  }
}

export default App;
