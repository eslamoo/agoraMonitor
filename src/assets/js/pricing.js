// import css files
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../scss/main.scss';
import '../scss/pricing.scss';
// import js files 
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

$(document).ready(function(){
    $('#accordion').on('shown.bs.collapse', function () {
        let icon = $("#accordion .show").prev(".card-header").find("i")
        icon.css("transform","rotate(0)");
      })
})

