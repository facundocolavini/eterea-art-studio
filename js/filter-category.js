$(document).ready(function() {
   console.log('Todo ok'); 
   $('.category-item').click(function() {
        //FILTRADO DE PRODUCTO POR CATEGORIA
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        //OCULTAR PRODUCTOS
        $('.product-item').css('transform','scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } 
        setTimeout(hideProduct,400);
        //MOSTRAR PRODUCTOS DE LA CATEGORIA SELECCIONADA
        function showProduct(){
            $(`.product-item[category="${catProduct}"]`).show(); 
            $(`.product-item[category="${catProduct}"]`).css('transform','scale(1)');
        } setTimeout(showProduct,400);
     
    })
    //MOSTRAR TODAS
    
    $('.category-item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform','scale(1)');
        } setTimeout(showAll,400);
    })
});
