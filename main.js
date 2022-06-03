$(document).ready(function () {

    // var $navborButton = $('navbar-button');


    var $item1 = $('.item1');
    var $item2 = $('.item2');
    var $item3 = $('.item3');
    var $schedulContainer1 = $('.schedule-container1');
    var $schedulContainer2 = $('.schedule-container2');
    var $schedulContainer3 = $('.schedule-container3');


    $item1.click(function() {
        $schedulContainer1.addClass('active');
        $schedulContainer2.removeClass('active');
        $schedulContainer3.removeClass('active');
    });

    $item2.click(function() {
        $schedulContainer2.addClass('active');
        $schedulContainer1.removeClass('active');
        $schedulContainer3.removeClass('active');
    });

    $item3.click(function() {
        $schedulContainer3.addClass('active');
        $schedulContainer1.removeClass('active');
        $schedulContainer2.removeClass('active');
    });



    $('.navbar-button').click(function() {
        $(this).toggleClass('active');
        $('.navbar-menu').toggleClass('active');
    });

    $('.home-btn').click(function() {
        $('.menu_home').addClass('active');
        $('.menu_about-me').removeClass('active');
        $('.menu_favorite').removeClass('active');
        $('.menu_schedule').removeClass('active');
    });

    $('.aboutme-btn').click(function() {
        $('.menu_about-me').addClass('active');
        $('.menu_home').removeClass('active');
        $('.menu_favorite').removeClass('active');
        $('.menu_schedule').removeClass('active');
    });

    $('.favorite-btn').click(function() {
        $('.menu_favorite').addClass('active');
        $('.menu_about-me').removeClass('active');
        $('.menu_home').removeClass('active');
        $('.menu_schedule').removeClass('active');
    });

    $('.schedule-btn').click(function() {
        $('.menu_schedule').addClass('active');
        $('.menu_about-me').removeClass('active');
        $('.menu_home').removeClass('active');
        $('.menu_favorite').removeClass('active');
    });

    


    /* 새로고침 */
   var link = document.location.href.split("#").pop();

   if (link == "") {
       link = "menu_home";
   }
   else {
       link = "menu_" + link;
   }
    if(link == "menu_home" ) {
        $('.menu_home').addClass('active');
    } 

    if(link == "menu_about-me" ) {
        $('.menu_home').removeClass('active');
        $('.menu_about-me').addClass('active');
    }

    if(link == "menu_favorite" ) {
        $('.menu_home').removeClass('active');
        $('.menu_favorite').addClass('active');
    }

    if(link == "menu_schedule" ) {
        $('.menu_home').removeClass('active');
        $('.menu_schedule').addClass('active');
    }

});
