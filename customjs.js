$(document).ready(function() {
    $('#continue-button').on('click', function() {
        $('.slide-me-1').fadeOut(function() {
            $('.slide-me-2').fadeIn();
        });
    });
});