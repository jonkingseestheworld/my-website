//refresh page on browser resize
  $(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    location.reload(); /* false to get page from cache */
  }, 200);  
  });    

