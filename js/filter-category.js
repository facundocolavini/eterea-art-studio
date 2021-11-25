import data from './products.js';
$(document).ready(function() {

    //Variables 

   $('.category-item').click(function() {
        //FILTRADO DE PRODUCTO POR CATEGORIA
        let catProduct = $(this).attr('subcategory');
        console.log(catProduct,'productos');
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
     
    })
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
                console.log(t.classList.contains("filter-legend--down"));
                    setTimeout(()=> {
                        $(this).children('.filter-legend').removeClass('filter-legend--down');
                        $(this).children('.filter-legend').addClass('filter-legend--up');
                        $(`.categorys-lists[category="${sectionCategory}"]`).slideUp('fast');
                    }
                ,30);
            }     
        }); 
    }
  
    rotate()
    let containerProducts = document.querySelector(".products");
    //Carga de productos
     const renderProducts = () =>{
        containerProducts.innerHTML = '';
        data.map(itemCart =>{
/*             let cardProduct = document.createElement('div');
            cardProduct.classList.add("cart-product");
            cardProduct.setAttribute('subcategory', itemCart.category); */
            let imageName = itemCart.name.toUpperCase().replaceAll(' ', '-');
           /*  console.log(imageName); */
            const content = 
                `
                <div class="card-product" subcategory="${itemCart.category}">
                    <div class="card-img">
                        <img src="../assets/images/products/${imageName}.png" alt="${itemCart.name}" />
                    </div>
                    <div class="card-description">
                        <h2>${itemCart.name}</h2>
                        <p>${itemCart.description}</p>
                        <a class="card-btn" href="#">Consultar stock</a>
                    </div>
                    </div>
                `;
       /*      cardProduct.innerHTML = content */;
            containerProducts.innerHTML += content;
     /*        containerProducts.append(content); */
           
        })
    }
    renderProducts();
    
});

