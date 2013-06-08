$(document).ready(function(){
	$(".has-tooltip").tooltip('hide');
	$.stellar();
	$("#button-1").bind("click", function(){
		$.scrollTo("#id-card-container",  {duration:1500, easing:'easeOutBack'});
	});

	$("#button-2").bind("click", function(){
		$.scrollTo("#first-year-container",  {duration:1500, easing:'easeInOutBack'});
	});

	$("#button-3").bind("click", function(){
		$.scrollTo("#discover-container",  {duration:1500, easing:'easeInOutBack'});
	});

	$("#button-4").bind("click", function(){
		$.scrollTo("#son-container",  {duration:1500, easing:'easeInOutBack'});
	});

	$("#button-5").bind("click", function(){
		$.scrollTo("#skill-container",  {duration:1500, easing:'easeInOutBack'});
	});

	$("#button-6").bind("click", function(){
		$.scrollTo("#network-container",  {duration:1500, easing:'easeInOutBack'});
	});

	//RANDOM SENTENCE ON TOP
	var facts = [
		"J'aime bien l'impro",
		"Mon papa s'apelle Bertrand",
		"Ma maman s'apelle Corinne",
		"Je cuisine très bien le Curry de Poulet",
		"Je sait préparer de supers galettes bretonnes",
		"L'année prochaine, je serais à Télécom Paris",
		"Quand j'étais petit, je réclamais mes petits pois coupés en deux et épluchés",
		"J'ai lu le 7ème Harry Potter le jour de sa sortie en Anglais. Ca m'a pris 15 heures, d'une traite",
		"Je joue de la guitare Folk (C'était nécessaire pour avoir 14 ans, l'examinateur était intransigeant)",
		"J'ai une phobie des abeilles depuis que mon frère (à 4 ans) a tapé dans une ruche",
		"J'étais respo-com du JTX (Journal Télé de l'X)",
		"Mon jeux vidéo préféré du moment c'est Borderlands 2",
		"J'ai été opéré de l'appendicite à 8 ans",
		"Je suis allé en Afrique du Sud lorsque j'avais 9 ans",
		"Je suis plutôt Mac que PC, et j'ai même essayé Linux",
		"J'étais vice-président du binet Karaoké",
		"J'étais président du binet Breizh",
		"J'ai fait mon stage militaire à Abu Dhabi",
		"Je me suis promené sur le pont du Charles de Gaulles et j'ai vu les avions décoller de près",
		"J'ai jamais, jamais réussi à faire monter une mayonnaise",
		"Mon numéro de sécurité social commence par un 1",
		"Petit, j'avais enregitré tous les épisodes de C'est pas Sorcier",
		"Je n'arrive pas à garder un accent sur scène. Ca se termine invariablement en un russo-gabonais standard",
		"Quand j'étais petit, j'avais un chien qui s'appelait dabelyou (W)",
		"J'ai déjà fait du 4x4 dans le désert",
		"Mon numéro de téléphone est le 06.76.34.33.10",
		"Ma personne préféré, c'est <a href='http://facebook.com/profile.php?=14927381'> elle </a>",
		"Il est exactement 00:20 et 57 secondes",
		"J'ai deux cousines qui sont demi-soeur, mais également cousines entre elles",
		"Un jour, je crois que j'ai croisé Fredj dans le métro, mais j'étais pas sur",
		"Si on prend toutes les lettres de mon prénom et qu'on les mélange fort, ca donne On/Off",
		"Petit, j'ai vécu un an à Nantes",
		"Cette vidéo est plutôt sympa : <a href='http://www.goldenmoustache.com/videos/gm-creation/suricate-les-metiers-invisibles/'> Les métiers Invisibles </a>",
		"En ce moment, je lit le dernier Terry Pratchett",
		"J'ai plus grand chose à raconter",
		"Je suis nul en orthografe",
	]

	var current_fact = facts[Math.floor(Math.random()*facts.length)];
	$("#did-you-know").html(current_fact)


	//QUALITY AND DEFAULT
	var checkbox_items_true = [
		"Présence : ",
		"Energie : ",
		"Organisation : ",
		"Volonté : ",
		"Militaire :"
		]
	var checkbox_items_false = [
		"Orthographe : ",
		"Capacité à se taire au moment opportun : ",
		"Style Vestimentaire : ",
		"Humilité : ",
		"Rolex : ",
	]

	checkbox_items_true.sort( function() { return 0.5 - Math.random() } );
	checkbox_items_false.sort( function() { return 0.5 - Math.random() } );

	for(var i = 1 ; i < 5 ; i++){
		var checked = Math.random() > 0.5 ;
		var property = "";
		if(checked){
			property = checkbox_items_true[i];
			$("#checkbox-"+i).attr("checked", "checked");
		} else {
			property = checkbox_items_false[i];
		}
		$("#checkbox-label-"+i).html(property);
	}

	//PROGRESS

	var progress_items = [
		"Cuisine ",
		"Guitare",
		"Humour",
		"Mime de la pelle",
		"Gout du Risque",
		"Gnou",
		"Humeur du moment",
		"Accent Québécois",
		"Compte en banque",
		"Taille",
		"Taux de nitrates dans le sang",
		"Taux d'alcoolisation",
	];

	progress_items.sort(function() {return 0.5 - Math.random() });

	for(var i = 1 ; i < 5 ; i++){
		var p = Math.floor(Math.random(0) * 80 + 10) ;
		$("#progress-label-"+i).html(progress_items[i]);
		$("#progress-"+i).attr("style","width:"+p+"%;");
	}

	//SICK ANIMATIONS

	$("#id-card").css("opacity" )
	jQuery('#id-card-container').focus(function() {
	  $("#id-card").animate("op")
	});

})

