class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Yellowstone", state: "WY/MT/ID", year: "1872", known: "its erupting geysers and colorful hot springs." },
            { name: "Yosemite", state: "CA", year: "1890", known: "its massive granite cliffs and waterfalls." },
            { name: "Zion", state: "UT", year: "1919", known: "deep red sandstone canyons." },
            // ... (Insert the rest of the 63 parks here)
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const overlay = document.getElementById('gen-overlay');
        const display = document.getElementById('gen-content');
        
        overlay.style.display = 'flex';
        display.innerHTML = "<h2>CONSULTING ARCHIVES...</h2>";

        setTimeout(() => {
            display.innerHTML = `<h2>ESTABLISHED ${park.year}</h2>`;
        }, 1200);

        setTimeout(() => {
            display.innerHTML = `<h2 style="color:#A86B4C">LOCATED IN ${park.state}</h2>`;
        }, 2400);

        setTimeout(() => {
            display.innerHTML = `
                <h2 style="font-size:2.5rem">${park.name.toUpperCase()}</h2>
                <p style="font-style:italic; margin: 20px 0;">Known for ${park.known}</p>
                <button class="action-btn" onclick="document.getElementById('gen-overlay').style.display='none'">Back to Compass</button>
            `;
        }, 3600);
    }
}

const MyParkRanger = new ParkGenerator();
