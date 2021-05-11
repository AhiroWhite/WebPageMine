// Скрипт окна обратной связи
let  racallopen = function() {
    $('.recallbg').css('display','block');
    $('.recallbg').fadeTo(0,0).fadeTo(700,1);
}
let recalltimer = function(){
    $('.recallbg').css('display','none');
}
let recallclose = function(){
    $('.recallbg').fadeTo(700,0);
    setTimeout(recalltimer,700);
}
let recallnext = function(){
    $('.recall1').css('display','none');
    $('.recall2').css('display','block');
    $('.recall2').fadeTo(0,0).fadeTo(700,1);
}
// Скрипт плавного перехода по ссылкам
$("a[href^='#about']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
});
$("a[href^='#catalog']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
$("a[href^='#news']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
$("a[href^='#footer']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

// Скрипт переключение слайдов на show блоке
let point = 1;
var next = function(){
    if(point >= 1 && point < 6 ){
        point = point + 1;
        console.log(point);
    }
    if(point == 6){
        point = 1;
        console.log(point);
    }
    if(point == 1){
        $('#show').attr("src","img/png1.PNG");
        $('.point').removeClass("point_active");
        $('.p1').addClass("point_active");
    }
    if(point == 2){
        $('#show').attr("src","img/png2.png");
        $('.point').removeClass("point_active");
        $('.p2').addClass("point_active");
    }
    if(point == 3){
        $('#show').attr("src","img/png3.png");
        $('.point').removeClass("point_active");
        $('.p3').addClass("point_active");
    }
    if(point == 4){
        $('#show').attr("src","img/png4.png");
        $('.point').removeClass("point_active");
        $('.p4').addClass("point_active");
    }
    if(point == 5){
        $('#show').attr("src","img/png5.png");    
        $('.point').removeClass("point_active");
        $('.p5').addClass("point_active");
    }
}
var back = function(){
    if(point > 0 && point <= 5 ){
        point = point - 1;
        console.log(point);
    }
    if(point == 0){
        point = 5;
        console.log(point);
    }
    if(point == 1){
        $('#show').attr("src","img/png1.PNG");
        $('.point').removeClass("point_active");
        $('.p1').addClass("point_active");
    }
    if(point == 2){
        $('#show').attr("src","img/png2.png");
        $('.point').removeClass("point_active");
        $('.p2').addClass("point_active");
    }
    if(point == 3){
        $('#show').attr("src","img/png3.png");
        $('.point').removeClass("point_active");
        $('.p3').addClass("point_active");
    }
    if(point == 4){
        $('#show').attr("src","img/png4.png");
        $('.point').removeClass("point_active");
        $('.p4').addClass("point_active");
    }
    if(point == 5){
        $('#show').attr("src","img/png5.png");    
        $('.point').removeClass("point_active");
        $('.p5').addClass("point_active");
    }
}

// Скрипт расширить каталог

let show = function() {
        
        $('.catalog_hidded').css('display','flex');
        $('.catalog_hidded').slideUp(0).slideDown(1500);
        $('.showmore').fadeTo(300, 0);
        $('.hidemore').css('display','flex');
        $('.hidemore').fadeTo(0,0).fadeTo(1000,1);
}
let hide = function () {
    $('.catalog_hidded').slideUp(1500);
    $('.hidemore').hide(1500);
    $('.showmore').fadeTo(2000, 1);
}