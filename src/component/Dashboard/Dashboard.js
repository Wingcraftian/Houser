import React, {Component} from 'react';
import House from "../House/House";
import "./Dashboard.css"


class Dashboard extends Component{
    constructor(props){
        super();
        this.state = {
            property_name: props.property_name, 
            address: props.address,
            city: props.city,
            state: props.state,
            zip: props.zip

        }
    }
    


    render(){
        const {property_name,address,city,state,zip} = this.state;
        return (
            <div>
                
                {/* <House/> */}
     <h4>{this.props.property_name}</h4>
        <h4>{this.props.address}</h4>
        <h4>{this.props.city}</h4>
        <h4>{this.props.state}</h4> 
        <h4>{this.props.zip}</h4> 
            </div>
            
        )
    }
}
export default Dashboard;