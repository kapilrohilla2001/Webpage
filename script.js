// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image carousel for player and team cards
function startCarousel(cards, interval) {
    let currentCard = 0;
    let isPaused = false;

    function showCard(index) {
        cards[index].style.display = 'block';
    }

    function hideCard(index) {
        cards[index].style.display = 'none';
    }

    function nextCard() {
        if (!isPaused) {
            hideCard(currentCard);
            currentCard = (currentCard + 1) % cards.length;
            showCard(currentCard);
        }
    }

    // Show the first card
    showCard(currentCard);

    // Set interval for the carousel
    const carouselInterval = setInterval(nextCard, interval);

    // Pause button click event
    const pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', function () {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    });
}

// Start player card carousel
const playerCards = document.querySelectorAll('.player-card');
startCarousel(playerCards, 2500); // Change the interval (in milliseconds) as needed

// Start team card carousel
const teamCards = document.querySelectorAll('.team-card');
startCarousel(teamCards, 4000); // Change the interval (in milliseconds) as needed

// Dynamically add players
for (let i = 1; i <= 5; i++) {
    const playerCard = document.getElementById(`player${i}`);
    playerCard.innerHTML = `
        <img src="player${i}.jpg" alt="Player ${i}">
        <h3>Player ${i}</h3>
        <p>
            Description of Player ${i}.
        </p>`;
}

// Dynamically add teams
for (let i = 1; i <= 5; i++) {
    const teamCard = document.getElementById(`team${i}`);
    teamCard.innerHTML = `
        <img src="team${i}.jpg" alt="Team ${i}">
        <h3>Team ${i}</h3>
        <p>
            Description of Team ${i}.
        </p>`;
}
