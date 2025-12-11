document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  btn && btn.addEventListener('click', ()=>{
    const isLight = root.classList.toggle('theme-light');
    btn.setAttribute('aria-pressed', String(isLight));
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  });
  const saved = localStorage.getItem('site-theme');
  if(saved === 'light') root.classList.add('theme-light');
});