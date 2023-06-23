// Function to add animation to Hello
const textElement = document.getElementById('hello');
const text = textElement.textContent;
let animatedText = '';
const animationDuration = 1; // Total animation duration in seconds

for (let i = 0; i < text.length; i++) {
  const delay = (animationDuration / text.length) * i;
  animatedText += `<span class="animated-letter" style="animation-delay: ${delay}s">${text[i]}</span>`;
}

textElement.innerHTML = animatedText;

// Function to toggle project details
function toggleProjectDetails(event) {
  const arrow = event.currentTarget;
  const project = arrow.parentElement;
  const projectDetails = project.nextElementSibling;
  projectDetails.style.display = projectDetails.style.display === 'block' ? 'none' : 'block';
}


// Function to blur header on scroll
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if(window.scrollY > header.offsetHeight) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});

