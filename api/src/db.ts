import * as Postgres from 'pg';
// JSON Schema that validates Hiking JSON payloads
// see: https://github.com/tdegrunt/jsonschema
// for some schema examples.
export const HikingJSONSchema = {
  type: 'object',
  properties: {
    hikeid: {type: 'string'},
    name: {type: 'string'},
    elevationGain: {type: 'string'},
    coord: {
      type: 'object',
      properties: {
        lat: {type: 'number'},
        lon: {type: 'number'}
      }
    }
  },
  required: ['name', 'elevationGain', 'hikeid'],
  additionalProperties: false
};
export type Hike = {
  hikeid: string;
  name: string;
  elevationGain: string;
  coord: LocationCoordinates;
};

export type LocationCoordinates = {
  lat: number;
  lon: number;
};

export namespace RelationalDB {
  export const getClient = (): Postgres.Client => {
    return new Postgres.Client({
        user: 'sigl2020',
        host: 'localhost',
        database: 'hikedb',
        password: 'sigl2020',
        port: 5432
      });
  };

  /**
   * Return hikings for area
   */
  export const getHikingsForArea = async (areaid: string) => {
    const cli = getClient();
    cli.connect();
    const res = await cli.query(`
      SELECT * FROM public.hikes
      ORDER BY hikeid ASC LIMIT 10
    `);
    cli.end();
    return res.rows;
  };

  export const throwMe = () => { throw new Error('Boom !') }
}
