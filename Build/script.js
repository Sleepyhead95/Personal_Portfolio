// Function to add animation to Hello
//const textElement = document.getElementById('hello');
//onst text = textElement.textContent;
//let animatedText = '';
//const animationDuration = 1; // Total animation duration in seconds

//for (let i = 0; i < text.length; i++) {
 // const delay = (animationDuration / text.length) * i;
  //animatedText += `<span class="animated-letter" style="animation-delay: ${delay}s">${text[i]}</span>`;
//}

//textElement.innerHTML = animatedText;

// Function to toggle project details
function toggleProjectDetails(event) {
  const arrow = event.currentTarget;
  const project = arrow.parentElement;
  const projectDetails = project.nextElementSibling;
  projectDetails.style.display = projectDetails.style.display === 'block' ? 'none' : 'block';
}


// Function to blur header on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > header.offsetHeight) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});

// Function for pop-up window
document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("my-button");
  const span = document.getElementById("close");

  btn.addEventListener('click', function() {
      modal.style.display = "flex";
  })

  span.addEventListener('click', function() {
      modal.style.display = "none";
  })

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  })
});


