
import dataAjax from './fetchData.js';
import searchProduct from './search-bar.js';
import {renderConditional, renderProduct} from './renders.js';
import filterCategory from './filter-category.js';
let products_data = [];
const url= '../js/products.json';





class Catalog {
    constructor(id,name,category,description,measures){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.measures = measures;

    }
}




let containerProducts = $(".products");
let productsNotFound = $(`<span class="product-not-found">Producto no encontrado...</span>`);




/* Request http */

/* GET PRODUCTS*/
//Loading Dom
$(()=>{
    dataAjax().then(res =>{

        //Solo aquí dentro tus datos estaran disponibles

         console.log(res);

        for(const prod of res){
            const product = new Catalog(prod.id,prod.name,prod.category,prod.description,prod.measures);
            products_data.push(product);
        }
        console.log(products_data);
        renderConditional(products_data,containerProducts,productsNotFound);
        searchProduct(products_data,productsNotFound);
        filterCategory();
        
    
    })
    .catch(err =>{console.log(err)});


   

})