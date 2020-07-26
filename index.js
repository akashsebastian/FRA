$(document).ready(function () {
  var len = 5;
  for (i = 0; i < len; i++) {
    $('<div id="addedDiv_num' + i + '" />')
      .text("Div number:  " + i)
      .appendTo(".body_container");
  }
});
