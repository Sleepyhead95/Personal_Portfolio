const textElement = document.getElementById('hello');
const text = textElement.textContent;
let animatedText = '';
const animationDuration = 1; // Total animation duration in seconds

for (let i = 0; i < text.length; i++) {
  const delay = (animationDuration / text.length) * i;
  animatedText += `<span class="animated-letter" style="animation-delay: ${delay}s">${text[i]}</span>`;
}

textElement.innerHTML = animatedText;

function toggleProjectDetails(event) {
  const arrow = event.currentTarget;
  const project = arrow.parentElement;
  const projectDetails = project.nextElementSibling;
  projectDetails.style.display = projectDetails.style.display === 'block' ? 'none' : 'block';
}

const iconContainer = document.getElementById('icon-container');
    const colorfulImage = iconContainer.getAttribute('data-colorful');

    iconContainer.addEventListener('mouseover', () => {
      iconContainer.style.backgroundImage = `url(${colorfulImage})`;
    });

    iconContainer.addEventListener('mouseout', () => {
      iconContainer.style.backgroundImage = "url('black-and-white-image.jpg')";
    });