/** Floke site — SF Symbols–style stroke icons (no emoji) */
(function (global) {
  const S =
    'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

  const FLOKE_ICONS = {
    cultiva:
      '<svg ' +
      S +
      '><path d="M12 20V10"/><path d="M8 14c0-4 1.5-7 4-9 2.5 2 4 5 4 9"/><path d="M16 14c0-4-1.5-7-4-9"/></svg>',
    blip:
      '<svg ' +
      S +
      '><path d="M4 12h2"/><path d="M8 12h2"/><path d="M12 12h2"/><path d="M16 12h2"/><circle cx="12" cy="12" r="2"/></svg>',
    senza:
      '<svg ' +
      S +
      '><path d="M9 18V6l10-2v10"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/></svg>',
  };

  function setFlokeIcon(el, name) {
    const node = typeof el === 'string' ? document.getElementById(el) : el;
    if (!node || !FLOKE_ICONS[name]) return;
    node.classList.add('floke-icon-host');
    node.innerHTML = FLOKE_ICONS[name];
  }

  function initFlokeIcons(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-floke-icon]').forEach((el) => setFlokeIcon(el, el.getAttribute('data-floke-icon')));
  }

  global.FLOKE_ICONS = FLOKE_ICONS;
  global.setFlokeIcon = setFlokeIcon;
  global.initFlokeIcons = initFlokeIcons;
})(typeof window !== 'undefined' ? window : globalThis);
