

let renderProduct =  (objItem, nodeParent) => {
    //TOMAMOS EL NOMBRE Y LE SACAMOS LOS ESPACIOS PARA USARLO EN EL SRC DE LA FOTO */
    let imageName = objItem.name.toUpperCase().replaceAll(' ', '-');
    //ESTRUCTURA BASICA DE PRODUCTO
    let $product = $(
        `
            <div class="card-product" subcategory="${objItem.category}">
                <div class="card-img">
                    <img loading="lazy" src="../assets/images/products/${imageName}.png" alt="${objItem.name}" />
                </div>
                <div class="card-description">
                    <h2>${objItem.name}</h2>
                    <p class="card-text-desc">${objItem.description}</p>
                    <a class="card-btn" target="_blank" href="https://wa.me/+543816812682?text=Consultar%20stock%20de%20${objItem.name}%20${objItem.description}">Consultar</a>
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