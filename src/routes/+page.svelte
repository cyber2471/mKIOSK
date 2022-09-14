
<script context="module">
 
 import { request, gql } from "graphql-request";

 const query = gql`
	{
		countries {
			name
			emoji
		}
	}
	`;


/* 	const res = await request("https://countries.trevorblades.com/", query)
	   .then((data) => console.log(data))
	   .catch((error) => {
			console.log('실패', error)
		}); */


 export const load = async ({fetch}) => {

 
		// const res = await fetch("/graphql", {
/* 		const res = await fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: query
		})
		.then((reponse) => response.json())
		.catch((error) => {
			console.log('실패', error)
		}); */

		fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
.then((response) => console.log(response))
.catch((error) => {
			console.log('실패', error)
		});

		// console.log(res)
		// const {data} = await res.json()

	// console.log(data)

/* 	return {
		props:{data}
	} */
 };

/*  import { request, gql } from "graphql-request";

 const query = gql`
	{
		countries {
			name
			emoji
		}
	}
	`;

	request("https://countries.trevorblades.com/", query).then((datas) => 
		console.log(datas)
	); */

/* 	export const load = async () => {
		const datas = await request("https://countries.trevorblades.com/", query);

		console.log(datas);

		return {
			props: {
				datas,
			},
		};
	}; */

function goPage() {
  location.href = "/main"
}

import VIDEO from "$lib/assets/Woman.mp4";
import IMG_02 from "$lib/assets/main_02.png";

</script>	

<script>
	// export let data;
	
</script>
<!-- {(console.log(data))} -->
<!-- {@debug data} -->

