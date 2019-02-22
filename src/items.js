import React, { Component } from 'react';
import './style2.css';
class Items extends Component {
   
    render() {
  
  if( this.props.entry === 0 ){
      return (
        <h2>no information on this city</h2>
      );}
      else if(this.props.items && this.props.items.length !==0){
          return(
            <div>
             
              {this.props.items.map(item => (
                <ul key={item.id}>
                <li><a href="#">Name: {item.name}</a> </li>
               <li> <a href="#"> price:{item.price}</a> </li>
                <li> <a href = "#">address:{item.address} </a></li>
                </ul>
              ))}
              
           </div>);
      }
      else{
          return(<h2>To get information on restaurants, please enter a city </h2>)
      }
    }
  }
  
  export default Items;
  