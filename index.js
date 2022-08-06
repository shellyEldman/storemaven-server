const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const gameRoutes = require('./routes/gameRoutes');

// express app
const app = express();
const port = 4000;
const server = http.createServer(app);

// parse application/json
app.use(bodyParser.json())

// allow cors
app.use(cors());

// game routes
app.use('/', gameRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).json({
        error: "route not found",
        status: "404"
    });
});

server.listen(port, () => {
    console.log(`sever listening on port ${port}`)
})