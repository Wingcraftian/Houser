// const axios = require("axios")

module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all()
        .then( houses => res.status(200).send(houses))
        .catch (()=> res.status(500).send());
    },
    createHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {property_name, address, city, state, zip} = req.body;
        
         dbInstance.create_house([property_name, address, city, state, zip])
         .then(()=>res.status(200).send())
         .catch( () => res.status(500).send() );
    }
   
}