class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Acadia", state: "ME", year: "1919", known: "rugged rocky coastlines." },
            { name: "Arches", state: "UT", year: "1971", known: "natural sandstone arches." },
            { name: "Badlands", state: "SD", year: "1978", known: "eroded buttes and fossil beds." },
            { name: "Big Bend", state: "TX", year: "1944", known: "sea-level deserts and mountain peaks." },
            { name: "Biscayne", state: "FL", year: "1980", known: "emerald islands and coral reefs." },
            { name: "Black Canyon", state: "CO", year: "1999", known: "steep cliffs and ancient rock." },
            { name: "Bryce Canyon", state: "UT", year: "1928", known: "massive hoodoo formations." },
            { name: "Canyonlands", state: "UT", year: "1964", known: "canyons carved by the Colorado River." },
            { name: "Capitol Reef", state: "UT", year: "1971", known: "the Waterpocket Fold wrinkle." },
            { name: "Carlsbad Caverns", state: "NM", year: "1930", known: "underground limestone caves." },
            { name: "Channel Islands", state: "CA", year: "1980", known: "isolated island ecosystems." },
            { name: "Congaree", state: "SC", year: "2003", known: "old-growth bottomland forests." },
            { name: "Crater Lake", state: "OR", year: "1902", known: "its deep blue volcanic lake." },
            { name: "Cuyahoga Valley", state: "OH", year: "2000", known: "native forests and canal history." },
            { name: "Death Valley", state: "CA/NV", year: "1994", known: "extreme heat and low basins." },
            { name: "Denali", state: "AK", year: "1917", known: "North America’s tallest peak." },
            { name: "Dry Tortugas", state: "FL", year: "1992", known: "coral reefs and Fort Jefferson." },
            { name: "Everglades", state: "FL", year: "1947", known: "subtropical wetlands and gators." },
            { name: "Gates of the Arctic", state: "AK", year: "1980", known: "vast, roadless wilderness." },
            { name: "Gateway Arch", state: "MO", year: "2018", known: "the gateway to the West." },
            { name: "Glacier", state: "MT", year: "1910", known: "glacier-carved mountains." },
            { name: "Glacier Bay", state: "AK", year: "1980", known: "massive tidewater glaciers." },
            { name: "Grand Canyon", state: "AZ", year: "1919", known: "its overwhelming immense scale." },
            { name: "Grand Teton", state: "WY", year: "1929", known: "jagged peaks and alpine lakes." },
            { name: "Great Basin", state: "NV", year: "1986", known: "ancient bristlecone pines." },
            { name: "Great Sand Dunes", state: "CO", year: "2004", known: "tallest dunes in North America." },
            { name: "Great Smoky Mtns", state: "TN/NC", year: "1934", known: "misty forests and biodiversity." },
            { name: "Guadalupe Mtns", state: "TX", year: "1966", known: "ancient fossilized coral reefs." },
            { name: "Haleakalā", state: "HI", year: "1916", known: "dormant volcanic landscapes." },
            { name: "Hawaiʻi Volcanoes", state: "HI", year: "1916", known: "active lava flows and vents." },
            { name: "Hot Springs", state: "AR", year: "1921", known: "natural thermal spring water." },
            { name: "Indiana Dunes", state: "IN", year: "2019", known: "Lake Michigan’s sandy shore." },
            { name: "Isle Royale", state: "MI", year: "1940", known: "remote island wolf populations." },
            { name: "Joshua Tree", state: "CA", year: "1994", known: "twisted trees and desert rocks." },
            { name: "Katmai", state: "AK", year: "1980", known: "brown bears and volcanic ash." },
            { name: "Kenai Fjords", state: "AK", year: "1980", known: "ice fields and marine wildlife." },
            { name: "Kings Canyon", state: "CA", year: "1940", known: "deep canyons and giant trees." },
            { name: "Kobuk Valley", state: "AK", year: "1980", known: "arctic sand dunes and caribou." },
            { name: "Lake Clark", state: "AK", year: "1980", known: "turquoise lakes and volcanoes." },
            { name: "Lassen Volcanic", state: "CA", year: "1916", known: "hydrothermal mud pots." },
            { name: "Mammoth Cave", state: "KY", year: "1941", known: "the world's longest cave system." },
            { name: "Mesa Verde", state: "CO", year: "1906", known: "ancient Ancestral Puebloan homes." },
            { name: "Mount Rainier", state: "WA", year: "1899", known: "its massive glacial peak." },
            { name: "New River Gorge", state: "WV", year: "2020", known: "rugged canyon white water." },
            { name: "North Cascades", state: "WA", year: "1968", known: "jagged peaks and 300+ glaciers." },
            { name: "Olympic", state: "WA", year: "1938", known: "diverse temperate rainforests." },
            { name: "Petrified Forest", state: "AZ", year: "1962", known: "ancient fossilized wood logs." },
            { name: "Pinnacles", state: "CA", year: "2013", known: "towering rock spires and caves." },
            { name: "Redwood", state: "CA", year: "1968", known: "the world's tallest trees." },
            { name: "Rocky Mountain", state: "CO", year: "1915", known: "high-altitude tundra and peaks." },
            { name: "Saguaro", state: "AZ", year: "1994", known: "giant desert saguaro cacti." },
            { name: "Sequoia", state: "CA", year: "1890", known: "massive giant forest trees." },
            { name: "Shenandoah", state: "VA", year: "1935", known: "the scenic Blue Ridge Mountains." },
            { name: "Theodore Roosevelt", state: "ND", year: "1978", known: "badlands and bison herds." },
            { name: "Virgin Islands", state: "VI", year: "1956", known: "white beaches and coral reefs." },
            { name: "Voyageurs", state: "MN", year: "1975", known: "waterways and island forests." },
            { name: "White Sands", state: "NM", year: "2019", known: "glistering gypsum sand dunes." },
            { name: "Wind Cave", state: "SD", year: "1903", known: "rare boxwork cave formations." },
            { name: "Wrangell–St. Elias", state: "AK", year: "1980", known: "massive volcanic ice fields." },
            { name: "Yellowstone", state: "WY/MT/ID", year: "1872", known: "geysers and boiling springs." },
            { name: "Yosemite", state: "CA", year: "1890", known: "granite cliffs and waterfalls." },
            { name: "Zion", state: "UT", year: "1919", known: "deep red sandstone canyons." }
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        const overlay = document.getElementById('video-overlay');
        
        // Take over screen
        overlay.style.display = 'flex';
        display.innerHTML = "";

        // Sequence 1: Year
        setTimeout(() => {
            const yearEl = document.createElement('p');
            yearEl.className = "suspense-text";
            yearEl.innerText = `ESTABLISHED ${park.year}`;
            display.appendChild(yearEl);
        }, 500);

        // Sequence 2: State
        setTimeout(() => {
            const stateEl = document.createElement('p');
            stateEl.className = "suspense-text";
            stateEl.style.color = "#A86B4C";
            stateEl.innerText = `LOCATED IN ${park.state}`;
            display.appendChild(stateEl);
        }, 1500);

        // Sequence 3: THE REVEAL
        setTimeout(() => {
            const nameEl = document.createElement('h2');
            nameEl.className = "reveal-title";
            nameEl.innerText = `${park.name.toUpperCase()}`;
            display.appendChild(nameEl);
        }, 2800);

        // Sequence 4: Known For (The closing detail)
        setTimeout(() => {
            const factEl = document.createElement('p');
            factEl.className = "suspense-text";
            factEl.style.fontSize = "1rem";
            factEl.style.color = "white";
            factEl.innerText = `Known for ${park.known}`;
            display.appendChild(factEl);
            
            // Show exit button
            const btn = document.createElement('button');
            btn.className = "action-btn";
            btn.style.marginTop = "30px";
            btn.innerText = "Return to Compass";
            btn.onclick = () => overlay.style.display = 'none';
            display.appendChild(btn);
        }, 4000);
    }
}

const MyParkRanger = new ParkGenerator();
