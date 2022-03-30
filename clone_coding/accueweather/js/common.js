$(function() {
  $(".hamburger").click(function() {
    $(this).hide(); // $(".mobile.hamburger").hide();
    $(".mobile.close").show();
    
    $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화

    // var nav = $(".nav"); // 원본을 넣어버리면 원본이 훼손된다.
    var nav = $(".nav").clone();
    $("#mobile_menu").append(nav);
    $("#mobile_menu").show();

  });

  $(".close").click(function() {
    $(this).hide(); // $(".mobile.close").hide();
    $(".mobile.hamburger").show();
    
    $("#mobile_menu").hide();
  });
});

/* 브라우저 리사이징 될때 모바일 메뉴 보이는 버그 방지 */
$(window).resize(function () {
  var width = $(window).width();
  if (width >= 767) {
    if ($("#mobile_menu").is(":visible")) {
      $(".mobile.close").hide();
      $(".mobile.hamburger").show();
      $("#mobile_menu").hide();
    }
  }
});