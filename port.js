
function onClickMenu(){	document.getElementById("menu").classList.toggle("change");	document.getElementById("nav").classList.toggle("change");		document.getElementById("menu-bg").classList.toggle("change-bg");
}


$(document).ready(function() { 
$('a[href^="#"]').click(function() 
{ 
$('html, body').animate({ scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top }, 500); 
return false; 
}); 
});
 