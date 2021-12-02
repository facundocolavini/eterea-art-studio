function dataAjax( ) {
    return new Promise((res, rej) =>{
        $.ajax({
            type: "get",
            url: "../js/products.json",

            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                res(response);
            },
            error: function(error){
                rej(error);
            }
        })
    });
}

export default dataAjax;
