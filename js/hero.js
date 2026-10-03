function initHeroTabs() {
  const hero = document.querySelector('.hero');
  const tablist = hero?.querySelector('.hero__tabs');
  if (!tablist) return;

  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
  const video = hero.querySelector('.hero__video');
  const poster = hero.querySelector('.hero__video-poster');
  const status = document.getElementById('hero-video-status');
  const placeholderText = 'Video profil belum tersedia atau tidak dapat diputar. Untuk sementara, nikmati potret Kamasi Satu.';
  const hasVideo = Boolean(video.getAttribute('src') || video.querySelector('source[src]'));
  const viewport = hero.querySelector('.hero__viewport');
  let activeIndex = 0;

  function updateViewportHeight() {
    // Ukur panel aktif agar panel Beranda yang lebih tinggi tidak menyisakan ruang kosong.
    viewport.style.setProperty('--hero-panel-height', `${panels[activeIndex].offsetHeight}px`);
  }

  function showVideoPlaceholder() {
    video.pause();
    video.hidden = true;
    poster.hidden = false;
    status.textContent = placeholderText;
    video.parentElement.classList.remove('hero__video-frame--available');
  }

  if (hasVideo) {
    video.hidden = false;
    poster.hidden = true;
    status.textContent = 'Temukan kehidupan dan potensi Kamasi Satu melalui video profil. Tekan Putar untuk menonton.';
    video.parentElement.classList.add('hero__video-frame--available');
    video.addEventListener('error', showVideoPlaceholder);
    video.querySelectorAll('source').forEach((source) => source.addEventListener('error', showVideoPlaceholder));
  } else {
    showVideoPlaceholder();
  }

  panels.forEach((panel, index) => {
    panel.hidden = false;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabs[index].id);
    panel.tabIndex = 0;
  });

  function activate(index, moveFocus = false) {
    activeIndex = index;
    hero.classList.toggle('hero--video', index === 1);
    hero.setAttribute('aria-labelledby', index === 1 ? 'hero-video-title' : 'hero-title');
    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].inert = !selected;
      panels[tabIndex].setAttribute('aria-hidden', String(!selected));
    });
    if (index === 0) video.pause();
    updateViewportHeight();
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, index) => tab.addEventListener('click', () => activate(index)));
  tablist.addEventListener('keydown', (event) => {
    const current = tabs.indexOf(event.target);
    if (current < 0) return;
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - current;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    activate(next, true);
  });

  activate(0);
  tablist.hidden = false;
  updateViewportHeight();

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(updateViewportHeight);
    panels.forEach((panel) => resizeObserver.observe(panel));
  } else {
    window.addEventListener('resize', updateViewportHeight);
  }
}
