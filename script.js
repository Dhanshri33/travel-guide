/*
  script.js
  - Smooth scroll for internal links
  - Set dynamic year in footer
  - Small DOM helpers kept minimal (no external libs)
*/

document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for same-page anchors
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      var target = link.getAttribute('href');
      if(target && target.length > 1){
        var el = document.querySelector(target);
        if(el){
          e.preventDefault();
          var top = el.getBoundingClientRect().top + window.pageYOffset - 66; // offset for navbar
          window.scrollTo({top: top, behavior: 'smooth'});
          // close responsive navbar when a link is clicked (mobile)
          var navCollapse = document.querySelector('.navbar-collapse');
          if(navCollapse && navCollapse.classList.contains('show')){
            var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            if(!bsCollapse){ bsCollapse = new bootstrap.Collapse(navCollapse, {toggle:false}); }
            bsCollapse.hide();
          }
        }
      }
    });
  });
});
