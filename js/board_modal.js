$(document).ready(function(){

  const $modal = $('#researchModal');
  const $modalBody = $modal.find('.modal_body');

  // 리스트 클릭하면 모달 열기
  $('.research_list li').on('click', function(){
    const id = $(this).data('id');
    const data = researchData[id];

    if (!data) return;

    const activitiesList = data.activities.map(activity => `<li>${activity}</li>`).join('');

    $modalBody.html(`
      <h2>${data.title}</h2>
      <p><strong>전화:</strong> ${data.tel}</p>
      <p><strong>Fax:</strong> ${data.fax}</p>
      <p><strong>위치:</strong> ${data.location}</p>
      <h3>설립 목적</h3>
      <p>${data.purpose}</p>
      <h3>주요 활동 및 사업</h3>
      <ul>${activitiesList}</ul>
    `);

    $modal.css('display', 'flex').attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');
  });

  // 모달 닫기 함수
  function closeModal() {
    $modal.hide().attr('aria-hidden', 'true');
    $('body').css('overflow', 'auto');
  }

  // 닫기 버튼
  $('.close_btn').on('click', function(){
    closeModal();
  });

  // 바깥 클릭 시 닫기
  $modal.on('click', function(e){
    if ($(e.target).is($modal)) {
      closeModal();
    }
  });

  // ESC 키 눌렀을 때 닫기
  $(document).on('keydown', function(e){
    if (e.key === 'Escape' && $modal.css('display') === 'flex') {
      closeModal();
    }
  });

});