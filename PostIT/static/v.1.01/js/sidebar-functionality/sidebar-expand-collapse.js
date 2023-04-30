$('#right-sidebar-toggle').click(function() {
    $('.sidebar-right').css('width', '700px');
    $('#sidebar-right-blocker').show();
    $('.sidebar-right').addClass("sidebar-expanded");
})
$('#sidebar-right-blocker').click(function() {
    $('.sidebar-right').css('width', '0');
    $('#sidebar-right-blocker').hide();
    $('.sidebar-right').removeClass("sidebar-expanded");
})