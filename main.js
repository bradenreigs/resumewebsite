document.addEventListener('DOMContentLoaded', (event) => {

  // Function to add smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Function to display the current year dynamically in the footer
  const year = new Date().getFullYear();
  document.querySelector('footer p').textContent = `© ${year} Braden Reigstad`;

});
