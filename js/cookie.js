$(document).ready(function () {
  // 페이지 로드 시 쿠키 확인
  if ($.cookie('popupCookie') === 'none') {
      $('.pop').addClass('pop_close'); // 팝업 닫기
      $('header').addClass('pop_close');
      $('.wrap').addClass('pop_close');
      $('#popup_ck').prop('checked', true); // 체크박스도 체크된 상태로 유지
  }

  // 팝업 버튼 클릭 이벤트
  $('.popup_btn').click(function () {
      $('.pop').toggleClass('pop_close');
      $('header').toggleClass('pop_close');
      $('.wrap').toggleClass('pop_close');
  });

  // "오늘 하루 안 보기" 체크 이벤트
  $('#popup_ck').change(function () {
      if ($(this).is(":checked")) {
          $.cookie('popupCookie', 'none', { expires: 1, path: '/' }); // 쿠키 저장 (1일 유지)
      } else {
          $.removeCookie('popupCookie', { path: '/' }); // 쿠키 삭제
      }
  });
});