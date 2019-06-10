  //Exibir Elemento 
$(document).ready(function(){
	$(".fechar").click(function(){
	  $("#modal-contato").hide(500);
	});
	$(".contato").click(function(){
	  $("#modal-contato").show(500);
	});
  });
function exibeElementoPorTag(tag){
	$(tag).show(500);
}
	
// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


// Scroll suave para link interno
$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

 // Este evendo é acionado após o carregamento da página
	var Start;
	
	function myFunction(){
		Start = setTimeout(showpage, 1200);
	}

	function showpage(){
		document.getElementById("#loading").style.display="none";
		document.getElementById("content").style.display="block";
	}
	// window.addEventListener("load", function(){
	// 	const loader = document.querySelector(".loading");
	// 	loader.className += " hidden";
	// });