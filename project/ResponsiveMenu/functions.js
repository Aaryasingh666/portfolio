$(document).ready(function() {
        $('.menu-toggle').click(function() {
                //This one show me the menu bar in mobile view.
                $('nav').toggleClass('active')
                    //This one help me in the animation in mobile view.
                $('nav').toggleClass('animated fadeInDown')
            });
            //In this function .siblings() event/method help me dropdown automatically close when we select another.
        $('ul li').click(function() {
            $(this).siblings().removeClass('active');

            //in this function $(this).toggleClass('active'); help me active or seen/show me dropdown list items.
            $(this).toggleClass('active');
        })
    });
    // this function is used for menu toggle tranform in x.
function myFunction(x) {
    x.classList.toggle("change");
}