var rowCalc = function () {
    $('.individualPrice').each(
        function () {
           let total = 0;
           let i = Number($(this).text()); 
           let qty = $(this).parent().next().find('.qty').val();
           total = i * qty;
           $(this).parent().next().next().children(0).text(total.toFixed(2));
        }
    );
}

$(document).ready(function() {

    //Initial Row Calculations
   rowCalc();

    //Delete items
   $('.container').on("click", ".delete", function () {
     $(this).parent().parent().remove();
   })

     //Update Cart row total price with quantity
   $(document).on('keyup', '.qty', function () {
      rowCalc();    
   })

   $(document).on('click', '.qty', function () {
      rowCalc();
   });

    //Calculate Total of Cart
    $(document).on("click", ".calculate", function () {
        grandTotal = 0;
        $('.total').each(
            function () {
               n= Number($(this).text()); 
               grandTotal += n;
            }
        );
        $('.totalCalc').text("$" + grandTotal.toFixed(2));
    });

   
    //Add Items
    $(document).on("click", ".create", function () {
        newItem = $(this).parent().prev().prev().children().val();
        newPrice = $(this).parent().prev().children().val();
        newPrice2 = Number.parseFloat(newPrice).toFixed(2);
        newRow = $('<div class="row"></div>');
        item = $('<div class="col-md-3 item"><p>'+ newItem + '</p></div>');
        price = $('<div class="col-md-3"><p class="individualPrice">'+ newPrice2 + '</p></div>');
        input = $('<div class="col-md-3"><label>QTY</label> <input type="number" value="1" class="qty"> <button class="delete">Delete</button></div>');
        newTotal = $('<div class="col-md-3"><p class="total">'+ newPrice2 +'</p></div>');
        $(newRow).append(item);
        $(newRow).append(price);
        $(newRow).append(input);
        $(newRow).append(newTotal);
        $('.mainCart').append(newRow);
        $(this).parent().prev().children(0).val("");
        $(this).parent().prev().prev().children(0).val('');

    });
    
      

}); 

 
  