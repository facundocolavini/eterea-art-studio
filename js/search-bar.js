import data from './products.js';

$(document).ready(function() {
    let containerProducts = document.querySelector(".products");
    const renderProducts = (arr) =>{
        containerProducts.innerHTML = '';
        arr.map(itemCart =>{
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
            /* cardProduct.innerHTML = content; */
            containerProducts.innerHTML += content;
           /*  containerProducts.append(content); */
           
        })
    }
    console.log('Todo ok'); 
    console.log(data, 'data');

    let $productsNotFound = $(`
        <div class="card-product"><p>Producto no encontrado...</p></div>
    `);
    // Search bar
    $('.input-search').keyup((e) =>{
        const searchString = e.target.value.toUpperCase();
        console.log(searchString);
        const searchProd= data.filter((prod)=>{
            return (
                prod.name.toUpperCase().includes(searchString) 
            )
        })
      console.log(searchProd,'BUSQUEDA')
        if(searchProd.length === 0){
            renderProducts(data);
        }else{
      
            renderProducts(searchProd);
        }
    }).fadeIn('fast');

});