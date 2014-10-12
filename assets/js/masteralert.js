jQuery(function($){
    // Check if alert has been closed
    if ($.cookie('alert-box') === 'closed') {
        $('.cooked').hide();
    }
    $('button.close, .alert-link').click(function(e) {
        // Hide the alert box
        $(this).parent().removeClass('in')
        // path: '/' -> valid for the whole site
        $.cookie('alert-box', 'closed', {path: '/'});
    });
});
