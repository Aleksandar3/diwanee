// Navigacija
$('#nav-button').click(function (e) {
    e.stopPropagation();
    $('nav ul').slideToggle(600);
});

$(window).trigger('resize');


