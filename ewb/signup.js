$("#load").on("click", function(){
    $("#header").html(localStorage.getItem("header"));
    $("#footer").html(localStorage.getItem("footer"));
    alert("불러오기를 실행했습니다.");
    // afterLoadRemoveElement();
    // afterLoadCreateHome();
    // $(".home_div").each(function(i,e){
    //     dragElement(e);
    // })
    // afterLoadCreateLogin();
    // $(".login_div").each(function(i,e){
    //     dragElement(e);
    // })
    // afterLoadCreateUl();
    // afterLoadCreateLi();
    // $(".ul_div").each(function(i,e){
    //     dragElement(e);
    // })
    // $(".editable_div").each(function(i,e){
    //     dragElement(e);
    // })
    $("#header").attr("style",$("#header_style").val());
    $("#footer").attr("style",$("#footer_style").val());
    $("body")
    .css("margin-top",$("#save_margin").data("margint")+"px")
    .css("margin-bottom",$("#save_margin").data("marginb")+"px")
    .css("margin-left",$("#save_margin").data("marginl")+"px")
    .css("margin-right",$("#save_margin").data("marginr")+"px");
    $("input[type='button']")
    .css("font-size", $("#save_button").data("ftsize")+"px")
    .css("padding", $("#save_button").data("padding")+"px")
    .css("background-color", $("#save_button").data("bgcolor"))
    .css("color", $("#save_button").data("ftcolor"))
    .css("border-width",$("#save_button").data("bdwidth"))
    .css("border-color",$("#save_button").data("bdcolor"));
    $("input[type='text']")
    .css("font-size", $("#save_text").data("ftsize")+"px")
    .css("padding", $("#save_text").data("padding")+"px")
    .css("background-color", $("#save_text").data("bgcolor"))
    .css("color", $("#save_text").data("ftcolor"))
    .css("border-width",$("#save_text").data("bdwidth"))
    .css("border-color",$("#save_text").data("bdcolor"));
})