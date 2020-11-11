$(document).ready(function(){

$('.product_slider_item').slick({
    arrows: false,
    dots: true,
    
})

$('.header_catalog').click(function(){
    $('.catalog_inner').fadeToggle(200);
    $('.fas.fa-angle-down').toggleClass('active');
});

$(document).mouseup(function (e){ 
    let div = $(".catalog_inner"); 
    let icon =$('.fas.fa-angle-down');
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
        div.fadeOut(200); 
        icon.removeClass('active');
    }
});
});