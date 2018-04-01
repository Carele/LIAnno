window.onload = function() {
  var newText = $("#textToAnno").text().split(" ").join("</span> <span>");
  newText = "<span>" + newText + "</span>";

  $("#textToAnno").html(newText).find("span").click(function () {
    if ($(this).attr('class') == 'motin') {
      $(this).attr('class', 'motout');
    } else {
      $(this).attr('class', 'motin');
    }
  }).end();

  nextButton.onclick = function () {
    var selection = [];
    $(".motin").each(function () {
      selection.push($(this).text());
    });

    console.log(selection);
  };
}