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
  var client: Postgres.Client | null = null;

  /**
   * Avoid to create a new postgres client
   * for every requests to the DB
   */
  export const getClient = (): Postgres.Client => {
    if (client === null) {
      client = new Postgres.Client({connectionString: ''});
    }
    return client;
  };

  /**
   * Return hikings for area
   */
  export const getHikingsForArea = async (areaid: string) => {
    const cli = getClient();
    cli.connect();
    const res = await cli.query<Hike>(`
      SELECT * FROM public.hikes
      ORDER BY hikeid ASC LIMIT 10
    `);
    cli.end();
    return res.rows;
  };
}
