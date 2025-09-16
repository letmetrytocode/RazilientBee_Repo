const content = {
    networking: [
        {
            front: "What is TCP/IP?",
            back: "A suite of communication protocols used to interconnect network devices on the internet. It stands for Transmission Control Protocol/Internet Protocol."
        },
        {
            front: "What is a MAC Address?",
            back: "A unique identifier assigned to a network interface controller (NIC) for communications at the data link layer of a network segment. It's a physical address."
        },
        // Add more networking concepts here
        {
            front: "What is Subnetting?",
            back: "The practice of dividing a network into two or more smaller subnetworks. It increases routing efficiency and enhances security."
        }
    ],
    cybersecurity: [
        {
            front: "What is Phishing?",
            back: "A type of social engineering where an attacker sends a fraudulent message designed to trick a person into revealing sensitive information."
        },
        {
            front: "What is a Firewall?",
            back: "A network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies."
        },
        // Add more cybersecurity concepts here
        {
            front: "What is Encryption?",
            back: "The process of encoding information in such a way that only authorized parties can access it and those who are not authorized cannot."
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-container');
    const tabButtons = document.querySelectorAll('.tab-btn');

    function createCard(cardData) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container h-64';

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner shadow-lg';

        const cardFront = document.createElement('div');
        cardFront.className = 'card-front flex items-center justify-center p-4 text-center rounded-xl transform transition-transform duration-500 hover:scale-105';
        cardFront.innerHTML = `<h3 class="text-xl font-bold">${cardData.front}</h3>`;

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back flex items-center justify-center p-4 text-center rounded-xl transform transition-transform duration-500';
        cardBack.innerHTML = `<p>${cardData.back}</p>`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardContainer.appendChild(cardInner);

        return cardContainer;
    }

    function renderCards(category) {
        cardsContainer.innerHTML = '';
        const cards = content[category];
        if (cards) {
            cards.forEach(card => {
                cardsContainer.appendChild(createCard(card));
            });
        }
    }

    // Handle tab clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            renderCards(category);

            // Remove active class from all buttons and add to the clicked one
            tabButtons.forEach(btn => btn.classList.remove('active-tab'));
            e.target.classList.add('active-tab');
        });
    });

    // Initial load: render networking concepts
    renderCards('networking');
    document.querySelector('.tab-btn[data-category="networking"]').classList.add('active-tab');
});
