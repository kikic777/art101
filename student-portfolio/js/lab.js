$('.button').on('click', function() {
    var targetText = $('#' + $(this).attr('id').replace('Button', 'Text'));
    if (targetText.is(':visible')) {
        targetText.slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        targetText.slideDown('slow');
    }
});

$('img.lazy-load').each(function() {
    $(this).attr('src', $(this).data('src'));
    $(this).on('load', function() {
        $(this).removeClass('lazy-load');
    });
});