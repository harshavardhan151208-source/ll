// Small interactive helpers for the LL site
document.addEventListener('DOMContentLoaded',function(){
  // year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const isHidden = nav.style.display === '' || nav.style.display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
    });
  }
});
