import React, { Component } from 'react';
import "./TourList.scss";
import Tour from './../Tour/Tour';
import {Tourdata} from './Tourdata';

export default class TourList extends Component{
    
state={
tours:Tourdata
};

removeTour=id=>{
   
    
    const newTour=this.state.tours.filter(tour=>tour.id!==id);
    this.setState({
        tours:newTour
    });
  };

render(){
const {tours}=this.state;

return(
<section className="tourlist">{tours.map(tour=>{
    return(
        <Tour key={tours.id} tour={tour} removeTour={this.removeTour}/>
    )
})}</section>
);


}
}