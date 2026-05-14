function toggleEvent(el) {
  document.querySelectorAll(".event").forEach(e => {
    if (e !== el) e.classList.remove("active");
  });
  el.classList.toggle("active");
}

function toggleSource(img) {
  img.nextElementSibling.classList.toggle("active");
}

const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


function toggleBio(el) {
  const allCards = document.querySelectorAll(".bio-card");

  allCards.forEach(card => {
    if (card !== el) {
      card.classList.remove("active");
    }
  });

  el.classList.toggle("active");
}

function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".bio-card, .info-card, .v-event, .intro-row, .modern-biotech, .history-row"
  );

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("reveal-active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

