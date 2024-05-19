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

const result = $('p').removeAttr('class');

console.log(result[0]);

// ページを遷移させる
$('.location_href').click(function() {
  location.href = 'https://youtube.com/';
})

// ページ遷移する際にフェードアウトする
$('.fade_out').click(function() {
  if(confirm('このページから離れますか？')) {
    $(document.body).fadeOut("slow", function() {
      window.location.href = 'https://youtube.com/';
    });
  }
});

// フェードインしてページを表示
$(document).ready(function() {
    $(document.body).hide().fadeIn("slow");
});
