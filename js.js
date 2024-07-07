// Show the loader when the page loads or when a link is clicked
window.onload = showLoader;
document.querySelectorAll('a').forEach(link => {
  link.onclick = showLoader;
});

function showLoader() {
  document.querySelector('.loader').style.display = 'flex';
  setTimeout(hideLoader, 3000); /* Hide the loader after 3s */
}

function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}