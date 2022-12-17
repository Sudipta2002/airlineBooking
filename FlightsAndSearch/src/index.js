const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const setupAndStartServer = async() => {
    /// create a express object
    const app = express();

    app.listen(process.env.PORT, () => {
        console.log(`Server running at port number ${process.env.PORT}`);
    });
}
setupAndStartServer();