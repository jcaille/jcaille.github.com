$(document).ready(function(){
	$(".skill").popover({html : true});
	var userLang = (navigator.language) ? navigator.language : navigator.userLanguage; 
	if(userLang == 'fr' || userLang == 'FR'){
		$("#classic-CV-download").attr("href", "CV/CV_Jean_Caille_FR.pdf");
	}
})