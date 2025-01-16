const { serverConfig } = require('./config');
const express = require('express');

const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});