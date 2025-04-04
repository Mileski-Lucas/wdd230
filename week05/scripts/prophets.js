const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        // Fetch data from the URL
        const response = await fetch(url);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        console.table(data.prophets);

        displayProphets(data.prophets);

// Dynamic og:image
        updateOgImage(data.prophets);

// Filters options
        setupFilters(data.prophets);

    } catch (error) {
        console.error('Error fetching prophet data:', error);
    }
}

// Function to display prophets
function displayProphets(prophets) {
    cards.innerHTML = '';

    prophets.forEach(prophet => {
        const card = document.createElement('section');
        card.classList.add('card');

        const orderSuffix = getOrdinalSuffix(prophet.order);

        // Create HTML content for the card
        card.innerHTML = `
            <h2>${prophet.name} ${prophet.lastname}</h2>
            <img 
                src="${prophet.imageurl}"
                alt="Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${orderSuffix} Latter-day President"
                loading="lazy"
                width="200"
                height="250"
                >
            <p>Birthdate: ${prophet.birthdate}</p>
            <p>Death: ${prophet.death || 'Still Living'}</p>
            <p>Birthplace: ${prophet.birthplace}</p>
            <p>Number of Children: ${prophet.numofchildren}</p>
            <p>Length of Service: ${prophet.length} years</p>
        `;

        // Append the card to the cards div
        cards.appendChild(card);
    });
}

// Function to add the tag in the img alt text
function getOrdinalSuffix(order) {
    const j = order %10;
    const k = order %100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
}

// Function to keep the og:image always with the living prophet
function updateOgImage(prophets) {
    if (!Array.isArray(prophets)) {
        console.error('Prophets data is not an array>:', prophets);
        return;
    }

    const livingProphet = prophets.find(prophet => prophet.death === null);

    if (livingProphet) {
        const ogImageMeta = document.querySelector('meta[property="og:image"]');
        ogImageMeta.setAttribute('content', livingProphet.imageurl);
        console.log('Updated og:image with living prophet:', livingProphet.name);
    } else {
        console.error('No living prophet found in the data.');
    }
}

getProphetData();