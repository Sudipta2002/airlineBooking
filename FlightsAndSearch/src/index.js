const express = require('express');
const { PORT } = require('./config/serverConfig');
// const dotenv = require('dotenv');
// dotenv.config();
const bodyParser = require('body-parser')

const CityRepository = require('./repository/city-repository');





const setupAndStartServer = async() => {
    /// create a express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server running at port number ${PORT}`);

        const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" });
        // repo.createCity({ name: "Kolkata" });
        // repo.deleteCity(32);
    });
}
setupAndStartServer();