import React from 'react';
import './App.scss';
import NavBar from './components/navBar';
import TourList from './components/TourList/TourList';
export default class App extends React.Component{
 
  render(){
    return(
      <div><NavBar/>
      <TourList/>
      </div>
    );
  }

}
