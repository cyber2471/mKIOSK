
<script>
  let nation_flag = 0;

   nation_flag = 0;

  let szText = [];

  szText[0] = {order_item:'주문내역', order_qty:'주문수량', order_amount:'주문금액', 
               total_del:'전체삭제', cash:'현금결제', card:'카드결제',
               menu:'메뉴', qty:'수량', price:'가격', screen_title:'처음으로'}
  szText[1] = {order_item:'lịch sử đơn hàng', order_qty:'đặt hàng số lượng', order_amount:'số lượng đơn đặt hàng',
               total_del:'Xóa tất cả', cash:'tiền mặt', card:'Tín dụng thẻ',
               menu:'thực đơn', qty:'lượng hàng', price:'giá bán', screen_title:'Giới thiệu'}
  szText[2] = {order_item:'ORDER ITEMS', order_qty:'ORDER QTY', order_amount:'ORDER AMOUNTS',
               total_del:'Delete all', cash:'cash', card:'card',
               menu:'Menu items', qty:'Qty', price:'Price', screen_title:'Intro'}

  console.log(szText[nation_flag])

  function goPath(param)
  {
    if (param === '/')
    {
      location.href = param;
      return;
    }

    nation_flag = param;
  }

  import Logo from "$lib/assets/logo.png"
  import KOR from "$lib/assets/KOR.png"
  import JAN from "$lib/assets/JAN.png"
  import VTM from "$lib/assets/VTM.png"
  import USA from "$lib/assets/USA.png"
  import CHA from "$lib/assets/CHA.png"
 // import logo from "https://www.astems.co.kr/home/images/logo_20200515.png"

</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </svelte:head>

<div class="orderMain">
    <div class="orderGuide">
          <center>
          <br>
            <div class="kiosk-hcell">
              <div class="kiosk-dcell">
                <input bind:value={szText[nation_flag].screen_title} type=button class="btn btn-primary" on:click={()=>goPath('/')}  >
              </div>
              <div class="kiosk-dcell">
                <img style="width:170px; height:31px" src='https://www.astems.co.kr/home/images/logo_20200515.png' alt='logo' />
              </div>
              <div class="kiosk-dcell">   
                <img class=flag src={KOR} alt='KOR' on:click={()=>goPath(0)}  value='국가별 언어아이콘'/>   
                <img class=flag src={VTM} alt='VTM' on:click={()=>goPath(1)}  value='국가별 언어아이콘'/>
                <!-- <img class=flag src={CHA} alt='CHA' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/> -->
                <!-- <img class=flag src={JAN} alt='JAN' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/> -->
                <img class=flag src={USA} alt='USA' on:click={()=>goPath(2)}  value='국가별 언어아이콘'/>
                <!--<input type=button on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'> --> 
              </div>
            </div>
            <br>
          </center>
      </div>
  <!-- <p class="hline"></p> -->
    <div class="orderSub">
      <div class="orderLeft">
        <slot></slot>
      </div>
      <div class="orderRight">
        <div class="orderList">
          <div class="orderTitle">{szText[nation_flag].order_item}</div>
          <div class="itemList"></div>
        </div>
      </div>
    </div>
</div>
        
