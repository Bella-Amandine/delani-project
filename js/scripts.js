$("document").ready(function() {

    $("#design-description-img").click(function() {
        $("#design-description-img").toggle();
        $("#design-description").toggle();
    });

    $("#design-description").click(function() {
        $("#design-description-img").toggle();
        $("#design-description").toggle();
    });

    $("#development-description-img").click(function() {
        $("#development-description-img").toggle();
        $("#development-description").toggle();
    });

    $("#development-description").click(function() {
        $("#development-description-img").toggle();
        $("#development-description").toggle();
    });

    $("#product-description-img").click(function() {
        $("#product-description-img").toggle();
        $("#product-description").toggle();
    });

    $("#product-description").click(function() {
        $("#product-description-img").toggle();
        $("#product-description").toggle();
    });

    $("#work1").hover(function(){
        $("#work1-heading").addClass("work-title-show")
        $("div#work1").addClass("work-section")
    },
    function(){
        $("#work1-heading").removeClass("work-title-show")
        $("div#work1").removeClass("work-section")
    });

    $("#work2").hover(function(){
        $("#work2-heading").addClass("work-title-show")
        $("div#work2").addClass("work-section")
    },
    function(){
        $("#work2-heading").removeClass("work-title-show")
        $("div#work2").removeClass("work-section")
    });

    $("#work3").hover(function(){
        $("#work3-heading").addClass("work-title-show")
        $("div#work3").addClass("work-section")
        $("#work3-img").addClass("work-img")
    },
    function(){
        $("#work3-heading").removeClass("work-title-show")
        $("div#work3").removeClass("work-section")
        $("#work3-img").removeClass("work-img")
    });

    $("#work4").hover(function(){
        $("#work4-heading").addClass("work-title-show")
        $("div#work4").addClass("work-section")
    },
    function(){
        $("#work4-heading").removeClass("work-title-show")
        $("div#work4").removeClass("work-section")
    });

    $("#work5").hover(function(){
        $("#work5-heading").addClass("work-title-show")
        $("div#work5").addClass("work-section")
    },
    function(){
        $("#work5-heading").removeClass("work-title-show")
        $("div#work5").removeClass("work-section")
    });

    $("#work6").hover(function(){
        $("#work6-heading").addClass("work-title-show")
        $("div#work6").addClass("work-section")
    },
    function(){
        $("#work6-heading").removeClass("work-title-show")
        $("div#work6").removeClass("work-section")
    });

    $("#work7").hover(function(){
        $("#work7-heading").addClass("work-title-show")
        $("div#work7").addClass("work-section")
    },
    function(){
        $("#work7-heading").removeClass("work-title-show")
        $("div#work7").removeClass("work-section")
    });

    $("#work8").hover(function(){
        $("#work8-heading").addClass("work-title-show")
        $("div#work8").addClass("work-section")
    },
    function(){
        $("#work8-heading").removeClass("work-title-show")
        $("div#work8").removeClass("work-section")
    });

    $("form").submit(function(event){
        event.preventDefault();
        var name = $("input#name").val();
        alert(name + "We have received your email.Thank you for reaching out to us ")
    })
    
})