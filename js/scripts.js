$(document).ready(function() {
    // $('.h-notification').on('click', function(e) {
    //     e.stopPropagation();
    //     $('.notification-container').fadeToggle(100);
    // });

    $('.settings-icon').on('click', function(e) {
        e.stopPropagation();
        $('.settings-dropdown').fadeToggle(100);
    });

    $('html').on('click', function() {
        // $('.notification-container').fadeOut(100);
        $('.settings-dropdown').fadeOut(100);
    });

    $('.table-filter-btn').on('click', function(e) {
        $('.table-filter-container').slideToggle();
    });

    $('.burger-menu').on('click', function(e) {
        $('.left-bar').css('left','0');
        showOverlay();
    });

    $('.overlay').on('click', function(e) {
        $('.left-bar').css('left','-100%');
        hideOverlay();
    });

    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1
    });

    $('.js-example-basic-single').on('select2:opening', function (e) {
        $(this).next('.select2-container').next('.select-label').addClass('active-label');
    });

    $('.js-example-basic-single').on('select2:closing', function (e) {
        if($(this).next('.select2-container').find('.select2-selection__rendered').attr('title')) {
        } else { 
            $(this).next('.select2-container').next('.select-label').removeClass('active-label');
        }
    });

    $(".full-size-xs").on('show.bs.modal', function (e) {
        if($('.modal-dialog').hasClass('big-w-modal')) {
            $('body').addClass('header-change');
        }
    });
    
    $("#success").on('show.bs.modal', function (e) {
        $("#exampleModalCenter").modal("hide");
        $('body').removeClass('header-change');
    });
    
    $("#success-delete-message").on('show.bs.modal', function (e) {
        $("#delete-notification").modal("hide");
    });
});

function showOverlay() {
    $('.overlay').css('opacity','1');
    $('.overlay').css('visibility','visible');
}
function hideOverlay() {
    $('.overlay').css('opacity','0');
    $('.overlay').css('visibility','hidden');
}

    