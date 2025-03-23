// Add event listener to get hamburger menu upon click

document.querySelector('.hamburger-menu').addEventListener('click', displayNavMenu)

// Then run the set of instructions below when clicked

function displayNavMenu() {
  document.querySelector('.nav-link-container').classList.toggle('hidden')
}