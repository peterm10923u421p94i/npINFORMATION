class ParkGenerator {
    constructor() {
        // Updated with US National Parks and their founding years
        this.usParks = [
            { name: "Yellowstone", state: "Wyoming", year: "1872" },
            { name: "Yosemite", state: "California", year: "1890" },
            { name: "Sequoia", state: "California", year: "1890" },
            { name: "Mount Rainier", state: "Washington", year: "1899" },
            { name: "Crater Lake", state: "Oregon", year: "1902" },
            { name: "Wind Cave", state: "South Dakota", year: "1903" },
            { name: "Mesa Verde", state: "Colorado", year: "1906" },
            { name: "Glacier", state: "Montana", year: "1910" },
            { name: "Rocky Mountain", state: "Colorado", year: "1915" },
            { name: "Haleakalā", state: "Hawaii", year: "1916" },
            { name: "Lassen Volcanic", state: "California", year: "1916" },
            { name: "Acadia", state: "Maine", year: "1919" },
            { name: "Grand Canyon", state: "Arizona", year: "1919" },
            { name: "Zion", state: "Utah", year: "1919" },
            { name: "Grand Teton", state: "Wyoming", year: "1929" },
            { name: "Great Smoky Mountains", state: "TN/NC", year: "1934" },
            { name: "Olympic", state: "Washington", year: "1938" },
            { name: "Joshua Tree", state: "California", year: "1994" }
        ];
    }

    pickRandom() {
        const randomIndex = Math.floor(Math.random() * this.usParks.length);
        const park = this.usParks[randomIndex];
        this.updateDisplay(park);
    }

    updateDisplay(park) {
        const display = document.getElementById('result-display');
        
        // Add a "Consulting the Archives" effect
        display.innerHTML = "<em>Searching the archives...</em>";
        
        setTimeout(() => {
            display.innerHTML = `
                <div style="border-top: 1px solid #8B5E3C; padding-top: 15px;">
                    <span style="font-size: 0.8rem; text-transform: uppercase; color: #8B5E3C;">Established ${park.year}</span>
                    <br>
                    <strong>${park.name} National Park</strong>
                    <br>
                    <span style="font-size: 1.1rem; font-style: italic;">${park.state}</span>
                </div>
            `;
        }, 500);
    }
}

// Create the 'Ranger' instance
const MyParkRanger = new ParkGenerator();
