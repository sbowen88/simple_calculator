const express = require('express'),
app = express(),
SERVER_PORT = 8080 


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`));