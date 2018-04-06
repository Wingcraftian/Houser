import React, {Component} from 'react';

class AddHouse extends Component {
    constructor(){
        super();
        this.state = {
            property_name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        
        }
        this.handleProperty_name = this.handleProperty_name.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleProperty_name(val){
        this.setState({
            property_name:val
        });
    }
    handleAddress(val){
        this.setState({
            address:val
        });
    }
    handleCity(val){
        this.setState({
            city:val
        });
    }
    handleState(val){
        this.setState({
            state:val
        });
    }
    handleZip(val){
        this.setState({
            zip:val
        });
    }
    handleConfirm(val){
        const { createHouses} = this.props;
        const {property_name, address, city, state, zip} = this.state;
        createHouses(property_name, address, city, state, zip)
        this.setState({
            property_name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        });
    }
    render(){
        const {property_name, address, city, state, zip} = this.state;
        return (
            <div> 
                <h3>Add House</h3>
<input 
className="add-input"
placeholder="Property Name"
value={property_name}
onChange={e=> this.handleProperty_name(e.target.value)}
/>
<input 
className="add-input"
placeholder="Address"
value={address}
onChange={e=> this.handleAddress(e.target.value)}
/>
<input 
className="add-input"
placeholder="City"
value={city}
onChange={e=> this.handleCity(e.target.value)}
/>
<input 
className="add-input"
placeholder="State"
value={state}
onChange={e=> this.handleState(e.target.value)}
/>
<input 
className="add-input"
placeholder="Zip Code"
value={zip}
onChange={e=> this.handleZip(e.target.value)}
/>
<button className= "add-button" onClick={this.handleConfirm}>
Create</button>
            </div>
        );
    }
}
export default AddHouse;