class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Yellowstone", state: "WY/MT/ID", year: "1872", known: "Geothermal wonders and the Old Faithful geyser." },
            { name: "Yosemite", state: "CA", year: "1890", known: "Towering granite cliffs like El Capitan and massive waterfalls." },
            { name: "Zion", state: "UT", year: "1919", known: "The massive sandstone cliffs of the Zion Canyon." },
            { name: "Grand Canyon", state: "AZ", year: "1919", known: "Its immense size and intricate, colorful landscape." },
            { name: "Acadia", state: "ME", year: "1919", known: "The rugged rocky coastline of the Atlantic Ocean." }
            // Note: Add 'known' property to your other parks similarly!
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const stage = document.getElementById('video-stage');
        
        // Take over screen
        stage.style.display = 'flex';
        stage.innerHTML = `<p class="suspense-step">ACCESSING SATELLITE IMAGERY...</p>`;

        setTimeout(() => {
            stage.innerHTML += `<p class="suspense-step">COORDINATES LOCKED: ${park.state}</p>`;
        }, 1200);

        setTimeout(() => {
            stage.innerHTML += `<p class="suspense-step">ARCHIVE DATE: ${park.year}</p>`;
        }, 2200);

        // THE SLAM REVEAL
        setTimeout(() => {
            stage.innerHTML = `
                <h2 class="reveal-main">${park.name.toUpperCase()}</h2>
                <p class="known-for">Known for ${park.known}</p>
                <button class="exit-video" onclick="document.getElementById('video-stage').style.display='none'">RETURN TO COMPASS</button>
            `;
            // Visual Shake
            document.body.style.animation = "shake 0.3s";
            setTimeout(() => document.body.style.animation = "", 300);
        }, 3500);
    }
}

window.MyParkRanger = new ParkGenerator();
