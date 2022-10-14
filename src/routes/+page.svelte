
<script context="module">
 
 import { request, gql } from "graphql-request";
 import QRCode from "./common/QRJS.svelte";

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
  location.href = "/mobileA"
}

import VIDEO from "$lib/assets/Woman.mp4";
import IMG_02 from "$lib/assets/main_02.png";
import QRCODE from "$lib/assets/qrcode.png";

</script>	




<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif; overflow-y: hidden;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  /* max-width: 1000px; */
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 25px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}

h1.main-text {
	font-size: 40px;
	/* font-family: "@경기천년제목V"; */
	font-family: "HY견고딕";  
	line-height: 25px;
}

h1.sub-text {
	font-size: 30px;
	/* font-family: "@경기천년제목V"; */
	/* font-family: "가는각진제목체";   */
	font-family: "HY견고딕"; 
}

.main-textcolor {
   color: purple;
}
	video { max-width: 100%; display: block; margin: 0px auto; }
	.kiosk-container {
		width: 100%;
		height: 100%;
		display: grid;
		/* grid-template-rows: repeat(3, 1.2fr); */
		grid-template-rows: 1fr 1fr 1fr;
		/* grid-template-rows: repeat(3, minmax(50%,auto)); */
		/* align-items: stretch; */
		justify-items: stretch;
		vertical-align: middle;
		text-align: center;
		column-gap: 2px;
		padding: 1px; 
		margin: 0px;
        background-color: white;
	} 

	.img2 { 
		/* width:100%; height: 100%;s align: center;  */
	}
	.kiosk-rowitem {
		
		display: inline-block;
		margin: auto;
        /* padding: 10px; */ 
		vertical-align: middle;
		/* align-self: center;  */
		/* align-content: center;  */
		/* border: 1px solid; */
		width: 100%;
		/* height: 100%; */

        background-color: white;
	}

	img {
		max-width:100%; height: 100%; 
	}
	/* .kiosk-rowitem:nth-child(1) { grid-row: 1 / span 2; } */
	.qrcode {
		align-content: center;
		margin: auto;
	}
</style>


	<div class="kiosk-container" on:click={goPage}>
		<div class="kiosk-rowitem"> 
			<video autoplay loop controls  >
			<source src={VIDEO} type="video/mp4"> 
			<strong>Your browser does not support the video tag.</strong>
		  </video>
		</div>
		<div class="kiosk-rowitem" >
			<br>
			<!-- <img class="img2" src={QRCODE} alt='image-02' width=130px> -->
			<!-- <h1 class="sub-text">( 모바일주문을 원하시면 QR코드를 스캔하세요 )</h1> -->
			<div class="qrcode">
				<center>
					<QRCode codeValue="https://5d31-125-129-62-2.jp.ngrok.io/mobileA" squareSize=100/>
				</center>
		    </div>
			<h1 class="main-text">주문하시려면</h1>
			<h1 class="main-text"><span class="main-textcolor">화면을 터치</span>해주세요!</h1>
			
			<h1 class="sub-text">▶ To order, Touch the screen! ◀</h1>
			
		</div>
		<div class="kiosk-rowitem">

	<!-- container -->
	<div id="container" class="slideshow-container">

				<div class="mySlides fade">
					<div class="numbertext">1 / 3</div>
						<img src="https://www.astems.co.kr/home/images/main/img_slide_01.jpg" alt="미래를 열어가는 아스템즈 이미지" style="height:440px">	
					<div class="text">
						<span>World Class IT Hub</span>
						<!--<strong>미래를 열어가는<br> 아스템즈DEV</strong>-->
						<strong>미래를 열어가는<br> 아스템즈</strong>
						<p>아스템즈는 종합IT 서비스 전문 기업으로<br>고객의 성공과 가치관을 통해 함께 성장합니다.</p>
					</div>
				</div>
				<div class="mySlides fade">
					<div class="numbertext">2 / 3</div>
						<img src="https://www.astems.co.kr/home/images/main/img_slide_02.jpg" alt="비즈니스 환경에 최적화된 IT 솔루션 이미지" style="height:440px">				
					<div class="text">
						<span>World Class IT Hub</span>
						<strong>비즈니스 환경에<br> 최적화된 IT 솔루션</strong>
						<p>회사의 필요와 상황에 최적화된 IT 솔루션으로<br>업무의 생산성과 효율성을 향상시켜드립니다.</p>
					</div>
				</div>		
				<div class="mySlides fade">
					<div class="numbertext">3 / 3</div>
					<img src="https://www.astems.co.kr/home/images/main/img_slide_04.jpg" alt="차별화된 유지보수 서비스 이미지" style="height:440px">
					<div class="text">
						<span>World Class IT Hub</span>
						<strong>차별화된<br> 유지보수 서비스</strong>
						<p>서비스 운영의 최적화, 심층적 관제 서비스로<br>효율적인 운영과 안정적인 유지보수를 제공합니다.</p>
					</div>				

		  </div>
		<div style="text-align:center">
			<span class="dot"></span> 
			<span class="dot"></span> 
			<span class="dot"></span> 
		  </div>
		  
		<script type="text/javascript">
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

</script>
	
		</div>
		<!-- //container -->
	</div>
	<!-- //kiosk-rowitem -->
</div>
<!-- //kiosk-container -->

