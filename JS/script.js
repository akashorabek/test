$(document).ready(function(){

$('.product_slider_item').slick({
    arrows: false,
    dots: true,
    
})

$('.header_catalog').click(function(){
    $('.header_catalog .fas.fa-angle-down').toggleClass('active');
    $('.catalog_window').toggleClass('show');
});

$('.catalog_filter_item').click(function(){
    $(this).find('.catalog_filter_inner').fadeToggle(200);
});

$('#first_tab').click(function(){
    $(this).addClass('active');
    $('#second_tab').removeClass('active');
    $('#first_des').addClass('active');
    $('#second_des').removeClass('active');
});
$('#second_tab').click(function(){
    $(this).addClass('active');
    $('#first_tab').removeClass('active');
    $('#first_des').removeClass('active');
    $('#second_des').addClass('active');
});

$('.product_details_map').click(function(){
    $('.modal').first().addClass('active');
    $('body').addClass('lock');
});
$('.modal_window .fas.fa-times').click(function(){
    $('.modal').first().removeClass('active');
    $('.modal.order').removeClass('active');
    $('body').removeClass('lock');
});

$('.zakaz_click').click(function(){
    $('.modal.order').addClass('active');
    $('body').addClass('lock');
});
$('.order_product').click(function(){
  $('.modal.order').addClass('active');
  $('body').addClass('lock');
});
$('.do_order').click(function(){
    $('.modal_window.order').hide();
    $('.modal_window.thanks').addClass('active');
});

$('.catalog_left_item:nth-child(1)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(1)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(1)').hide();
});
$('.catalog_left_item:nth-child(2)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(2)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(2)').hide();
});
$('.catalog_left_item:nth-child(3)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(3)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(3)').hide();
});
$('.catalog_left_item:nth-child(4)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(4)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(4)').hide();
});
$('.catalog_left_item:nth-child(5)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(5)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(5)').hide();
});
$('.catalog_left_item:nth-child(6)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(6)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(6)').hide();
});
$('.catalog_left_item:nth-child(7)').click(function(){
    $(this).addClass('current');
    $('.catalog_left_item').not(this).removeClass('current');
    $('.gadgets_catalog:nth-child(7)').show();
    $('.gadgets_catalog').not('.gadgets_catalog:nth-child(7)').hide();
});

$('.catalog_brand_click').click(function(){
    $('.catalog_brand i').toggleClass('active');
    $('.catalog_brand_inner').fadeToggle(150);
});

$(window).scroll(function(){
    var sticky = $('.product_details_img'),
        scroll = $(window).scrollTop();

    if (scroll >= 260 && scroll <= 850) {
        sticky.addClass('fixed');
    } else if(scroll <= 260) {
        sticky.removeClass('fixed');
    } else if(scroll >= 850) {
        sticky.removeClass('fixed');
        sticky.addClass('absolute');
    } if (scroll <= 260) {
        sticky.removeClass('fixed');
    }  else if(scroll <= 850) {
        sticky.addClass('fixed');
        sticky.removeClass('absolute');
    }
   
});
}); 