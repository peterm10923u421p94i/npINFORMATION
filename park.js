class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Yellowstone", state: "WY", year: "1872" },
            { name: "Yosemite", state: "CA", year: "1890" },
            { name: "Grand Canyon", state: "AZ", year: "1919" },
            { name: "Zion", state: "UT", year: "1919" },
            { name: "Glacier", state: "MT", year: "1910" }
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        display.innerHTML = `<strong>${park.name} National Park</strong><br><small>EST. ${park.year} | ${park.state}</small>`;
    }
}
const MyParkRanger = new ParkGenerator();
