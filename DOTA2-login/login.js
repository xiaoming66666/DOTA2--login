




// 定义一个索引
var index = 0;
// 【右侧按钮实现轮播下一项】
$('.arrow-right').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.slider li').eq(index).fadeOut(1500);
  // 找到当前的小点，样式恢复默认
  $('.controls a').eq(index).removeClass('active');
  index++;
  // 限制索引
  if (index > $('.slider li').length - 1) {
    index = 0;
  }
  // 下一个轮播项淡入显示
  $('.slider li').eq(index).fadeIn(1500);
  // 找到当前的小点，样式突出显示
  $('.controls a').eq(index).addClass('active');

});
// 【左侧按钮实现轮播上一项】
$('.arrow-left').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.slider li').eq(index).fadeOut(1500);
  // 找到当前的小点，样式恢复默认
  $('.controls a').eq(index).removeClass('active');
  index--;
  // 限制索引
  if (index < 0) {
    index = $('.slider li').length - 1;
  }

  // 下一个轮播项淡入显示
  $('.slider li').eq(index).fadeIn(1500);
});



// 自动轮播
var timer;
function autoPlay() {
  timer = setInterval(function(){
    $('.arrow-right').click();
  }, 2000)
}
autoPlay();









