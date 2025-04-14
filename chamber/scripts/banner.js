document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meet-banner');
    const closeBtn = document.getElementById('close-banner');

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    if ([1, 2, 3].includes(today)) {
      // Only show on Monday (1), Tuesday (2), or Wednesday (3)
      if (!localStorage.getItem('bannerDismissed')) {
        banner.classList.remove('hidden');
      }
    }

    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
      localStorage.setItem('bannerDismissed', 'true');
    });
});