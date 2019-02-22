import React, { Component } from 'react';
import Items from './items.js';
import './style.css';
import './style2.css';
const intialState = {
  keyword:'',
  items:[],
  entry:-1,
};
class App extends Component {

  constructor(props){
    super(props);
    this.state = intialState}

 handleChange(e){
    this.setState({keyword:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    fetch('http://opentable.herokuapp.com/api/restaurants?city=' +this.state.keyword).then(res => res.json())
    .then(json => {this.setState(
      {
        items:json.restaurants,
        entry:json.total_entries,
      }
    )})
  }
  render() {
    return (
      <div>
        <h2> Restaurants Locator </h2>
          <form
          className="form-style-5" onSubmit = {this.handleSubmit.bind(this)}> 

      <input value={this.state.keyword} onChange = {this.handleChange.bind(this)}/>
      <button type="submit">Apply</button>
      </form>
  <Items items = {this.state.items} entry = {this.state.entry} />
     </div>
    );
    
  }
}

export default App;
