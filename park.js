// Navigation Function
function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Generator Class
class ParkGenerator {
    constructor() {
        this.usParks = [
            { name: "Yellowstone", state: "WY", year: "1872" },
            { name: "Yosemite", state: "CA", year: "1890" },
            { name: "Grand Canyon", state: "AZ", year: "1919" },
            { name: "Zion", state: "UT", year: "1919" },
            { name: "Glacier", state: "MT", year: "1910" },
            { name: "Acadia", state: "ME", year: "1919" }
        ];
    }

    pickRandom() {
        const park = this.usParks[Math.floor(Math.random() * this.usParks.length)];
        const display = document.getElementById('result-display');
        display.innerHTML = "<em>Checking the trails...</em>";
        
        setTimeout(() => {
            display.innerHTML = `
                <div style="margin-top:20px; padding-top:10px; border-top: 1px solid #5C3A2E;">
                    <strong>${park.name} National Park</strong><br>
                    <small>EST. ${park.year} | ${park.state}</small>
                </div>`;
        }, 400);
    }
}

const MyParkRanger = new ParkGenerator();
