// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');

menuToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
});

// Close the menu automatically once a link inside it is tapped
primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
  });
});

// ===== Category filter (All / Polos / Tees / Denim / Joggers & Trousers) =====
const chips = document.querySelectorAll('.cat-chip');
const cards = document.querySelectorAll('#productGrid .card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    // remove "active" styling from every chip, then add it to the one just clicked
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';      // show
      } else {
        card.style.display = 'none';  // hide
      }
    });
  });
});

// ===== Lightbox (tap a product photo to view it full size) =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = ''; // clears the image so it doesn't sit loaded in the background
}