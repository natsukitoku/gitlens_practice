$(function() {
  $(".button").on("click", function() {
    $(".menu-box").slideToggle();
  });
});

$(function() {
  $(".tab").on("click", function() {
    var i = $(this).index();
    $(".box").removeClass("active");
    $(".box").eq(i).addClass("active");
  });
});

$(function() {
  $('select').change(function () {
    var text = $('option:selected').text();

    console.log(text);
  })
})

$(document).ready(function() {
$('p').attr('id', 'text');
const result = $('p').attr('id')

  console.log(result); 
});