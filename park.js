class ParkGenerator {
    constructor() {
        // A strictly US National Parks list
        this.usParks = [
            "Yellowstone (Wyoming)",
            "Yosemite (California)",
            "Zion (Utah)",
            "Grand Canyon (Arizona)",
            "Acadia (Maine)",
            "Glacier (Montana)",
            "Grand Teton (Wyoming)",
            "Rocky Mountain (Colorado)",
            "Great Smoky Mountains (Tennessee/NC)",
            "Joshua Tree (California)",
            "Olympic (Washington)",
            "Bryce Canyon (Utah)",
            "Arches (Utah)",
            "Everglades (Florida)",
            "Denali (Alaska)",
            "Badlands (South Dakota)",
            "Sequoia (California)",
            "Cuyahoga Valley (Ohio)"
        ];
    }

    // The method to pick one at random
    pickRandom() {
        const randomIndex = Math.floor(Math.random() * this.usParks.length);
        const selectedPark = this.usParks[randomIndex];
        this.updateDisplay(selectedPark);
    }

    // The method to push that info to your HTML
    updateDisplay(parkName) {
        const display = document.getElementById('result-display');
        display.style.opacity = 0; // Fade out effect
        
        setTimeout(() => {
            display.innerText = `📍 ${parkName}`;
            display.style.opacity = 1;
            display.style.transition = "opacity 0.5s";
        }, 200);
    }
}

// Initialize the class so the button can use it
const MyParkRanger = new ParkGenerator();
