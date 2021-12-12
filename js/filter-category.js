
function filterCategory(){
    //SACA EL SCROLL VERTICAL AL DARLE CLICK A UN FILTER
    $(window).scroll(function(event) {
        var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        window.scroll(0, scrollTop)

      });
    $('.category-item').click(function() {
        //FILTRADO DE PRODUCTO POR CATEGORIA
        let catProduct = $(this).attr('subcategory');
        //OCULTAR PRODUCTOS
        $('.card-product').css('transform','scale(0)');
        function hideProduct(){
            $('.card-product').hide();
        } 
        setTimeout(hideProduct,400);
        //MOSTRAR PRODUCTOS DE LA CATEGORIA SELECCIONADA
        function showProduct(){
            $(`.card-product[subcategory="${catProduct}"]`).show(); 
            $(`.card-product[subcategory="${catProduct}"]`).css('transform','scale(1)');
        } setTimeout(showProduct,400);
     
    });
    //MOSTRAR TODAS
    $('.category-item[subcategory="all"]').click(function(){
        function showAll(){
            $('.card-product').show();
            $('.card-product').css('transform','scale(1)');
        } setTimeout(showAll,400);
    })

    //ROTAR Y DESLIZAR SUBCATEGORIAS
    function rotate(){
        $(`.filter-fieldset`).click(function (e){
            let t = e.target;
            let sectionCategory = $(this).attr('category');
            
            setTimeout(()=> {
                $(this).children('.filter-legend').addClass('filter-legend--down');
                    $(`.categorys-lists[category="${sectionCategory}"]`).slideDown('fast');
                },
            30);
            if(t.classList.contains("filter-legend--down")){

                    setTimeout(()=> {
                        $(this).children('.filter-legend').removeClass('filter-legend--down');
                        $(this).children('.filter-legend').addClass('filter-legend--up');
                        $(`.categorys-lists[category="${sectionCategory}"]`).slideUp('fast');
                    }
                ,30);
            }     
        }); 
    }
    rotate();
}




  

export default filterCategory;