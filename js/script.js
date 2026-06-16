// ---------- Cart ----------
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  const btn = event.target;
  btn.textContent = 'Added ✓';
  setTimeout(() => { btn.textContent = 'Add To Cart'; }, 1200);
}

// ---------- Dark Mode ----------
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.classList.toggle('fa-moon');
  toggle.classList.toggle('fa-sun');
});

// ---------- Mobile Menu ----------
document.getElementById('mobileToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ---------- FAQ Accordion ----------
function toggleFAQ(el) {
  el.classList.toggle('active');
}

// ---------- Back to Top ----------
const backBtn = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backBtn.classList.add('visible');
  else backBtn.classList.remove('visible');
});

// ---------- Review Slider (interactive + auto) ----------
const slider = document.getElementById('reviewSlider');
const cards = slider.querySelectorAll('.review-card');
const total = cards.length;
let current = 0;
let autoSlideInterval;

// Create dots
const dotsContainer = document.getElementById('dotsContainer');
for (let i = 0; i < total; i++) {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.dataset.index = i;
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
}
const dots = dotsContainer.querySelectorAll('.dot');

function updateSlider(index) {
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  current = index;
  slider.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

function goTo(index) {
  updateSlider(index);
  resetAutoSlide();
}

function nextSlide() {
  goTo(current + 1);
}

function prevSlide() {
  goTo(current - 1);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 4500);
}

// Event listeners for controls
document.getElementById('nextReview').addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
document.getElementById('prevReview').addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

// Start auto-slide
resetAutoSlide();

// Pause on hover
const wrapper = document.querySelector('.review-wrapper');
wrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
wrapper.addEventListener('mouseleave', resetAutoSlide);

// ---------- WhatsApp ----------
document.querySelector('.social .fa-whatsapp')?.addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/255625656604', '_blank');
});

console.log('MK5 PeanutButter · Organic & Natural · Review slider active');