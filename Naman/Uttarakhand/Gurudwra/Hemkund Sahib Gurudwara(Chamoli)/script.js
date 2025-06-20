// Accordion Functionality
document.querySelectorAll('.accordion').forEach(accordion => {
  accordion.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
      // Close all others in this accordion
      accordion.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== this) {
          h.classList.remove('active');
          h.nextElementSibling.style.display = "none";
        }
      });
      // Toggle this one
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

// Automatic Image Slider Functionality
const slides = document.querySelectorAll('#templeSlider .slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Start automatic sliding every 3 seconds
setInterval(nextSlide, 3000);
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Yahan aap HTML me data inject karen
    document.getElementById('main-content').innerText = data[0].mainContent[0].content;
  })
  .catch(err => console.log(err));

