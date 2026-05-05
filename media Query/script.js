let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
    return;
  }

  if (currentScroll > lastScroll) {
    // scroll down
    header.style.transform = 'translateY(-100%)';
  } else {
    // scroll up
    header.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});