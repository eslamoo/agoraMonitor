// import css files
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../scss/main.scss';
import '../scss/faq.scss';
// import js files 

import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';


$(document).ready(function(){
    // display faq answers
    $(".tab-pane .question").on("click",function(){
        var answer = $(this).next(".answer"); 
        if( answer.css("display") == 'none' ){
            $(this).css("fontWeight","700");
            answer.slideDown(200);
            $(this).children(".fa-caret-down").fadeOut(100);
            $(this).children(".fa-caret-up").fadeIn(100);
        }
        else{
            $(this).css("fontWeight","500");
            answer.slideUp(200);
            $(this).children(".fa-caret-down").fadeIn(100);
            $(this).children(".fa-caret-up").fadeOut(100);
        }
    });
});