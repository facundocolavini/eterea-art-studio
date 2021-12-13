import { renderConditional } from "./renders.js";

function searchProduct (arr,errorSearch) {
    $('.input-search').keyup((e) =>{
        const searchString = e.target.value.toUpperCase();
        const searchProd= arr.filter((prod)=>{
            return (
                prod.name.toUpperCase().includes(searchString) 
            )
        })

    if(searchProd.length === 0){
        $('.card-product').remove();
        $('.products').prepend(errorSearch);
    }else{
        $('.products').html('');
        renderConditional(searchProd,$('.products'),$('.product-not-found'));
    }
        $('.category-item').focus(()=>{
            $('.products').html('');
            $('.input-search').val('');
            $('.products').prepend(renderConditional(arr,$('.products'),$('.product-not-found'))).hide().fadeIn(500);
        })
    })
}

export default searchProduct;