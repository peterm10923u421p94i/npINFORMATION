// Keep your existing 63 park list here! I'm just showing the method change.
class ParkGenerator {
    constructor() {
        this.usParks = [  { name: "Acadia", state: "ME", year: "1919" }, { name: "American Samoa", state: "AS", year: "1988" }, { name: "Arches", state: "UT", year: "1971" }, { name: "Badlands", state: "SD", year: "1978" }, { name: "Big Bend", state: "TX", year: "1944" }, { name: "Biscayne", state: "FL", year: "1980" }, { name: "Black Canyon of the Gunnison", state: "CO", year: "1999" }, { name: "Bryce Canyon", state: "UT", year: "1928" }, { name: "Canyonlands", state: "UT", year: "1964" }, { name: "Capitol Reef", state: "UT", year: "1971" }, { name: "Carlsbad Caverns", state: "NM", year: "1930" }, { name: "Channel Islands", state: "CA", year: "1980" }, { name: "Congaree", state: "SC", year: "2003" }, { name: "Crater Lake", state: "OR", year: "1902" }, { name: "Cuyahoga Valley", state: "OH", year: "2000" }, { name: "Death Valley", state: "CA/NV", year: "1994" }, { name: "Denali", state: "AK", year: "1917" }, { name: "Dry Tortugas", state: "FL", year: "1992" }, { name: "Everglades", state: "FL", year: "1947" }, { name: "Gates of the Arctic", state: "AK", year: "1980" }, { name: "Gateway Arch", state: "MO", year: "2018" }, { name: "Glacier", state: "MT", year: "1910" }, { name: "Glacier Bay", state: "AK", year: "1980" }, { name: "Grand Canyon", state: "AZ", year: "1919" }, { name: "Grand Teton", state: "WY", year: "1929" }, { name: "Great Basin", state: "NV", year: "1986" }, { name: "Great Sand Dunes", state: "CO", year: "2004" }, { name: "Great Smoky Mountains", state: "TN/NC", year: "1934" }, { name: "Guadalupe Mountains", state: "TX", year: "1966" }, { name: "Haleakalā", state: "HI", year: "1916" }, { name: "Hawaiʻi Volcanoes", state: "HI", year: "1916" }, { name: "Hot Springs", state: "AR", year: "1921" }, { name: "Indiana Dunes", state: "IN", year: "2019" }, { name: "Isle Royale", state: "MI", year: "1940" }, { name: "Joshua Tree", state: "CA", year: "1994" }, { name: "Katmai", state: "AK", year: "1980" }, { name: "Kenai Fjords", state: "AK", year: "1980" }, { name: "Kings Canyon", state: "CA", year: "1940" }, { name: "Kobuk Valley", state: "AK", year: "1980" }, { name: "Lake Clark", state: "AK", year: "1980" }, { name: "Lassen Volcanic", state: "CA", year: "1916" }, { name: "Mammoth Cave", state: "KY", year: "1941" }, { name: "Mesa Verde", state: "CO", year: "1906" }, { name: "Mount Rainier", state: "WA", year: "1899" }, { name: "New River Gorge", state: "WV", year: "2020" }, { name: "North Cascades", state: "WA", year: "1968" }, { name: "Olympic", state: "WA", year: "1938" }, { name: "Petrified Forest", state: "AZ", year: "1962" }, { name: "Pinnacles", state: "CA", year: "2013" }, { name: "Redwood", state: "CA", year: "1968" }, { name: "Rocky Mountain", state: "CO", year: "1915" }, { name: "Saguaro", state: "AZ", year: "1994" }, { name: "Sequoia", state: "CA", year: "1890" }, { name: "Shenandoah", state: "VA", year: "1935" }, { name: "Theodore Roosevelt", state: "ND", year: "1978" }, { name: "Virgin Islands", state: "VI", year: "1956" }, { name: "Voyageurs", state: "MN", year: "1975" }, { name: "White Sands", state: "NM", year: "2019" }, { name: "Wind Cave", state: "SD", year: "1903" }, { name: "Wrangell–St. Elias", state: "AK", year: "1980" }, { name: "Yellowstone", state: "WY/MT/ID", year: "1872" }, { name: "Yosemite", state: "CA", year: "1890" }, { name: "Zion", state: "UT", year: "1919" }];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        
        display.innerHTML = "<p class='handwritten'>Listening to the wind...</p>";
        
        setTimeout(() => {
            display.innerHTML = `
                <div class="photo-frame" style="animation: fadeIn 1s; max-width: 400px; margin: auto;">
                    <h2 style="color: var(--forest); margin-bottom: 5px;">${park.name}</h2>
                    <p class="handwritten" style="font-size: 1.2rem; margin: 0;">Located in ${park.state}</p>
                    <hr style="border: 0; border-top: 1px dashed #A86B4C; margin: 15px 0;">
                    <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Founded in ${park.year}</p>
                </div>
            `;
        }, 600);
    }
}
const MyParkRanger = new ParkGenerator();
