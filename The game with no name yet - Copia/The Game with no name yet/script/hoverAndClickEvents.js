
function HideShow(elementRef){
    element = $(elementRef)
    
    if(element.css("display") == "none"){
        element.fadeIn()
    }else{
        element.fadeOut()
    }
}

//#img-inventory - click and hover
$("#img-inventory").on("click", function(){
    HideShow("#inventory")
})
$("#img-inventory").on("mouseover", function(){
    $("#img-inventory").attr({
        src: "./The game with no name yet - Copia/images/tenda-de-circo.png"
    })
})
$("#img-inventory").on("mouseleave", function(){
    $("#img-inventory").attr({
        src: "./The game with no name yet - Copia/images/tenda-de-circoEmpty.png"
    })
})
// - 
//#img-map-settings - click and hover
$("#img-map-settings").on("click", function(){
    HideShow("#map-settings")
})
$("#img-map-settings").on("mouseover", function(){
    $("#img-map-settings").attr({
        src: "./The game with no name yet - Copia/images/settingsBlack.png"
    })
})
$("#img-map-settings").on("mouseleave", function(){
    $("#img-map-settings").attr({
        src: "./The game with no name yet - Copia/images/settings.png"
    })
})
// - 
//.div-character - hover
$(".div-character").on("mouseover", function(){
    $(this).css({
        borderColor: "black",
        pointer: "default"
    })
    $(this).children("h3").css({
        textDecoration: "underline",
        pointer: "default"
    })
})
$(".div-character").on("mouseleave", function(){
    $(this).css({
        borderColor: "#829b86",
        cursor: "default"
    })
    $(this).children("h3").css({
        textDecoration: "none",
        cursor: "default"
    })
})
// - 