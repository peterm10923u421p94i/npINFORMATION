class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Yellowstone", state: "WY/MT/ID", year: "1872" },
            { name: "Yosemite", state: "CA", year: "1890" },
            { name: "Zion", state: "UT", year: "1919" },
            // ... (keep all 63 parks here)
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        
        // 1. Darken the reveal area for the "Video"
        display.innerHTML = `<div id="video-stage" style="background:#111; padding:100px 20px; border-radius:10px; box-shadow: inset 0 0 50px #000;"></div>`;
        const stage = document.getElementById('video-stage');

        // 2. Start the suspense sequence
        setTimeout(() => {
            stage.innerHTML = `<p class="suspense-text">INITIALIZING DATA...</p>`;
        }, 300);

        setTimeout(() => {
            stage.innerHTML += `<br><p class="suspense-text">FOUNDED: ${park.year}</p>`;
        }, 1500);

        setTimeout(() => {
            stage.innerHTML += `<br><p class="suspense-text">REGION: ${park.state}</p>`;
        }, 2700);

        // 3. THE BIG SLAM REVEAL
        setTimeout(() => {
            stage.innerHTML = `<h2 class="reveal-title">${park.name.toUpperCase()}</h2>`;
            // Add a little screen shake effect to the container
            display.style.animation = "shake 0.4s";
            setTimeout(() => display.style.animation = "", 400);
        }, 4000);
    }
}

window.MyParkRanger = new ParkGenerator();
