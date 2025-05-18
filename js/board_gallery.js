$(function(){

  let filteredData = boardData;
  let currentPage = 1;
  const itemsPerPage = 15;

  function renderList(){
    const start = (currentPage-1)*itemsPerPage;
    const end = start+itemsPerPage;
    const list = filteredData.slice(start,end);

    const html = list.map(item=>`
      <div class="item">
        <img src="../img/sub/${item.img}" alt="${item.title}">
        <div class="text">
          <h3>${item.title}</h3>
          <p class="meta">작성자: ${item.writer} | 조회수: ${item.views} | 등록일: ${item.date}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
    $('.board_list').html(html);
  }

  function renderPagination(){
    const totalPage = Math.ceil(filteredData.length/itemsPerPage);
    let html = '';
    for(let i=1;i<=totalPage;i++){
      html += `<button class="${i===currentPage?'active':''}" data-page="${i}">${i}</button>`;
    }
    $('.board_page').html(html);
  }

  function update(){
    renderList();
    renderPagination();
  }

  $('.board_tabs').on('click','.tab',function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
    const category = $(this).data('category');
    currentPage = 1;
    if(category==="all") filteredData = boardData;
    else filteredData = boardData.filter(d=>d.category===category);
    update();
  });

  $('.board_page').on('click','button',function(){
    currentPage = Number($(this).data('page'));
    update();
  });

  $('.board_search .search_btn').on('click',function(){
    const keyword = $('.search_input').val().toLowerCase();
    filteredData = boardData.filter(d=>
      d.title.toLowerCase().includes(keyword) ||
      d.desc.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    update();
  });

  update();

});
