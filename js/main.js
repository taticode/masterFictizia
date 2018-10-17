

//-------------IR A SECCIONES PPALES---------------------------------


$(".mainNav li").on("click" , iraSeccion ) ;

var aire = $(".mainHeader").height()  + 20;


function iraSeccion() {
	
	var $liPulsado = $(this) ;
	
	var numLiPulsado = $liPulsado.index() ;
	
	var $seccionDestino = $("main section").eq(numLiPulsado) ;
	
	var scrollTopDestino = $seccionDestino.offset().top - aire ;
		
	$("body,html").animate({ scrollTop: scrollTopDestino } , 600) ;

	$("#menuBtn").prop("checked", false);
}


$(".identidad").on("click" , irArriba ) ;

function irArriba() {
	
	$("body,html").animate({ scrollTop: 0 } , 600) ;
	
}


//---------------------PESTAÑAS---------------------------------
//
//var $todasLasTabs = $(".namesWrap li") ;
//var $todasLasSecciones = $(".productWrap article") ;
//
//
//
//$todasLasTabs.click( abrirSeccion ) ;
//
//function abrirSeccion() {
//	
//	var $tabPulsada = $(this) ;
//
//	$todasLasTabs.removeClass("current") ; 
//
//	$tabPulsada.addClass("current") ;
//    
//	var numTabPulsada = $(this).index() ;
//
//	var $seccionAbrir = $todasLasSecciones.eq( numTabPulsada ) ;
//	
//	$todasLasSecciones.stop().fadeOut(5) ;
//	
//	$seccionAbrir.fadeIn(5) ;
//	
//}


//------------------MOSTRAR PRIMERAS PESTAÑAS----------------

$(".coffee .namesWrap li:first").addClass("current").show();
$(".drinks .namesWrap li:first").addClass("current").show();
$(".sweet .namesWrap li:first").addClass("current").show();
$(".salty .namesWrap li:first").addClass("current").show();


$(".coffee .productWrap article:first").show();
$(".drinks .productWrap article:first").show();
$(".sweet .productWrap article:first").show();
$(".salty .productWrap article:first").show();


//--------------------------CAFE---------------------------

var $cafeTabs = $(".coffee .namesWrap li") ;
var $cafeSecciones = $(".coffee .productWrap article") ;



$cafeTabs.click( abrirCafe ) ;

function abrirCafe() {

	
	var $cafeTabPulsada = $(this) ;

	$cafeTabs.removeClass("current") ; 

	$cafeTabPulsada.addClass("current") ;
    
	var numTabCafePulsada = $(this).index() ;

	var $seccionCafeAbrir = $cafeSecciones.eq( numTabCafePulsada ) ;
	
	$cafeSecciones.stop().fadeOut(50) ;
	
	$seccionCafeAbrir.fadeIn(50) ;

	
}

//--------------------------BEBIDA---------------------------
var $bebidaTabs = $(".drinks .namesWrap li") ;
var $bebidaSecciones = $(".drinks .productWrap article") ;



$bebidaTabs.click( abrirBebida ) ;

function abrirBebida() {
    

    
	var $bebidaTabPulsada = $(this) ;

	$bebidaTabs.removeClass("current") ; 

	$bebidaTabPulsada.addClass("current") ;
    
	var numTabBebidaPulsada = $(this).index() ;

	var $seccionBebidaAbrir = $bebidaSecciones.eq( numTabBebidaPulsada ) ;
	
	$bebidaSecciones.stop().fadeOut(5) ;
	
	$seccionBebidaAbrir.fadeIn(5) ;

	
}

//--------------------------DULCE---------------------------


var $dulceTabs = $(".sweet .namesWrap li") ;
var $dulceSecciones = $(".sweet .productWrap article") ;

$dulceTabs.click( abrirDulce ) ;

function abrirDulce() {
	
	var $dulceTabPulsada = $(this) ;

	$dulceTabs.removeClass("current") ; 

	$dulceTabPulsada.addClass("current") ;
    
	var numTabDulcePulsada = $(this).index() ;

	var $seccionDulceAbrir = $dulceSecciones.eq( numTabDulcePulsada ) ;
	
	$dulceSecciones.stop().fadeOut(5) ;
	
	$seccionDulceAbrir.fadeIn(5) ;

	
}


//--------------------------BURGUER---------------------------

var $burguerTabs = $(".salty .namesWrap li") ;
var $burguerSecciones = $(".salty .productWrap article") ;



$burguerTabs.click( abrirBurguer ) ;

function abrirBurguer() {
	
	var $burguerTabPulsada = $(this) ;

	$burguerTabs.removeClass("current") ; 

	$burguerTabPulsada.addClass("current") ;
    
	var numTabBurguerPulsada = $(this).index() ;

	var $seccionBurguerAbrir = $burguerSecciones.eq( numTabBurguerPulsada ) ;
	
	$burguerSecciones.stop().fadeOut(5) ;
	
	$seccionBurguerAbrir.fadeIn(5) ;
	

}

































