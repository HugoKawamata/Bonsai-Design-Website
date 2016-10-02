/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        
        /* Check the location of each desired element */
        $('.info-cont').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight(),
                bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object - 150) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '20%',
                    'margin-right': '20%'
                }, 500);
            }
        });
    });
});