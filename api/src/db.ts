import * as Postgres from 'pg';
import * as dotenv from 'dotenv';
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
  var config: Postgres.ClientConfig;
  var localConfig: Postgres.ClientConfig;

  const getLocalConfig = () => {
    if (!localConfig) {
      const conf = dotenv.config().parsed;
      const user = conf && conf.DB_USER;
      const host = conf && conf.DB_HOST;
      const database = conf && conf.DB_NAME;
      const password = conf && conf.DB_USER_PASSWORD;
      const port = conf && +conf.DB_PORT;
      localConfig = {
        user,
        host,
        database,
        password,
        port
      };
    }
    return localConfig;
  };

  const getConfig = () => {
    if (!config) {
      const user = process.env.DB_USER;
      const host = process.env.DB_HOST;
      const database = process.env.DB_NAME;
      const password = process.env.DB_USER_PASSWORD;
      const port = process.env.DB_PORT;
      config = {
        user,
        host,
        database,
        password,
        port: port ? +port : undefined
      };
    }
    return config;
  };

  export const getClient = (): Postgres.Client => {
    return new Postgres.Client(getConfig());
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
}
