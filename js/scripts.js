$(document).ready(function(){

	$('a.soon').on('click', function(e) {
		e.preventDefault();
	});

	$('a.link_disabled').on('click', function(e) {
		e.preventDefault();
	});



	/**** common ****/
  /* header scroll event */
	let isHoveringGnb = false;

  $(window).scroll(function(){
    const nTop = $(this).scrollTop();
    if (nTop >= 100) {
      h_scroll_down();
    } else if (!isHoveringGnb) {
			h_scroll_up();
    }
  });

	/* search modal open/close */
	$('nav .icon .xi-search').click(function(){
		$('.search_modal').fadeIn();
		document.body.style.overflow = 'hidden';
	});
	$('.search_modal .close i').click(function(){
		$('.search_modal').fadeOut();
		document.body.style.overflow = 'auto';
	});

  /* gnb hover */
	for (let i=1;i<7;i++) {
		$(".gnb>li:nth-child("+i+")").mouseenter(function(){
			isHoveringGnb = true;
			$(".sub_0"+i).siblings('div').hide();
			$(".sub_0"+i).stop().fadeIn();
			h_scroll_down();
	
			$('header').mouseleave(function(){
				const nTop = $(window).scrollTop();
				if (nTop < 100) {
					h_scroll_up();
					$(".sub_0"+i).hide();
				}
			});
		});

		//close
		$(".sub_0"+i).mouseleave(function(){
			isHoveringGnb = false;
			$(this).hide();
		});
	}

  /* mobile menu */
	//open/close
	$('.header2 .icon .xi-bars.mobile').click(function(){
		$('.m_menu').show();
		document.body.style.overflow = 'hidden';
		$('.m_menu').css('overflow-y','scroll');
	});
	$('.m_menu .top .icon .close').click(function(){
		$('.m_menu').hide();
		document.body.style.overflow = 'auto';
		$('.m_menu').css('overflow','hidden');
	});
  //mobile category menu
	$('.m_menu .menu_left li').click(function(){
		$(this).siblings('li').removeClass('m_select');
		$(this).addClass('m_select');
	});
	$('.m_menu .menu_right > li > p').click(function(){
		$(this).children('i').toggleClass('xi-minus').toggleClass('xi-plus');
		$(this).siblings('ol').toggleClass('m_click');
	});
	//mobile menu category
	for (let i=1;i<8;i++) {
		$('.m_menu .menu_left li:nth-child('+i+')').click(function(){
			$('.m_menu .menu_right').hide();
			$('.m_menu .menu_right.m_sub_0'+i).show();
			//$('.m_menu .menu_right').hide();
			//$('.m_menu .m_sub_0'+i+')').show();
		});
	}
	//menu resize
  $(window).resize(function() {
		if ($("body").width() >= 1024) {
			$('.m_menu').hide();
			document.body.style.overflow = 'auto';
		} else {
			$('.sub').hide();
		}
  });

	$('.xi-globus'). click(function(){
		alert('글로벌 홈페이지 준비 중입니다.');
	});

	/* user quick menu open btn */
	$('.user_btn').click(function(){
		$('.user_menu').toggleClass('user_menu_up');
	});

	function showTab(index) {
    $('.tab_content').removeClass('active');
    $('.tab_button').removeClass('active');
    $('.tab_content').eq(index).addClass('active');
    $('.tab_button').eq(index).addClass('active');
  }

  function openPopup(index = 0) {
    $('#quick_modal').css('display', 'flex');
    showTab(index);
  }

  $('.tab_button').click(function(){
    const index = $(this).index();
    showTab(index);
  });

  $('.close_btn').click(function(){
    $('#quick_modal').hide();
  });

  $('.user_menu a').click(function(e){
    e.preventDefault();
    const tabIndex = parseInt($(this).data('tab'));
    openPopup(tabIndex);
  });



	/* function */
	//header scroll event function
	function h_scroll_down() {
		$('header').addClass('header_sr');
		$('nav a').addClass('nav_sr');
		$('.gnb .line').css({'background':'#085DA9'});
		$('.index_page .header2 .logo img').attr('src','img/logo_b.png');
		$('.sub_page .header2 .logo img').attr('src','../img/logo_b.png');
	}
	function h_scroll_up() {
		if (!isHoveringGnb) {
			$('header').removeClass('header_sr');
			$('nav a').removeClass('nav_sr');
			$('.gnb .line').css({'background':'#ffffff'});
			$('.index_page .header2 .logo img').attr('src','img/logo_w.png');
			$('.sub_page .header2 .logo img').attr('src','../img/logo_w.png');
		}
	}



	/**** sub.html ****/
	/* category click event */
	$('.sub_category > li').click(function(){
		$(this).children('ol').toggleClass('show');
		$(this).children('span').children('i').toggleClass('rotate');
	});

	$('.content .tab li').click(function(){
    const id=$(this).data('id');
    $(this).addClass('select').siblings().removeClass('select');
    $('.since_wrap .since').removeClass('active');
    $('.since_wrap .'+id).addClass('active');
  });

	/* board */
	const boardData = [
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:13, title:'이사회 개최(2025.04.11)', writer:'송윤민', date:'2025.04.03.', views:41 },
		{ num:12, title:'2025년 3월 이사회 회의록', writer:'송윤민', date:'2025.04.02.', views:85 },
		{ num:11, title:'이사회 개최(2025.03.27)', writer:'송윤민', date:'2025.03.18.', views:190 },
		{ num:10, title:'2025년 2월 이사회 회의록', writer:'정지운', date:'2025.02.24.', views:244 },
		{ num:9, title:'이사회 개최(2025.02.20)', writer:'최봉혁', date:'2025.02.11.', views:399 },
		{ num:8, title:'2025년 1월 이사회 회의록', writer:'최봉혁', date:'2025.01.20.', views:431 },
		{ num:7, title:'이사회 개최(2025.1.16)', writer:'최봉혁', date:'2025.01.07.', views:331 },
		{ num:6, title:'2024년 12월 이사회 회의록', writer:'최봉혁', date:'2024.12.24.', views:568 },
		{ num:5, title:'이사회 개최(2024.12.17)', writer:'최봉혁', date:'2024.11.28.', views:912 },
		{ num:4, title:'2024년 6월 이사회 회의록', writer:'최봉혁', date:'2024.06.28.', views:1070 },
		{ num:3, title:'2024년 4월 이사회 회의록', writer:'최봉혁', date:'2024.04.20.', views:1234 },
		{ num:2, title:'2024년 2월 이사회 회의록', writer:'최봉혁', date:'2024.02.19.', views:890 },
		{ num:1, title:'이사회 개최(2024.01.05)', writer:'최봉혁', date:'2024.01.05.', views:500 },
	];
	
	const rowsPerPage = 15;
	let currentPage = 1;
	
	function renderBoardPage(page) {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		const rows = boardData.slice(start, end)
			.map(row => `<tr><td>${row.num}</td><td>${row.title}</td><td>${row.writer}</td><td>${row.date}</td><td>${row.views}</td></tr>`).join('');
		$('#boardBody').html(rows);
	}
	
	function renderPagination() {
		const totalPages = Math.ceil(boardData.length / rowsPerPage);
		let buttons = '<button class="first"><i class="xi-angle-double-left"></i></button>';
		for (let i = 1; i <= totalPages; i++) {
			buttons += `<button class="page${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
		}
		buttons += '<button class="last"><i class="xi-angle-double-right"></i></button>';
		$('#pagination').html(buttons);
	}
	
	$(document).on('click', '.pagination .page', function() {
		const page = parseInt($(this).data('page'));
		currentPage = page;
		renderBoardPage(currentPage);
		renderPagination();
	});
	
	$(document).on('click', '.pagination .first', function() {
		currentPage = 1;
		renderBoardPage(currentPage);
		renderPagination();
	});
	
	$(document).on('click', '.pagination .last', function() {
		currentPage = Math.ceil(boardData.length / rowsPerPage);
		renderBoardPage(currentPage);
		renderPagination();
	});
	
	$(function() {
		renderBoardPage(currentPage);
		renderPagination();
	});



	/**** index.html ****/
	/* section 02 notice calendar*/

	/* notice tab */
	$('#sec_02 .category li[data-category="all"]').click();

	$('#sec_02 .left .title .icon').click(function(){
    $('#sec_02 .left .title ol').toggleClass('show');
  });

  $('#sec_02 .left .title ol li').click(function(){
    const type = $(this).data('type');
    const text = $(this).text();
    $('#title_text').text(text);
    $('#sec_02 .left .title ol').removeClass('show');

    if (type === 'notice') {
      $('#notice_list').show();
      $('#bidding_list').hide();
      $('#sec_02 .category').css('visibility', 'visible');
      $('#sec_02 .category').css('height', 'auto');
      $('#sec_02 .category li[data-category="all"]').click();
    } else {
      $('#notice_list').hide();
      $('#bidding_list').show();
      $('#sec_02 .category').css('visibility', 'hidden');
      $('#sec_02 .category').css('height', '0px'); // 공간 유지용
    }
  });

  $('#sec_02 .category li').click(function(){
    $('#sec_02 .category li').removeClass('select');
    $(this).addClass('select');
    const category = $(this).data('category');
    const $items = $('#notice_list li');
    $items.hide();

    let filtered = [];
    if (category === 'all') {
      filtered = $items.toArray();
    } else {
      filtered = $items.filter(`[data-category="${category}"]`).toArray();
    }

    // 최대 7개만 표시
    filtered.slice(0, 7).forEach(item => $(item).show());
  });

	/* section 05 counter animation */
	const $counters = $(".overview .number");
	
	const exposurePercentage = 100;
	const duration = 1000;

	const addCommas = true;

	function updateCounter($el, start, end) {
		let startTime;
		function animateCounter(timestamp) {
				if (!startTime) startTime = timestamp;
				const progress = (timestamp - startTime) / duration;
				const current = Math.round(start + progress * (end - start));
				const formattedNumber = addCommas ? current.toLocaleString() : current;
				$el.text(formattedNumber);
				
				if (progress < 1) {
						requestAnimationFrame(animateCounter);
				} else {
						$el.text(addCommas ? end.toLocaleString() : end);
				}
		}
		requestAnimationFrame(animateCounter);
	}

	$(window).scroll(function(){
		$counters.each(function() {
			const $el = $(this);
			if (!$el.data('scrolled')) {
					const rect = $el[0].getBoundingClientRect();
					const winHeight = window.innerHeight;
					const contentHeight = rect.bottom - rect.top;
					
					if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
							const start = parseInt($el.data("start"));
							const end = parseInt($el.data("end"));
							updateCounter($el, start, end);
							$el.data('scrolled', true);
					}
			}
		});
	});


});