<!-- {#each data.countries as {name, emoji}}
	 <p>{name} {emoji}</p>
{/each} -->
<!-- {JSON.stringify(data)} -->
 
<!-- {#each data.countries as country }
	<p>{country.emoji}</p>
{/each} -->

<main>
	<div class="kiosk-container" on:click={goPage}>
		<div class="kiosk-rowitem"> 
			<video autoplay loop controls  >
			<source src={VIDEO} type="video/mp4"> 
			<strong>Your browser does not support the video tag.</strong>
		  </video>
		</div>
		<div class="kiosk-rowitem">
			<center>
			<img class=img2 src={IMG_02} alt='image-02' >
		</center>
		</div>
		<div class="kiosk-rowitem">Item 3</div>
	</div>
</main>

	<!-- container -->
	<div id="container" class="main_content_box">
		<div class="main_visual">
			<div id="slides" class="slides_sec">
				<div class="slides_lst">
					<div class="web_box">
						<img src="https://www.astems.co.kr/home/images/main/img_slide_01.jpg" alt="미래를 열어가는 아스템즈 이미지">
					</div>
					<div class="mobile_box">
						<img src="https://www.astems.co.kr/home/images/main/img_slide_01_m.jpg" style="max-width: 100%; height:260px;" alt="미래를 열어가는 아스템즈 이미지">
					</div>					
					<div class="slidebox">
						<span>World Class IT Hub</span>
						<!--<strong>미래를 열어가는<br> 아스템즈DEV</strong>-->
						<strong>미래를 열어가는<br> 아스템즈</strong>
						<p>아스템즈는 종합IT 서비스 전문 기업으로<br>고객의 성공과 가치관을 통해 함께 성장합니다.</p>
					</div>
				</div>
				<div class="slides_lst">
					<div class="web_box">
						<img src="https://www.astems.co.kr/home/images/main/img_slide_02.jpg" alt="비즈니스 환경에 최적화된 IT 솔루션 이미지">
					</div>
					<div class="mobile_box">
						<img src="https://www.astems.co.kr/home/images/main/img_slide_02_m.jpg" style="max-width: 100%; height:260px;" alt="비즈니스 환경에 최적화된 IT 솔루션 이미지">
					</div>					
					<div class="slidebox">
						<span>World Class IT Hub</span>
						<strong>비즈니스 환경에<br> 최적화된 IT 솔루션</strong>
						<p>회사의 필요와 상황에 최적화된 IT 솔루션으로<br>업무의 생산성과 효율성을 향상시켜드립니다.</p>
					</div>
				</div>
				<div class="slides_lst">
				<div class="web_box">
					<img src="https://www.astems.co.kr/home/images/main/img_slide_03.jpg" alt="POS 기기 컬러 이미지">
				</div>
				<div class="mobile_box">
					<img src="https://www.astems.co.kr/home/images/main/img_slide_03_m.jpg" style="max-width: 100%; height:260px;" alt="POS 기기 컬러 이미지">
				</div>				
				</div>			
				<div class="slides_lst">
				<div class="web_box">
					<img src="https://www.astems.co.kr/home/images/main/img_slide_04.jpg" alt="차별화된 유지보수 서비스 이미지">
				</div>
				<div class="mobile_box">
					<img src="https://www.astems.co.kr/home/images/main/img_slide_04_m.jpg" style="max-width: 100%; height:260px;" alt="차별화된 유지보수 서비스 이미지">
				</div>
					<div class="slidebox slidebox2">
						<span>World Class IT Hub</span>
						<strong>차별화된<br> 유지보수 서비스</strong>
						<p>서비스 운영의 최적화, 심층적 관제 서비스로<br>효율적인 운영과 안정적인 유지보수를 제공합니다.</p>
					</div>				
				</div>
			</div>
		</div>
		<script type="text/javascript">
	    $(function() {
	      $('#slides').slidesjs({
	        play: {
	          active: true,
	          auto: true,
	          interval: 5000,
	          swap: true
	        }
	      });
	    });
		</script>
	
		<div class="main_info_visual">	
			<div class="solution_sec">
				<div class="txtbox">
					<strong>솔루션</strong>
					<p>고객의 비즈니스 환경에 <br>최적화된 IT솔루션을 제공합니다.</p>
					<button onclick="location.href='../solution/Solution_pos_01.php3'">자세히 보기</button>
				</div>
			</div>	
		</div>
	
		<div class="main_info_visual hardware_visual">	
			<div class="hardware_sec">
				<div class="txtbox">
					<strong>하드웨어</strong>
					<p>아스템즈는 고객에게 최상의 제품을 제공하기 위해 노력합니다.</p>
					<button onclick="location.href='../hardware/Hardware_pos_fec_01.php3'">자세히 보기</button>
				</div>
			</div>
		</div>
	
		<div class="main_info_visual service_visual">
			<div class="service_sec">
				<div class="txtbox">
					<strong>유지보수</strong>
					<p>아스템즈는 다년간의 경험으로 최상의 유지보수 서비스를 제공합니다.</p>
					<button onclick="location.href='../maintenance/Maintenance_s.php3'">자세히 보기</button>
				</div>
			</div>
		</div>
	
		<div class="main_info_visual payservice_visual">
			<div class="payservice_sec">
				<div class="txtbox">
					<strong>결제 서비스</strong>
					<p>아스템즈는 편리하고 안전한 결제서비스를 제공합니다.</p>
					<button onclick="location.href='../creditservice/Creditservice_v.php3'">자세히 보기</button>
				</div>
			</div>
		</div>
	
		<div class="main_info_visual2">
			<div class="question_sec">
				<div class="txtbox">
					<strong>견적문의</strong>
					<p>453-5200 (대표번호)</p>
					<button onclick="location.href='../support/Question.php3'"><em>자세히 보기</em></button>
				</div>
			</div>
	
			<div class="recruit_sec">
				<div class="txtbox">
					<strong>채용소식</strong>
					<p>훌륭하게 키워내는 인재경영<br>아스템즈가 추구하는 미래입니다.</p>
					<button onclick="location.href='../company/Companyprofile_re.php3'">자세히 보기</button>
				</div>
			</div>
	
			<div class="operating_sec">
				<div class="txtbox">
					<strong>아스템즈 고객센터</strong>
					<p>1588-5231 (대표번호)</p>
					<button onclick="location.href='../support/Customerservice.php3'">온라인 문의</button>
				</div>
			</div>
		</div>
		
		<div class="btn_top" id="btntop"><a href="#container" title="상단으로 이동">&nbsp;</a></div>
		
		
		<!-- 레이어팝업추가_20190228 -->
		<!-- 유다해 과장님 마감 요청 [2019.06.01 SBH] -->
		<!--
		<div id="divpop" class="layer_popup_box" style="display:block;width:400px;" >
			<img src="../images/01_EventWinners_20190604.jpg" alt="이벤트 이미지" usemap="#map">
		
			<map name="map">
				<area shape="rect" coords="0,432,399,479" href="https://www.astems.co.kr/home/support/press_av.php3?num=1&SEQ=270&cpage=1&keyword=" target="_blank" outline="none">
			</map>
		
			<form name="notice_form" class="evt_form"> 
				<span class="chk_box"><input type="checkbox" name="chkbox" value="checkbox" id="btncheckbox" class="chk_ok"><label for="btncheckbox">오늘 하루 이 창을 열지 않음</label></span> 
		      <a class="btn_close_w" href="javascript:closeWin();">[닫기]</a>
		   </form> 
		</div>
		-->
		
		
		<!-- 레이어팝업_종료_20170828 -->
		<!-- 레이어팝업_20170822 -->
                <!--
		<div id="divpop" class="layer_popup_box" style="display:none">
			<img src="../images/layer_popup_201708.jpg" alt="이벤트 당첨자 발표 안내 이미지">
		
			<form name="notice_form" class="evt_form"> 
				<span class="chk_box"><input type="checkbox" name="chkbox" value="checkbox" id="btncheckbox" class="chk_ok"><label for="btncheckbox">오늘 하루 이 창을 열지 않음</label></span> 
		      <a class="btn_close_w" href="javascript:closeWin();">[닫기]</a>
		   </form> 
		</div>
                -->
		<!-- //레이어팝업_20170822 -->
		<!-- //레이어팝업_종료_20170828 -->
		
		<!-- 레이어팝업 -->
		<!-- kdy-2018-08-21-del:이벤트팝업 종료(김은미 차장님요청)
		<div id="divpop" class="layer_popup_box" style="display:none">
			<img src="../images/layer_popup_201707.jpg" alt="이벤트 이미지" usemap="#map">
		
			<map name="map">
				<area shape="rect" coords="90,467,410,508" href="../event/event.php3" target="_blank" outline="none">
			</map>
			<div class="layer_style blind">
				<span class="title1">POS시스템은 역시, 앳포스!</span>
				<span class="type1">아스템즈 홈페이지 리뉴얼 오픈 기념 QUIZ 이벤트</span>
				<p class="text1">아스템즈에 관한 간단한 퀴즈를 맞추시면 추첨을 통해 경품을 드립니다.</p>
				<p class="text2">아스템즈 POS 시스템의 대표 브랜드명은 무엇일까요?<br><em>(한글명) ‘O O O’</em></p>
				<span class="type2">* 이벤트기간 : 2017년7월28일~8월18일까지<br>* 당첨자 발표 : 8월 22일 (홈페이지 공지사항을 통해 발표)</span>
			</div>
			<div class="btn_evt blind"><button id="button" onclick="location.href='../event/event.php3'">이벤트 참여하기</button></div>
			<form name="notice_form" class="evt_form"> 
				<span class="chk_box"><input type="checkbox" name="chkbox" value="checkbox" id="btncheckbox" class="chk_ok"><label for="btncheckbox">오늘 하루 이 창을 열지 않음</label></span> 
		      <a class="btn_close_w" href="javascript:closeWin();">[닫기]</a>
		   </form> 
		</div>
		-->
	
		<script type="text/javascript" > 
		cookiedata = document.cookie;    
		if ( cookiedata.indexOf("maindiv=done") < 0 ){      
		    document.all['divpop'].style.visibility = "visible"; 
		    } 
		    else { 
		        document.all['divpop'].style.visibility = "hidden"; 
		} 
		</script>
		<!-- //레이어팝업 -->
		
	</div>
<!-- //container -->

<style>
	video { max-width: 100%; display: block; margin: 0px auto; }
	.kiosk-container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-gap: 2px;
		padding: 1px;
		margin: 0px;
        background-color: white;
	} 

	.img2 {
		width:100%; height: 100%; align: center; 
	}
	.kiosk-rowitem {
		display: grid;
		margin: 1px;
        padding: 10px;
		vertical-align: middle;
		
        background-color: #f3f4f5;
	}

	/* .kiosk-rowitem:nth-child(1) { grid-row: 1 / span 2; } */

</style>