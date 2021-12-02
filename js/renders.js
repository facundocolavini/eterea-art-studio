

let renderProduct =  (objItem, nodeParent) => {
    //TOMAMOS EL NOMBRE Y LE SACAMOS LOS ESPACIOS PARA USARLO EN EL SRC DE LA FOTO */
    let imageName = objItem.name.toUpperCase().replaceAll(' ', '-');
    //ESTRUCTURA BASICA DE PRODUCTO
    let $product = $(
        `
            <div class="card-product" subcategory="${objItem.category}">
                <div class="card-img">
                    <img src="../assets/images/products/${imageName}.png" alt="${objItem.name}" />
                </div>
                <div class="card-description">
                    <h2>${objItem.name}</h2>
                    <p>${objItem.description}</p>
                    <a class="card-btn" href="#">Consultar stock</a>
                </div>
            </div>
        `
    )

    $product.appendTo(nodeParent);
    $(nodeParent).append($product).hide().fadeIn(400);
}

function renderConditional (arrData, nodeParent, nodeError) {
    if(arrData.length > 0){
        for(const product of arrData){
            $('.product-not-found').remove();
    
            renderProduct(product,nodeParent);
        }
    }else{
        $('.products').prepend(nodeError);
    }
}

export {renderConditional , renderProduct};