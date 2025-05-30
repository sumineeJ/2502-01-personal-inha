$(document).ready(function(){
  /* calendar */
	const today = new Date();
	let selectedDate = new Date(today);
	let schedules = {
		"2025-01-02": ["2025-1학기 재입학 신청"],
		"2025-01-03": ["2025-1학기 재입학 신청"],
		"2025-01-09": ["전과 원서접수"],
		"2025-01-10": ["전과 원서접수"],
		"2025-01-15": ["전과시험"],
		"2025-01-21": ["전과 합격자 발표"],
		"2025-01-22": ["2025-1학기 다중전공 (복수/부/연계/융합전공) 신청", "2025-1학기 유급 신청", "2025-1학기 우선수강신청"],
		"2025-01-23": ["2025-1학기 다중전공 (복수/부/연계/융합전공) 신청", "2025-1학기 유급 신청", "2025-1학기 우선수강신청"],
		"2025-01-24": ["2025-1학기 유급 신청", "2025-1학기 우선수강신청"],
		"2025-02-01": ["2025-1학기 일반휴학 신청"],
		"2025-03-28": ["2025-1학기 일반휴학 신청"],
		"2025-02-07": ["2025-1학기 우선수강신청 결과 발표"],
		"2025-02-12": ["2025-1학기 본수강신청 (전공/교양필수)"],
		"2025-02-13": ["2025-1학기 본수강신청 (전공/교양필수)"],
		"2025-02-14": ["2025년 2월 학위수여식"],
		"2025-02-20": ["2025-1학기 본수강신청 (일반)"],
		"2025-02-24": ["2025-1학기 등록기간"],
		"2025-02-25": ["2025-1학기 등록기간"],
		"2025-02-26": ["2025년 8월 조기졸업 신청"],
		"2025-02-27": ["2025년 8월 조기졸업 신청"],
		"2025-03-03": ["2025-1학기 개강(개시)일"],
		"2025-03-07": ["2025-1학기 수강신청 변경"],
		"2025-03-28": ["2025-1학기 일반휴학 신청 마감(수업일수 1/4선)"],
		"2025-03-31": ["2025-1학기 수강포기"],
		"2025-04-21": ["2025-1학기 중간고사"],
		"2025-04-22": ["2025-1학기 중간고사"],
		"2025-04-23": ["2025-1학기 중간고사"],
		"2025-04-24": ["개교기념일"],
		"2025-04-25": ["개교기념 휴업일"],
		"2025-05-23": ["(수업일수 3/4선)"],
		"2025-05-26": ["2025학년도 하계 계절학기 수강신청", "2025-1학기 우수인재인증 신청"],
		"2025-05-27": ["2025학년도 하계 계절학기 수강신청", "2025-1학기 우수인재인증 신청"],
		"2025-06-09": ["2025-1학기 기말고사"],
		"2025-06-10": ["2025-1학기 기말고사"],
		"2025-06-11": ["2025-1학기 기말고사"],
		"2025-06-12": ["2025-1학기 기말고사"],
		"2025-06-13": ["2025-1학기 기말고사"],
		"2025-06-16": ["2025-1학기 보강주간"],
		"2025-06-17": ["2025-1학기 보강주간"],
		"2025-06-18": ["2025-1학기 보강주간"],
		"2025-06-19": ["2025-1학기 보강주간"],
		"2025-06-20": ["2025-1학기 보강주간"],
		"2025-06-23": ["2025학년도 하계 계절학기 수업"],
		"2025-06-24": ["2025학년도 하계 계절학기 수업"],
		"2025-06-25": ["2025학년도 하계 계절학기 수업"],
		"2025-06-26": ["2025학년도 하계 계절학기 수업"],
		"2025-06-27": ["2025학년도 하계 계절학기 수업"],
		"2025-07-09": ["2025-2학기 재입학 신청"],
		"2025-07-10": ["2025-2학기 재입학 신청"],
		"2025-07-23": ["2025-2학기 우선수강신청"],
		"2025-07-24": ["2025-2학기 우선수강신청"],
		"2025-07-25": ["2025-2학기 우선수강신청"],
		"2025-07-28": ["2025-2학기 다중전공(복수/부/연계/융합전공) 신청", "2025-2학기 유급 신청"],
		"2025-07-29": ["2025-2학기 다중전공(복수/부/연계/융합전공) 신청", "2025-2학기 유급 신청"],
		"2025-07-30": ["2025-2학기 유급 신청"],
		"2025-08-01": ["2025-2학기 일반휴학 신청"],
		"2025-09-26": ["2025-2학기 일반휴학 신청"],
		"2025-08-08": ["2025-2학기 우선수강신청 결과 발표"],
		"2025-08-13": ["2025-2학기 본수강신청(전공/교양필수)"],
		"2025-08-14": ["2025-2학기 본수강신청(전공/교양필수)"],
		"2025-08-20": ["2025-2학기 본수강신청(일반)"],
		"2025-08-22": ["2025년 8월 학위수여식"],
		"2025-08-25": ["2025-2학기 등록 기간"],
		"2025-08-26": ["2025-2학기 등록 기간"],
		"2025-08-27": ["2026년 2월 조기졸업 신청"],
		"2025-08-28": ["2026년 2월 조기졸업 신청"],
		"2025-09-01": ["2025-2학기 개강일"],
		"2025-09-05": ["2025-2학기 수강신청 변경"],
		"2025-09-26": ["2025-2학기 일반휴학 신청 마감(수업일수 1/4선)"],
		"2025-09-29": ["2025-2학기 수강포기"],
		"2025-10-20": ["2025-2학기 중간고사"],
		"2025-10-21": ["2025-2학기 중간고사"],
		"2025-10-22": ["2025-2학기 중간고사"],
		"2025-10-23": ["2025-2학기 중간고사"],
		"2025-10-24": ["2025-2학기 중간고사"],
		"2025-11-21": ["(수업일수 3/4선)"],
		"2025-11-24": ["2025학년도 동계 계절학기 수강신청", "2025-2학기 우수인재인증 신청"],
		"2025-11-25": ["2025학년도 동계 계절학기 수강신청", "2025-2학기 우수인재인증 신청"],
		"2025-12-08": ["2025-2학기 기말고사"],
		"2025-12-09": ["2025-2학기 기말고사"],
		"2025-12-10": ["2025-2학기 기말고사"],
		"2025-12-11": ["2025-2학기 기말고사"],
		"2025-12-12": ["2025-2학기 기말고사"],
		"2025-12-15": ["2025-2학기 보강주간"],
		"2025-12-16": ["2025-2학기 보강주간"],
		"2025-12-17": ["2025-2학기 보강주간"],
		"2025-12-18": ["2025-2학기 보강주간"],
		"2025-12-19": ["2025-2학기 보강주간"],
		"2025-12-22": ["2025학년도 동계 계절학기 수업"],
		"2025-12-23": ["2025학년도 동계 계절학기 수업"],
		"2025-12-24": ["2025학년도 동계 계절학기 수업"],
		"2025-12-25": ["2025학년도 동계 계절학기 수업"],
		"2025-12-26": ["2025학년도 동계 계절학기 수업"],
		"2025-12-27": ["2025학년도 동계 계절학기 수업"],
		"2025-12-28": ["2025학년도 동계 계절학기 수업"],
		"2025-12-29": ["2025학년도 동계 계절학기 수업"],
		"2025-12-30": ["2025학년도 동계 계절학기 수업"],
		"2025-12-31": ["2025학년도 동계 계절학기 수업"]
	};

	function generateYearMonthSelectors() {
			const yearSelect = $("#year");
			const monthSelect = $("#month");
			yearSelect.empty();
			monthSelect.empty();

			for (let y = today.getFullYear() - 5; y <= today.getFullYear() + 5; y++) {
					yearSelect.append(`<option value="${y}">${y}년</option>`);
			}
			for (let m = 0; m < 12; m++) {
					monthSelect.append(`<option value="${m}">${m + 1}월</option>`);
			}

			yearSelect.val(selectedDate.getFullYear());
			monthSelect.val(selectedDate.getMonth());
	}

	function generateCalendar() {
			let year = parseInt($("#year").val());
			let month = parseInt($("#month").val());
			let firstDay = new Date(year, month, 1).getDay();
			let lastDate = new Date(year, month + 1, 0).getDate();

			$("#calendar-body").empty();
			let row = $("<tr></tr>");
			for (let i = 0; i < firstDay; i++) {
					row.append("<td></td>");
			}

			for (let date = 1; date <= lastDate; date++) {
					let cell = $("<td></td>").text(date);
					let fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;

					if (fullDate === formatDate(today)) {
							cell.addClass("today");
					}
					if (fullDate === formatDate(selectedDate)) {
							cell.addClass("selected");
					}

					if (schedules[fullDate]) {
						cell.append('<div class="dot"></div>');
					}

					cell.click(function () {
							$(".selected").removeClass("selected");
							$(this).addClass("selected");
							selectedDate = new Date(year, month, date);
							updateSchedule();
					});

					row.append(cell);
					if ((firstDay + date) % 7 === 0) {
							$("#calendar-body").append(row);
							row = $("<tr></tr>");
					}
			}
			if (row.children().length > 0) {
					$("#calendar-body").append(row);
			}
	}

	function updateSchedule() {
		let formattedDate = formatDate(selectedDate);
		let month = selectedDate.getMonth() + 1; // 월 표시를 1월~12월로
		let day = selectedDate.getDate();

		// 선택한 날짜와 일정 출력
		$("#schedule-title").text(`${month}월 ${day}일 일정`);
		
		let scheduleList = schedules[formattedDate] || ["일정이 없습니다."];
    let scheduleHtml = scheduleList.map(schedule => `<p>${schedule}</p>`).join("");
    $("#schedule-text").html(scheduleHtml);
	}

	function formatDate(date) {
			return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}

	$("#year, #month").change(generateCalendar);
	$("#todayBtn").click(function () {
			selectedDate = new Date(today);
			$("#year").val(today.getFullYear());
			$("#month").val(today.getMonth());
			generateCalendar();
			updateSchedule();
	});

	generateYearMonthSelectors();
	generateCalendar();
	updateSchedule();
});