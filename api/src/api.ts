import {default as express, Request, Response} from 'express';
import cors from 'cors';
import {json} from 'body-parser';
import * as jsonschema from 'jsonschema';
import {RelationalDB, HikingJSONSchema} from './db';

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
app.get('/v1/hikes', async (req: Request, res: Response) => {
  const areaid = req.query.areaid;
  if (areaid) {
    const hikings = await RelationalDB.getHikingsForArea(areaid);
    res.send(hikings)
  } else {
    res.send([])
  }
});

// Add a new hiking to the volatile database
app.post('/v1/hike', (req: Request, res: Response) => {
  if (req.body && typeof(req.body) === 'object') {
    const {valid, errors} = jsonschema.validate(req.body, HikingJSONSchema);
    if (valid) {
      VolatileDB.saveHiking(req.body);
      res.send({status: 'hiking saved!'});
    } else {
      res.status(400);
      res.send({errors})
    }
  } else {
    res.status(400);
    res.send({error: "wrong payload format. Need application/json."});
  }
});

/**
 * Get all hikings from our volatile database
 */
app.get('/v1/hike/all', (_: Request, res: Response) => {
  res.send(VolatileDB.getAllHikings());
});

// Make the API listen on the given port. This will run forever...
// until something kill it!
app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
