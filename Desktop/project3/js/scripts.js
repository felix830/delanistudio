$(document).ready(function() {
    $(".whatwedo .col-sm").click(function(){
        $(this).find("div.visible-desc").slideToggle();
        $(this).find("div.hidden-desc").slideToggle();
    });

    //creating hover
    $("#portfolio .col-md-3").hover(function(){
        $(this).find(".hidden-text").css("display", "flex");
    },function(){
        $(this).find(".hidden-text").fadeOut();
    });
});
