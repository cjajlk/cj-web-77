// Simple mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const hidden = nav.getAttribute('aria-hidden') === 'false' ? 'true' : 'false';
    nav.setAttribute('aria-hidden', hidden);
  });
  // Close on escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      btn.setAttribute('aria-expanded','false');
      nav.setAttribute('aria-hidden','true');
    }
  });
});
