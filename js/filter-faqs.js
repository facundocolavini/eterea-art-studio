function filterFaqs() {
    $('.accordion-item').click(function() {
        $(window).scroll(function(event) {
            var scrollLeft = $(window).scrollLeft();
            var scrollTop = $(window).scrollTop();
            window.scroll(0, scrollTop)

        });
    })

}

export default filterFaqs;
