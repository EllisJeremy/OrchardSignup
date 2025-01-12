export default function modalTransition() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');

  // Type assertion to ensure the elements are not null
  if (overlay && modal) {
    overlay.classList.toggle('active');
    modal.classList.toggle('active');
  } else {
    console.error('Overlay or modal element not found.');
  }
}