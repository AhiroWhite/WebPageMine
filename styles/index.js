// Скрипт Корзины
let shopicon = function(){
    $('.shop-icon').hide(300);
    $('.shop-panel').show(1);
    $('.shop-panel').fadeTo(0,0).fadeTo(400,1);
}


let order;
let pricepoint1 = 0;
let pricepoint2 = 0;
let pricepoint3 = 0;
let pricepoint4 = 0;
let pricepoint5 = 0;
let priceall = 0;
var price1 = 0;
var price2 = 0;
var price3 = 0;
var price4 = 0;
var price5 = 0;
let point1 = function (name,price) {
    if(pricepoint1 == 0){
        $('.itemname1').text(name);
        $('.itemprice1').text(price + " руб.");
        pricepoint1 = 1;
        price1 = price;
        priceall = price1;
        $('.shop-item1').css('display','flex');
        $('.shop-item1').slideUp(0).slideDown(300);
        $('.shop-icon').css('background','#a15146');
        $('.shop-panel-order-itog').text(priceall + " руб.");
        $('.oplata').show(0);
        $('.oplata').slideUp(0).slideDown(300)
    }else{
        if(pricepoint2 == 0){
        $('.itemname2').text(name);
        $('.itemprice2').text(price + " руб.");
        $('.shop-item2').css('display','flex');
        $('.shop-item2').slideUp(0).slideDown(300);
        pricepoint2 = 1;
        price2 = price;
        priceall = price1 + price2;
        $('.shop-panel-order-itog').text(priceall + " руб.");
        }else{
            if(pricepoint3 == 0){
                $('.itemname3').text(name);
                $('.itemprice3').text(price + " руб.");
                $('.shop-item3').css('display','flex');
                $('.shop-item3').slideUp(0).slideDown(300);
                pricepoint3 = 1;
                price3 = price;
                priceall = price1 + price2 + price3;
                console.log(priceall);
                $('.shop-panel-order-itog').text(priceall + " руб.");
                 
            }else{
                if(pricepoint4 == 0){
                    $('.itemname4').text(name);
                    $('.itemprice4').text(price + " руб.");
                    $('.shop-item4').css('display','flex');
                    $('.shop-item4').slideUp(0).slideDown(300);
                    pricepoint4 = 1;
                    price4 = price;
                    priceall = price1 + price2 + price3 + price4;
                    console.log(priceall); 
                    $('.shop-panel-order-itog').text(priceall + " руб.");
                }else{
                    if(pricepoint5 == 0){
                        $('.itemname5').text(name);
                        $('.itemprice5').text(price + " руб.");
                        $('.shop-item5').css('display','flex');
                        $('.shop-item5').slideUp(0).slideDown(300);
                        pricepoint5 = 1;
                        price5 = price;
                        priceall = price5 + price1 + price2 + price3 + price4;
                        console.log(priceall); 
                        $('.shop-panel-order-itog').text(priceall + " руб.");
                    }else{
                        $('.shop-icon').hide(300);
                        $('.shop-panel').show(1);
                        $('.shop-panel').fadeTo(0,0).fadeTo(400,1);
                        $('#limit').text('* Лимит привышен');
                        $('#limit').css('color','red');
                        $('#limit').css('font-size','9px');
                    }
                }
            }
        }
    }
}

$('.shop-panel-order-itog').text(priceall);
// Скрипт подписки
let sub = function(){
    $('.sub').hide(300);
}
// Скрипт кнопки купить
$('.btn-add').click(function(){
    $(this).width(100);
    $(this).css('font-size','13px')
    $(this).removeClass('btn-add');
    $(this).text('В корзине');
    $(this).addClass('click');
})

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
        $('#show').attr("src","img/first1.jpg");
        $('.point').removeClass("point_active");
        $('.p1').addClass("point_active");
    }
    if(point == 2){
        $('#show').attr("src","img/first2.jpg");
        $('.point').removeClass("point_active");
        $('.p2').addClass("point_active");
    }
    if(point == 3){
        $('#show').attr("src","img/first3.jpg");
        $('.point').removeClass("point_active");
        $('.p3').addClass("point_active");
    }
    if(point == 4){
        $('#show').attr("src","img/first4.jpg");
        $('.point').removeClass("point_active");
        $('.p4').addClass("point_active");
    }
    if(point == 5){
        $('#show').attr("src","img/first5.jpg");    
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
       
        $('#show').attr("src","img/first1.jpg");
        $('.point').removeClass("point_active");
        $('.p1').addClass("point_active");
    }
    if(point == 2){
        
        $('#show').attr("src","img/first2.jpg");
        $('.point').removeClass("point_active");
        $('.p2').addClass("point_active");
    }
    if(point == 3){
       
        $('#show').attr("src","img/first3.jpg");
        $('.point').removeClass("point_active");
        $('.p3').addClass("point_active");
    }
    if(point == 4){
   
        $('#show').attr("src","img/first4.jpg");
        $('.point').removeClass("point_active");
        $('.p4').addClass("point_active");
    }
    if(point == 5){
     
        $('#show').attr("src","img/first5.jpg");    
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