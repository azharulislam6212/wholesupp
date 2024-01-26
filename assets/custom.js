$(document).on('click', ".video-btn", function(e) {
    e.preventDefault();
    $(".video-popup-overlay,.video-popup-iframe-container,.video-popup-container,.video-popup-close").show();
    
    var srchref='',autoplay='',id=$(this).data('id');
    if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
    else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
    
    if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
    
    $(".video-popup-iframe").attr('src', srchref+id+autoplay);
    
    $(".video-popup-iframe").on('load', function() {
      $(".video-popup-container").show();
    });
  });
  
  $(".video-popup-close, .video-popup-overlay").on('click', function(e) {
    $(".video-popup-iframe-container,.video-popup-container,.video-popup-close,.video-popup-overlay").hide();
    $(".video-popup-iframe").attr('src', '');
  });


//  var flavours =  $('.flavours-item');

// flavours.each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
//       var selector =  $( this ).find('.select-item select');
//       var total_quantiy =0;
//       selector.on('selectric-change', function(event, element, selectric) {
//         total_quantiy += parseInt(element.value);
//         $('.quantity-count').text(total_quantiy);

//             console.log("event",total_quantiy);
//       });


// });

    var selector =  $('.select-item select');
   
      selector.on('change', function(index) {

        var total_quantiy = 0;

        $(".select-item select option:selected").each(function(){

          console.log("treess__",$(this).val());
     
          if($(this).val()){
          // total_quantiy = parseInt(total_quantiy) + (parseInt($(this).val()) || 0);
          total_quantiy += Number($(this).val());
          }

       });


  
       console.log("total_quantiy", total_quantiy);
       $('.quantity-count').text(total_quantiy);

       if($(this).val() > 0){
        // select-item
        $(this).parents('.select-item').find('input[name="quantity"]').val($(this).val());
       }else{
        $(this).parents('.select-item').find('input[name="quantity"]').val(0);
   
       }


      });




      $('.cart-trigger').on('click', function() {
        $('body').addClass('cartShow')
    })
    // $('.product-cart-wrap').on('click', function() {
    //     $('body').removeClass('cartShow')
    // })
   
    $('.product-cart-main-area').on('click', function(e) {
      e.stopPropagation()
  })




      function closeCart(e,el){
        e.preventDefault();
        $('body').removeClass('cartShow')
    }
    
    $(document).on("click",".product-cart-overlay",function(e) {
      e.preventDefault();
      $('body').removeClass('cartShow')
    });



  


      $(".add-to-cart-btn").on("click", function (e) {
        e.preventDefault();
        var items = [];
      $(".flavours-item.selected").each(function(){
        var quantity =   $(this).find('.select-item input[name="quantity"]').val();
        var id =   $(this).find('.select-item input[name="id"]').val();
        var selling_plan =  $('.flavours-items input[name="selling_plan"]').val();
        var object = {};
        if(selling_plan > 0){
           object = {
            'id': id,
            'quantity': quantity,
            "selling_plan" : selling_plan
           }
        }else{

           object = {
            'id': id,
            'quantity': quantity
           }

        }
        
         items.push(object);
       });

       let formData = {
        'items': items
       };

      //  console.log(formData);

          $.ajax({
            type: "POST",
            url: "/cart/add.js",
            dataType: "json",
            data: formData,
            success: function (e) {
                $("body").addClass("cartShow");
                get_cart_details();
            },
            error: "addToCartFail"
          });


      });


  

      function upgrader_sellingplan(e, el){
        e.preventDefault();
       
        var selling_plan =  $(el).closest('.cart-product__item').find('input[name="selling_plan"]').val();
        var upgrade_id =  $(el).closest('.cart-product__item').find('.item-count').data('id');
        var quantity =  $(el).closest('.cart-product__item').find('.item-count').val();

        
        // console.log("id", upgrade_id);
        // console.log("selling_plan", selling_plan);
        // console.log("quantity", parseInt(quantity));


        var data = { updates: {} };
        data.updates[upgrade_id] = '0';
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js',
          data: data,
          dataType: 'json',
          success: function(res) {
            var upgrade_data  = {
                  "id": upgrade_id,
                  "quantity": parseInt(quantity),
                  "selling_plan": selling_plan
                }
                $.ajax({
                  type: "POST",
                  url: "/cart/add.js",
                  dataType: "json",
                  data: upgrade_data,
                  success: function (e) {
               
                      get_cart_details();
                  },
                  error: "addToCartFail"
                });


          }
        });



  
      }





      function get_cart_details(){
        fetch("?section_id=cart-drawer")
          .then((response) => response.text())
          .then((cartData) => {

            var cart_html = $(cartData);
            var cart_items = $(".product-cart-wrap", cart_html);
            $(".product-cart-wrap").replaceWith(cart_items);
    
          });
      
          fetch("?section_id=header")
          .then((response) => response.text())
          .then((cartData) => {
            var cart_html = $(cartData);
    
            var cart_count = $(".cart-trigger dfn", cart_html);
            $(".cart-trigger dfn").replaceWith(cart_count);
    
          });
          
      
      };

      function change_qty($input){
        var variant_id= $($input).attr("data-id");
        var quantity= $($input).val();          
        var data = { updates: {} };
        data.updates[variant_id] = quantity;
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js',
          data: data,
          dataType: 'json',
          success: function(res) {               
            get_cart_details();
          }
        });
      };



      function increaseItem(e, el) {
        var $input = el.previousElementSibling;
        var value = parseInt($input.value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        $input.value = ('0' + value).slice(-2);            
        change_qty($input);
      }
      
      function decreaseItem(e, el) {
        var $input = el.nextElementSibling;
        var value = parseInt($input.value, 10);
        if (value > 1) {
            value = isNaN(value) ? 0 : value;
            value--;
            $input.value = ('0' + value).slice(-2);         
            change_qty($input);
        }
      }



      function itemRemove(e , el){
        e.preventDefault();
        var variant_id = $(el).attr('data-id');
       
        var data = { updates: {} };
        data.updates[variant_id] = '0';
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js',
          data: data,
          dataType: 'json',
          success: function(res) {
            get_cart_details();
          }
        });
            
}