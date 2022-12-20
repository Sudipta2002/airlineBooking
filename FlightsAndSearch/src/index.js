const express = require('express');
const { PORT } = require('./config/serverConfig');
// const dotenv = require('dotenv');
// dotenv.config();
const bodyParser = require('body-parser')

const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');
const db = require('./models/index');
// const city = require('./models/city');
const sequelize = require('sequelize');
const { City, Airport } = require('./models/index');

const setupAndStartServer = async() => {
    /// create a express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server running at port number ${PORT}`);

        // const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" });
        // repo.createCity({ name: "Kolkata" });
        // repo.deleteCity(32);




        // db.sequelize.sync({ alert: true });   <--- needed to be done for implementing the below fx
        if (process.env.SYNC_DB) {
            // db.sequelize.sync({ alert: true });
        }
        // const city = await City.findOne({
        //     where: {
        //         id: 35
        //     }
        // });
        // console.log(city);
        // const airport = await city.getAirports();
        // const newAirport = await Airport.create({    //new Airport made
        //     name: "Jindal International Airport",
        //     cityId: 38
        // });
        // const newAirport = await Airport.findOne({
        //     where: {
        //         id: 5
        //     }
        // });
        // await city.addAirport(newAirport);
        // console.log(airport);
    });
}
setupAndStartServer();