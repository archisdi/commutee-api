

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
    // const jatimulyaToDukuhAtas = dukuhAtasToJatimulya.reverse();


    const dukuhAtasToBekasiSchedule = {};

    dukuhAtasToJatimulya.forEach((station, index) => {
        const code = station.toLowerCase().trim().replace(/\s/g, '');

        if (index === 0) {
            dukuhAtasToBekasiSchedule[code] = {
                station,
                line: 'bekasi',
                time: departureSchedule[code]
            };
            return;
        }

        const previousStation = dukuhAtasToJatimulya[index - 1].toLowerCase().trim().replace(/\s/g, '');
    });

    console.log(dukuhAtasToBekasiSchedule);
}

main();