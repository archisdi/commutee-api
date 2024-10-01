

async function main() {
    /** @type {Line[]} */
    const lines = require('./datasets/lines.json');

    /** @type {StationsData} */
    const { stations } = require('./datasets/stations.json');

    /** @type {DepartureSchedule} */
    const bekasiDeparture = require('./datasets/departures/bekasi-line.json');

    /** @type {DepartureSchedule} */
    const cibuburDeparture = require('./datasets/departures/cibubur-line.json');

    const departureSchedule = { ...bekasiDeparture, ...cibuburDeparture };

    const dukuhAtasToJatimulya = lines[0].stations;
    const jatimulyaToDukuhAtas = dukuhAtasToJatimulya.reverse();
}

main();