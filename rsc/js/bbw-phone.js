let activeCard = null;

function flipCard(card) {
    if (activeCard) {
        activeCard.classList.remove('active');
    }
    card.classList.add('active');
    activeCard = card;
}

document.addEventListener('click', function(event) {
    if (event.target.closest('.card')) return;
    if (activeCard) {
        activeCard.classList.remove('active');
        activeCard = null;
    }
});