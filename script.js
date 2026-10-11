(() => {
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.top-links');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.video-play-button').forEach((button) => {
    const container = button.parentElement;
    const video = container.querySelector('video');
    if (!video) return;

    button.addEventListener('click', () => {
      video.play().catch(() => {
        container.classList.remove('is-playing');
      });
    });
    video.addEventListener('play', () => container.classList.add('is-playing'));
    video.addEventListener('pause', () => container.classList.remove('is-playing'));
    video.addEventListener('ended', () => {
      container.classList.remove('is-playing');
      if (video.hasAttribute('data-reset-on-end')) video.load();
    });
  });
})();
