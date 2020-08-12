const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public')); //used to serve files from the public folder
app.use(bodyParser.json()); //helps body-parser middleware parse JSON objects. Parses JSON requests into objects of the request body so that they can be accessed more easily

app.use('/campsites', campsiteRouter);


// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`We will send details of the campsite: ${req.params.campsiteId} to you`);
// });

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`)
// });

// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//     with description ${req.body.description}`)
// });

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });

app.use((req, res) => {
    //console.log(req.headers); no longer needed because morgan will take care of logging the headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')
});


app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}`)
})