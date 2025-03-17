/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    // /* start typed element */
    // //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    // var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    // $(".element").typed({
    //     strings: subElementArray,
    //     typeSpeed: 30,
    //     contentType: 'html',
    //     showCursor: false,
    //     loop: true,
    //     loopCount: true,
    // });
    // /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    // $('.templatemo-nav').singlePageNav({
    //     offset: $(".templatemo-nav").height(),
    //     filter: ':not(.external)',
    //     updateHash: false
    // });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    // Initialize WOW with an offset setting so the animations trigger earlier
    new WOW.init();
});

