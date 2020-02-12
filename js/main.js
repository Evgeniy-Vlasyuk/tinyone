$(function() {
  $('form').submit(function() {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function() {
      alert('Thank you for your request, we will contact you soon!');
      setTimeout(function() {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});