<style>
  .orderMain {
    display: grid;
    /* grid-template-rows: 1fr 10fr;  */
    grid-template-rows: 9% 91%;
    
    /* border: 1px solid red; */
  }

  .orderGuide {
    /* margin-bottom: 20px; */
    border: 1px solid blue;
  }

  .orderSub {
    display: grid;
    /* grid-template-columns: 2fr 1fr;  */
    grid-template-columns: 75% 25%;
    /* border: 1px solid black; */
    /* margin: auto; */
  }

  .orderLeft {
    /* border: 1px solid black; */
    margin: auto;
    overflow-y: auto;
  }

  .orderRight {
    border: 1px solid black;
    /* margin: auto; */
  }

	.itemList {
		/* padding-top: 20px; */
		display: grid;
		margin: auto;
		text-align: center;
		justify-content: center;
		grid-template-columns: repeat(3, 1fr); 
		/* grid-template-columns: 2fr 1fr;  */
		column-gap: 40px;
		/* align-self:flex-end; */
		/* border: 1px solid blue; */
	}

	.orderTitle {
		display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    /* border:1px solid blue; */
    background-color: rgb(104, 102, 102);
    font-size: 22px;
    text-align: center;
    color: whitesmoke;
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕";  
    line-height: 32px;
	}  

  .orderList {
		/* padding-top: 20px; */
		/* display: grid; */
		/* padding: 5px; */
		/* grid-template-columns: repeat(3, 1fr);  */
		/* grid-template-columns: 2fr 1fr;  */
		/* column-gap: 40px; */
		/* align-self:flex-end; */
		/* font-size: 20px; */
		/* text-align: center; */
		/* color: whitesmokes; */
		/* font-family: "@경기천년제목V"; */
		/* font-family: "HY견고딕";   */
		/* border: 1px solid blue; */
	}  
    .btn {
      font-size: 20px;
      text-align: center;
      vertical-align: middle;
      font-family: "HY견고딕"; 
      /* border: 1px solid purple; */
    }
    .bottom-container {
		/* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* border:1px solid yellow; */
    /* line-height: 100px; */
    /* background-color: rgb(104, 102, 102); */

  }
  .kiosk-amount-title {
		display: grid;
    font-size: 20px;
    text-align: center;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕";  
  }
  .kiosk-qty-title {
		display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* border:1px solid yellow; */
    /* line-height: 100px; */
    /* background-color: rgb(104, 102, 102); */
    font-size: 20px;
    text-align: center;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕";  
  }
  .kiosk-tail-qty {
    text-align: end;
    /* padding: 10px; */
    font-size: 20px;
    text-align:end;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕"; 
  }
  .kiosk-tail-amount {
    text-align: end;
    /* padding: 10px; */
    font-size: 20px;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕"; 
  }

    .kiosk-btn {
		display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* border:1px solid red; */
    padding: 5px;
    /* margin: 10px; */
    /* background-color: whitesmoke; */
    column-gap: 7px;
    /* line-height: 100px; */
  } 
  .kiosk-summary {
		display: grid;
    grid-template-columns: 1fr 2fr;
    /* padding: 10px; */
    /* border:1px solid blue; */
    /* background-color: whitesmoke; */
    
    /* row-gap: 5px; */
    /* line-height: 100px; */
  }
    .kiosk-tail {
		display: grid;
    grid-template-columns: 2fr 3fr;
    /* margin: 10px; */
    padding: 10px;
    background-color: rgb(221, 217, 217);
    /* border:1px solid blue; */
    line-height: 50px;
  }
  .kiosk-tail-title {
		display: grid;
    grid-template-columns: 4fr 1fr 2fr;
    /* border:1px solid red; */
  }

  .kiosk-body {
		display: grid;
    line-height: 200px;
    /* grid-template-columns: 4fr 1fr 2fr; */
    /* border:1px solid red; */
  }
  .kiosk-header {
		display: grid;
    grid-template-columns: 4fr 1fr 2fr;
    /* border:1px solid red; */
  }

  .kiosk-title {
		display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    /* border:1px solid blue; */
    background-color: rgb(104, 102, 102);
    font-size: 22px;
    text-align: center;
    color: whitesmoke;
	/* font-family: "@경기천년제목V"; */
    font-family: "HY견고딕";  
    line-height: 32px;
  }
	.kiosk-hcell {
    /* border:1px solid rgb(245, 6, 6); */
		width: 100%;
		height: 100%;
		display: grid;
		/* grid-template-columns: 10% 65% 5% 5% 5% 5% 5%; */
    /* grid-template-columns: 35% 40% 25%; */
    grid-template-columns: repeat(3, 1fr);
		grid-gap: 2px;
		padding: 1px;
		margin: 0px;
    background-color: white;
    /* border: 1px solid red; */
	} 

  .kiosk-dcell {
    /* border:1px solid rgb(21, 5, 253); */
		/* display: grid; */
		/* grid-template-columns: 100px; */
		grid-gap: 2px;
		padding: 1px;
		margin: 0px;
    background-color: white;
    /* border: 1px solid blue; */
	} 

  .flag {
      width: 40px; height: 30px; cursor: pointer;
  }

  header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding-left: 4vw;
        padding-right: 4vw;
    }

    nav {
        display: flex;
        align-items: center;
        align-self: auto;
        border-bottom: 1px solid lightgray;
        padding-left: 4vw;
        padding-right: 4vw;
    }

    h1 {                                                 
        margin: 5;
        font-weight: 400;
        font-size: 25px;
    }

    center {
      border-bottom: 1px solid lightgray;
      vertical-align: middle;
    }

    .hline {
      border-bottom: 1px solid lightgray;
      vertical-align: middle;
    }
</style>