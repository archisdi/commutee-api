/**
 * @typedef {Object} Line
 * @property {string} name - The name of the line.
 * @property {string} start - The starting station of the line.
 * @property {string} end - The ending station of the line.
 * @property {string[]} stations - The list of stations on the line.
 */

//----------------------------------------------

/**
 * @typedef {Object} Connections
 * @property {number} [stationId] - The distance to the connected station.
 */

/**
 * @typedef {Object} Station
 * @property {string} name - The name of the station.
 * @property {Connections} connections - The connections to other stations with distances.
 * @property {boolean} [is_transit] - Indicates if the station is a transit station.
 */

/**
 * @typedef {Object} StationsData
 * @property {Object.<string, Station>} stations - The stations data.
 */

//----------------------------------------------

/**
 * @typedef {Object} StationSchedule
 * @property {string[]} weekday - The schedule for weekdays.
 * @property {string[]} weekend - The schedule for weekends.
 */

/**
 * @typedef {Object.<string, StationSchedule>} DepartureSchedule
 * An object where keys are station names and values are their schedules.
 */