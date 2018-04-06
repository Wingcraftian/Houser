import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
import Dashboard from "./component/Dashboard/Dashboard";
import Wizard from "./component/Wizard/Wizard";
import axios from 'axios';
import AddHouse from "./component/AddHouse/AddHouse";

class App extends Component {
constructor(props){
  super();
  this.state = {
    houses: []
  }
  this.createHouses = this.createHouses.bind(this)
}
componentDidMount(){
  axios.get("/api/houses").then(res => {
    console.log(res.data)
    this.setState({houses: res.data});
  })
  .catch(console.log);
}

createHouses(property_name, address, city, state, zip){
  axios.post("/api/houses", {property_name, address, city, state, zip})
  .then(() => axios.get("/api/houses").then(res => {
    console.log(res.data)
    this.setState({houses: res.data});
  }))
  .catch(console.log)
}

  render() {
    const{houses} = this.state;
    let houseList = houses.map(houses => {
      return (
        
        <Dashboard
        key={houses.id}
        createHouses={this.createHouses}
        property_name={houses.property_name}
        id={houses.id}
        address={houses.address}
        city={houses.city}
        state={houses.state}
        zip={houses.zip}
    
        />
      );
    });
    return (
      <div className="App">
        <Header/>
        {/* <Dashboard
        property_name={this.property_name}
      /> */}
        <Wizard/>
        <div className="add-container">
        <AddHouse createHouses={this.createHouses} />
        </div>
      <div className="card-container">{houseList}</div>
                           
      </div>
    );
  }
}

export default App;
