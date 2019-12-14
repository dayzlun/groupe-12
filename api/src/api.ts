import {default as express, Request, Response} from 'express';
import cors from 'cors';
import {json} from 'body-parser';
import * as jsonschema from 'jsonschema';
import {RelationalDB, HikingJSONSchema, Hike} from './db';

// Configure the server with port
const app = express();
const port = 3000;

// We need to handles Cross-origin Ressource Sharing (CORS)
// on our API, otherwise the browser complains
app.use(cors());

// Middleware to parse our payload as `application/json`
app.use(json());

// Simple route that returns a hello. This is consume to make sure our API endpoint
// is responding (healthcheck)
app.get('/v1/hikes', async (req: Request, res: Response) => {
  const areaid = req.query.areaid;
  if (areaid) {
    try {
      const rows = await RelationalDB.getHikingsForArea(areaid);
      const hikes: Hike[] = rows.map(({hikeid, hikename}) => ({
        hikeid: `${hikeid}`,
        name: hikename,
        elevationGain: '1200 ft',
        coord: {lat: 123.4, lon: 12.34}
      }));
      res.send(hikes);
    } catch (e) {
      res.statusCode = 500;
      res.send({error: e});
    }
  } else {
    res.statusCode = 400;
    res.send({error: 'bad request to hikes, missing areaid'});
  }
});

// Make the API listen on the given port. This will run forever...
// until something kill it!
app.listen(port, () => {
  console.log(`API started on port ${port}`);
});
