class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Acadia", state: "ME", year: "1919", link: "https://www.nps.gov/acad" },
            { name: "Arches", state: "UT", year: "1971", link: "https://www.nps.gov/arch" },
            { name: "Badlands", state: "SD", year: "1978", link: "https://www.nps.gov/badl" },
            { name: "Big Bend", state: "TX", year: "1944", link: "https://www.nps.gov/bibe" },
            { name: "Biscayne", state: "FL", year: "1980", link: "https://www.nps.gov/bisc" },
            { name: "Black Canyon of the Gunnison", state: "CO", year: "1999", link: "https://www.nps.gov/blca" },
            { name: "Bryce Canyon", state: "UT", year: "1928", link: "https://www.nps.gov/brca" },
            { name: "Canyonlands", state: "UT", year: "1964", link: "https://www.nps.gov/cany" },
            { name: "Capitol Reef", state: "UT", year: "1971", link: "https://www.nps.gov/care" },
            { name: "Carlsbad Caverns", state: "NM", year: "1930", link: "https://www.nps.gov/cave" },
            { name: "Channel Islands", state: "CA", year: "1980", link: "https://www.nps.gov/chis" },
            { name: "Congaree", state: "SC", year: "2003", link: "https://www.nps.gov/cong" },
            { name: "Crater Lake", state: "OR", year: "1902", link: "https://www.nps.gov/crla" },
            { name: "Cuyahoga Valley", state: "OH", year: "2000", link: "https://www.nps.gov/cuva" },
            { name: "Death Valley", state: "CA/NV", year: "1994", link: "https://www.nps.gov/deva" },
            { name: "Denali", state: "AK", year: "1917", link: "https://www.nps.gov/dena" },
            { name: "Dry Tortugas", state: "FL", year: "1992", link: "https://www.nps.gov/drto" },
            { name: "Everglades", state: "FL", year: "1947", link: "https://www.nps.gov/ever" },
            { name: "Gates of the Arctic", state: "AK", year: "1980", link: "https://www.nps.gov/gaar" },
            { name: "Gateway Arch", state: "MO", year: "2018", link: "https://www.nps.gov/jeff" },
            { name: "Glacier", state: "MT", year: "1910", link: "https://www.nps.gov/glac" },
            { name: "Glacier Bay", state: "AK", year: "1980", link: "https://www.nps.gov/glba" },
            { name: "Grand Canyon", state: "AZ", year: "1919", link: "https://www.nps.gov/grca" },
            { name: "Grand Teton", state: "WY", year: "1929", link: "https://www.nps.gov/grte" },
            { name: "Great Basin", state: "NV", year: "1986", link: "https://www.nps.gov/grba" },
            { name: "Great Sand Dunes", state: "CO", year: "2004", link: "https://www.nps.gov/grsa" },
            { name: "Great Smoky Mountains", state: "TN/NC", year: "1934", link: "https://www.nps.gov/grsm" },
            { name: "Guadalupe Mountains", state: "TX", year: "1966", link: "https://www.nps.gov/gumo" },
            { name: "Haleakalā", state: "HI", year: "1916", link: "https://www.nps.gov/hale" },
            { name: "Hawaiʻi Volcanoes", state: "HI", year: "1916", link: "https://www.nps.gov/havo" },
            { name: "Hot Springs", state: "AR", year: "1921", link: "https://www.nps.gov/hosp" },
            { name: "Indiana Dunes", state: "IN", year: "2019", link: "https://www.nps.gov/indu" },
            { name: "Isle Royale", state: "MI", year: "1940", link: "https://www.nps.gov/isro" },
            { name: "Joshua Tree", state: "CA", year: "1994", link: "https://www.nps.gov/jotr" },
            { name: "Katmai", state: "AK", year: "1980", link: "https://www.nps.gov/katm" },
            { name: "Kenai Fjords", state: "AK", year: "1980", link: "https://www.nps.gov/kefj" },
            { name: "Kings Canyon", state: "CA", year: "1940", link: "https://www.nps.gov/seki" },
            { name: "Kobuk Valley", state: "AK", year: "1980", link: "https://www.nps.gov/kova" },
            { name: "Lake Clark", state: "AK", year: "1980", link: "https://www.nps.gov/lacl" },
            { name: "Lassen Volcanic", state: "CA", year: "1916", link: "https://www.nps.gov/lavo" },
            { name: "Mammoth Cave", state: "KY", year: "1941", link: "https://www.nps.gov/maca" },
            { name: "Mesa Verde", state: "CO", year: "1906", link: "https://www.nps.gov/meve" },
            { name: "Mount Rainier", state: "WA", year: "1899", link: "https://www.nps.gov/mora" },
            { name: "New River Gorge", state: "WV", year: "2020", link: "https://www.nps.gov/neri" },
            { name: "North Cascades", state: "WA", year: "1968", link: "https://www.nps.gov/noca" },
            { name: "Olympic", state: "WA", year: "1938", link: "https://www.nps.gov/olym" },
            { name: "Petrified Forest", state: "AZ", year: "1962", link: "https://www.nps.gov/pefo" },
            { name: "Pinnacles", state: "CA", year: "2013", link: "https://www.nps.gov/pinn" },
            { name: "Redwood", state: "CA", year: "1968", link: "https://www.nps.gov/redw" },
            { name: "Rocky Mountain", state: "CO", year: "1915", link: "https://www.nps.gov/romo" },
            { name: "Saguaro", state: "AZ", year: "1994", link: "https://www.nps.gov/sagu" },
            { name: "Sequoia", state: "CA", year: "1890", link: "https://www.nps.gov/seki" },
            { name: "Shenandoah", state: "VA", year: "1935", link: "https://www.nps.gov/shen" },
            { name: "Theodore Roosevelt", state: "ND", year: "1978", link: "https://www.nps.gov/thro" },
            { name: "Virgin Islands", state: "VI", year: "1956", link: "https://www.nps.gov/viis" },
            { name: "Voyageurs", state: "MN", year: "1975", link: "https://www.nps.gov/voya" },
            { name: "White Sands", state: "NM", year: "2019", link: "https://www.nps.gov/whsa" },
            { name: "Wind Cave", state: "SD", year: "1903", link: "https://www.nps.gov/wica" },
            { name: "Wrangell–St. Elias", state: "AK", year: "1980", link: "https://www.nps.gov/wrst" },
            { name: "Yellowstone", state: "WY/MT/ID", year: "1872", link: "https://www.nps.gov/yell" },
            { name: "Yosemite", state: "CA", year: "1890", link: "https://www.nps.gov/yose" },
            { name: "Zion", state: "UT", year: "1919", link: "https://www.nps.gov/zion" }
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        
        display.innerHTML = "";

        // Stage 1: The Year
        setTimeout(() => {
            const p1 = document.createElement('p');
            p1.className = "suspense-text";
            p1.innerText = `ESTABLISHED: ${park.year}`;
            display.appendChild(p1);
        }, 500);

        // Stage 2: The State
        setTimeout(() => {
            const p2 = document.createElement('p');
            p2.className = "suspense-text";
            p2.style.color = "#A86B4C";
            p2.innerText = `LOCATION: ${park.state}`;
            display.appendChild(p2);
        }, 1500);

        // Stage 3: The Big Reveal + Clickable Link
        setTimeout(() => {
            const h2 = document.createElement('h2');
            h2.className = "reveal-title";
            h2.innerText = park.name.toUpperCase();
            display.appendChild(h2);

            // Create the link button
            const linkBtn = document.createElement('a');
            linkBtn.href = park.link;
            linkBtn.target = "_blank"; // Opens in new tab
            linkBtn.className = "ready-btn"; 
            linkBtn.style.display = "inline-block";
            linkBtn.style.marginTop = "20px";
            linkBtn.style.color = "black";
            linkBtn.style.borderColor = "black";
            linkBtn.innerText = "VIEW PARK DETAILS →";
            display.appendChild(linkBtn);

        }, 2800);
    }
}

const MyParkRanger = new ParkGenerator();
