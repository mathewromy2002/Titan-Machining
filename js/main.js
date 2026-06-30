document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('.email-link').forEach(function (link) {
    const user = link.getAttribute('data-user');
    const domain = link.getAttribute('data-domain');
    const address = user + '@' + domain;
    link.href = 'mailto:' + address;
    link.textContent = address;
  });
});
