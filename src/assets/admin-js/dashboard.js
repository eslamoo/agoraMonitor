
$(document).ready(function(){
    
    // trigger fancybox 
    $("[data-fancybox]").fancybox({
		baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
            '<div class="fancybox-inner">' +
                '<div class="fancybox-infobar">' +
                    '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
                    '<div class="fancybox-infobar__body">' +
                        '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
                    '</div>' +
                    '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
                '</div>' +
                '<div class="fancybox-toolbar">' +
                    '{{BUTTONS}}' +
                '</div>' +
                '<div class="fancybox-navigation">' +
                    '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left"><i class="fa fa-angle-right" aria-hidden="true"></i></button>                    ' +
                    '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>                    ' +
                '</div>' +
                '<div class="fancybox-stage"></div>' +
                '<div class="fancybox-caption-wrap">' +
                    '<div class="fancybox-caption"></div>' +
                '</div>' +
            '</div>' +
        '</div>'
	});

    // toggle filters boxes
   
});




    


  