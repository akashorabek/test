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

var d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
let product_item_js = d.querySelectorAll('.product_item_js');

// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'), // ID товара
      itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
      itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
 return false;
}

// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

// Открываем корзину со списком добавленных товаров
function openCart(e){
  var cartData = getCartData(), // вытаскиваем все данные корзины
      totalItems = '';
      // d.getElementById('increas_count').addEventListener('click',function(){
      //   cartData[items][2] += 1;
      // });
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    // totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      // totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        // totalItems += '<td>' + cartData[items][i] + '</td>';
        product_item_js[i].innerHTML = cartData[items][i];
        cartData[items][1] *= cartData[items][2];
        console.log(product_item_js[i]);
      }
        // totalItems += '</tr>';
    }
    // totalItems += '</table>';
    // cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В корзине пусто!';
  }

  return false;
}
openCart();
/* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});

});