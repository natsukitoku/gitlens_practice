// id属性checkの要素がクリックされた場合
$(function() {
  $('#check').on('click', () => {
    // 名前の出力
    console.log('名前：' + $('[name="username"]').val());
  });
});