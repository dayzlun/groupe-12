// JSON Schema that validates Hiking JSON payloads
// see: https://github.com/tdegrunt/jsonschema
// for some schema examples.
export const HikingJSONSchema = {
  type: 'object',
  properties: {
    name: {type: 'string'}
  },
  required: ['name'],
  additionalProperties: false
};

export type Hiking = {
  // TODO DEFINE ME!!!!
  name: string;
};

export namespace VolatileDB {
  const hikings: Hiking[] = [];

  /**
   * Persist (in memory) the given hiking
   * @param hiking the hiking to be persisted
   * @returns the hiking that has been saved
   *
   */
  export const saveHiking = (hiking: Hiking): Hiking => {
    hikings.push(hiking);
    return hiking;
  };

  /**
   * Return all hikings
   */
  export const getAllHikings = () => hikings;

  /**
   * Find the hinking matching the `name` in parameter
   * @param name
   * @returns the hinking if found, `undefined` otherwise.
   */
  export const getHikingByName = (name: string): Hiking | undefined =>
    hikings.find(hiking => hiking.name === name);
}
