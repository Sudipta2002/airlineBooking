const express = require('express');
const { PORT } = require('./config/serverConfig');
// const dotenv = require('dotenv');
// dotenv.config();

const setupAndStartServer = async() => {
    /// create a express object
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server running at port number ${PORT}`);
    });
}
setupAndStartServer();