// Flip card on click or tap
const card = document.getElementById('bizcard');
card.addEventListener('click', function() {
  card.classList.toggle('flipped');
});