
$(document).ready(function(){
    
    // load comments click
    $(".media-modal-comments .loadComments").on("click",function(){
        $(this).css("display","none");
        $(this).next(".comments-list").css("display","block")
    })
});