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

// Function to make images appear on hover
const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach((wrapper) => {
  const colorfulImage = wrapper.querySelector('.colorful');

  wrapper.addEventListener('mouseover', () => {
    colorfulImage.style.opacity = 1;
  });

  wrapper.addEventListener('mouseout', () => {
    colorfulImage.style.opacity = 0;
  });
});

