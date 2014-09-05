jQuery(function($){
    // Check if alert has been closed
    if ($.cookie('alert-box') === 'closed') {
        $('.alert').hide();
    }
    $('button.close, .alert-link').click(function(e) {
        // path: '/' -> valid for the whole site
        $.cookie('alert-box', 'closed', {path: '/'});
    });
});
