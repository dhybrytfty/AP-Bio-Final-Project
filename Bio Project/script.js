// -----------------------------
// BIO CARD TOGGLE
// -----------------------------
function toggleBio(el) {
  document.querySelectorAll(".bio-card").forEach(card => {
    if (card !== el) card.classList.remove("active");
  });

  el.classList.toggle("active");
}

// -----------------------------
// SOURCE BOX TOGGLE
// -----------------------------
function toggleSource(img) {
  img.nextElementSibling.classList.toggle("active");
}

// -----------------------------
// INFO CARD FADE-IN (ONLY SYSTEM YOU NEED)
// -----------------------------
const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));
