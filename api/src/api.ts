import {default as express, Request, Response} from 'express';
import cors from 'cors';
import {json} from 'body-parser';
import {VolatileDB} from './db';

// Configure the server with port
const app = express();
const port = 3000;

// We need to handles Cross-origin Ressource Sharing (CORS) 
// on our API, otherwise the browser complains
app.use(cors())

// Middleware to parse our payload as `application/json`
app.use(json());

// Simple route that returns a hello. This is consume to make sure our API endpoint
// is responding (healthcheck)
app.get('/', (_: Request, res: Response) => {
  res.send('Hello !');
});

// Add a new hiking to the volatile database
app.post('/hiking', (req: Request, res: Response) => {
  if (req.body && req.body.name) {
    const {name} = req.body;
    VolatileDB.saveHiking({name});
    res.send({status: 'hiking saved!'});
  } else {
    res.status(400);
    res.send({status: 'missing parameters or wrong parameters. Try again!'});
  }
});

/**
 * Get all hikings from our volatile database
 */
app.get('/hiking/all', (_: Request, res: Response) => {
  res.send(VolatileDB.getAllHikings());
});

// Make the API listen on the given port. This will run forever...
// until something kill it!
app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
