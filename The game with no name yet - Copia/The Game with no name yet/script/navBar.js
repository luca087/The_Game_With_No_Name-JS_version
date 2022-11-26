$(function(){


    content = $("#div-content")

    content.load("home.html")

    $("#link-manual").on("click", function(){
        //./The game with no name yet - Copia/The Game with no name yet/manual.html
        content.load("manual.html")
    })
    $("#link-game").on("click",function(){
        content.load("game.html")
    })
    $("#link-home").on("click",function(){
        content.load("home.html")
    })
})