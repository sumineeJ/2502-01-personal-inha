$(function(){

  let filteredBasicData = boardBasicData;
  let currentPage = 1;
  const itemsPerPage = 15;

  function renderBasicList(){
    const start = (currentPage-1)*itemsPerPage;
    const end = start+itemsPerPage;
    
    // 1. 고정글 따로 빼기
  const fixedList = filteredBasicData.filter(d=>d.fix);
  const normalList = filteredBasicData.filter(d=>!d.fix);

  // 2. 고정글은 항상 위에 나오게
  const list = [...fixedList, ...normalList].slice(start, end);

  const html = list.map(item=>`
    <div class="row ${item.fix ? 'fixed' : ''}">
      <div class="text">${item.fix ? '[공지] ' : ''}${item.title}</div>
      <div class="meta">
        <span>${item.writer}</span>
        <span>${item.date}</span>
        <span>조회수 ${item.views}</span>
      </div>
    </div>
  `).join('');
  $('.board_basic .board_list').html(html);
}

  function renderBasicPagination(){
    const totalPage = Math.ceil(filteredBasicData.length/itemsPerPage);
    let html = '';
    for(let i=1;i<=totalPage;i++){
      html += `<button class="${i===currentPage?'active':''}" data-page="${i}">${i}</button>`;
    }
    $('.board_basic .board_page').html(html);
  }

  function updateBasic(){
    renderBasicList();
    renderBasicPagination();
  }

  $('.board_basic .board_tabs').on('click', '.tab', function(){
    $('.board_basic .tab').removeClass('active');
    $(this).addClass('active');

    const category = $(this).data('category');
    currentPage = 1;
    if(category === "all") {
      filteredBasicData = boardBasicData;
    } else {
      filteredBasicData = boardBasicData.filter(d => d.category === category);
    }
    updateBasic();
  });

  $('.board_basic .board_page').on('click','button',function(){
    currentPage = Number($(this).data('page'));
    updateBasic();
  });

  $('.board_basic .search_btn').on('click',function(){
    const keyword = $('.board_basic .search_input').val().toLowerCase();
    filteredBasicData = boardBasicData.filter(d=>d.title.toLowerCase().includes(keyword));
    currentPage = 1;
    updateBasic();
  });

  updateBasic();

});