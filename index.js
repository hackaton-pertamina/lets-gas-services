// require to read .env file
require('dotenv').config();

// setup express js
const app = require('./src/api');

app.listen(process.env.APP_PORT,
    () => console.log(`app listening on port ${process.env.APP_PORT}!`)
);
