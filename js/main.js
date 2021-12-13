
import dataAjax from './fetchData.js';
import searchProduct from './search-bar.js';
import {renderConditional, renderProduct} from './renders.js';
import filterCategory from './filter-category.js';
import filterFaqs from './filter-faqs.js';

let products_data = [];
let containerProducts = $(".products");
let productsNotFound = $(`<span class="product-not-found">Producto no encontrado...</span>`);
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


/* GET PRODUCTS*/
//Loading Dom
$(()=>{
    dataAjax().then(res =>{
        //Solo aquí dentro tus datos estaran disponibles
        for(const prod of res){
            const product = new Catalog(prod.id,prod.name,prod.category,prod.description,prod.measures);
            products_data.push(product);
        }
        renderConditional(products_data,containerProducts,productsNotFound);
        searchProduct(products_data,productsNotFound);
        filterCategory();
        filterFaqs();
    })
    .catch(err =>{console.log(err)});
})