$("#call_me_block" ).click(function(){ 
    $("#callback-panel").slideToggle(); 
    $("#call_me_block").hide()
    $('#phone').val('');;
});

$("#close").click(function(){ 
    $("#call_me_block").show();
    $("#callback-panel").slideToggle();
});

$("#btn").click(function(){ 
    $("#open").slideToggle();
});

$("#btn1").click(function(){
    $(".main_text_about_block1").css({'display':'block'})
    $(".main_text_about_block2").css({'display':'none'})
})

$("#btn2").click(function(){
    $(".main_text_about_block1").css({'display':'none'})
    $(".main_text_about_block2").css({'display':'block'})
})

$("#phone").mask("+7 (999) 999-9999");
