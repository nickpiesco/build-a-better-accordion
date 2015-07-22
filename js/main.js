$(function() {

  $('.js-list-toggle').click(function() {
    if ($(this).hasClass('list-open')) {
      $(this).removeClass('list-open')
        .next().attr('aria-expanded', 'false');
    } else {
      $(this).addClass('list-open')
        .next().attr('aria-expanded', 'true');
    }
  });

});
