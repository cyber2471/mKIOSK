<script>
  import '../../app.css';
  import { App } from 'konsta/svelte';
  import { db, Storage } from "../common/DataStore"
  import { liveQuery } from "dexie"

  import {
    useTheme,
    Page,
    Navbar,
    NavbarBackLink,
    Panel,
    Block,
    BlockTitle,
    Link,
    Button, 
    // Segmented,
    // SegmentedButton,   
  } from 'konsta/svelte';

  let leftPanelOpened = false;
  let rightPanelOpened = false;
  let leftFloatingPanelOpened = false;
  let rightFloatingPanelOpened = false;

  let total_qty = 0;
  let amounts = 0;
  let dupOrderList;

  let theme;
  theme = useTheme((newValue) => {
    // to keep it reactive, update value on theme update in parent components
    theme = newValue;
  });

  console.log(theme); // -> 'ios'

$: orderList = liveQuery(async () => {
    //
    // Query Dexie's API
    //
    const orderList = await db.orderList
      // .where('age')
      // .between(minAge, maxAge)
      .toArray();

       //dupOrderList = orderList;

      let szQty = orderList.map((item) => item.gQty)
     
     //  console.log("szQty:",szQty.length)
      if (szQty.length > 0) 
      {
        szQty.reduce((PrevVal, Currval) => PrevVal + Currval)
        total_qty = szQty.reduce((sum, cur) => sum + cur )
      }

    return  await orderList
      ;
  });

  async function clearItems() {

    // alertOpened = true;

    if (total_qty == 0)
    {
      alert('주문내역이 없습니다.');
      return;
    }

    let bConfirm = confirm("삭제하시겠습니까?")
    // console.log("proc_fg:",bConfirm)
    if (bConfirm) {

      const bclear = await db.orderList.clear()
        .then((resp) => total_qty = 0)
        .catch((err) => console.log(err))
    }
  }

  async function orderDel(idx)
  {
    console.log("order delete",idx) 
    const bDelete = await db.orderList.delete(idx)
        .then((resp) => console.log("success!!"))
        .catch((err) => console.log(err))

    console.log("delete fg:", bDelete)
  }

  function orderOption(idx)
  {
    console.log(idx)
  }

  let order_qty = 1;
  let nation_flag = 0;
  let szText = [];

  szText[0] = {order_item:'주문내역', order_qty:'주문수량', order_amount:'주문금액', 
               total_del:'전체삭제', cash:'현금결제', card:'카드결제', ordered:'주문하기',
               menu:'메뉴', qty:'수량', price:'가격', screen_title:'처음으로'}
  szText[1] = {order_item:'lịch sử đơn hàng', order_qty:'đặt hàng số lượng', order_amount:'số lượng đơn đặt hàng',
               total_del:'Xóa tất cả', cash:'tiền mặt', card:'Tín dụng thẻ', ordered:'đặt hàng',
               menu:'thực đơn', qty:'lượng hàng', price:'giá bán', screen_title:'Giới thiệu'}
  szText[2] = {order_item:'ORDER ITEMS', order_qty:'ORDER QTY', order_amount:'ORDER AMOUNTS',
               total_del:'Delete all', cash:'cash', card:'card', ordered:'place an order',
               menu:'Menu items', qty:'Qty', price:'Price', screen_title:'Intro'}

  // console.log(szText[nation_flag])

// console.log(openRequest);

function orderChange(num) {
  order_qty += num;
}

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
  import DEL from "$lib/assets/delete.png"
  import OPT from "$lib/assets/option.png"  

  let size = 'Default';
  let isTransparent = false;
</script>



  <Page >
      <Navbar 
       title="메뉴주문"
       subtitle="Web KIOSK"
      class="top-0 sticky"
      medium={size === 'Medium'}
      large={size === 'Large'}
      transparent={isTransparent}
      style="height:70px"
      >
    <Block class="flex space-x-1">
      <Button onClick={() => (leftPanelOpened = true)}>분류</Button>
      <Button onClick={() => (rightPanelOpened = true)}>내역</Button>
      <Button onClick={clearItems}>삭제</Button>
    </Block>
    </Navbar>

    <Panel
    side="left"
    size="w-60 h-screen"
    opened={leftPanelOpened}
    onBackdropClick={() => (leftPanelOpened = false)}
  >
    <Page>
      <Navbar title="분류">
        <Link slot="right" navbar onClick={() => (leftPanelOpened = false)}>
          Close
        </Link>
      </Navbar>
      <Block class="space-y-4">

      </Block>
    </Page>
  </Panel>

  <Panel
  side="right"
  size="w-60 h-screen"
  opened={rightPanelOpened}
  onBackdropClick={() => (rightPanelOpened = false)}
>
  <Page>
    <Navbar title="주문내역">
      <Link slot="right" navbar onClick={() => (rightPanelOpened = false)}>
        Close
      </Link>
    </Navbar>
    <Block class="space-y-4">
      <div class="orderList"> 
        <!-- <div class="orderTitle">{szText[nation_flag].order_item}</div> -->
        <div class="orderDetail">
          {#if $orderList}
          {#each $orderList as order, idx} 
          <div class="itemRows">
            <div class="itemList">{order.gName}</div>
            <div class="itemEtc">
              <div><img style="width:17px;cursor:pointer" src={OPT} alt='KOR' on:click={()=>orderOption(idx)}/></div>
              <div class=" btn-outline-primary" on:click={() => orderChange(-1)}>-</div>
              <div>{order_qty}</div>
              <div class=" btn-outline-danger" on:click={() => orderChange(1)}>+</div>
              <div><img style="width:17px;cursor:pointer" src={DEL} alt='KOR' on:click={()=>orderDel(idx)}/></div>
            </div>
          </div>
          {/each}   
          {/if}  
        </div>
      </div>
    </Block>
  </Page>
</Panel>

    <!-- <BlockTitle>Strong Inset Outline Block</BlockTitle> -->
      <Block strong inset outline>
        <App theme="material">
          <slot />
        </App>
      </Block>
</Page> 


<style>
  .menu-container {
    /* display: grid; */
    /* grid-template-rows: 10% 90%; */
    /* border: 1px solid purple; */
  }
  .menu-top {
    /* display: grid; */
    /* grid-template-rows: 1fr, 1fr; */
    /* border: 1px solid red; */
  }
  .menu-sub {
    /* display: grid; */
    /* grid-template-rows: 1fr, 1fr; */
    /* margin-top: 0px; */
    /* padding-top: 0px; */
    /* width: 100%; */
    /* height: 600px; */
    /* border: 1px solid red; */
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    .button-plus {
    width: 20px;
    height: 20px;
    margin: auto;
    padding-top: 0px;
    cursor: pointer;
    border: 1px inset black;
  }

  .button-minus {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: auto;
    padding-top: 0px;
    border: 1px inset black;
  }
  .orderMain {
    display: grid;
    /* grid-template-rows: 1fr 10fr;  */
    grid-template-rows: 9% 91%;
    /* border: 1px solid red; */
  }

  .orderGuide {
    /* margin-bottom: 20px; */
    /* border: 1px solid blue; */
  }

  .orderSub {
    display: grid;
    /* grid-template-columns: 2fr 1fr;  */
    grid-template-columns: 58% 43%;
    /* border: 1px solid blue; */
    /* margin: auto; */
  }

  .orderLeft {
    /* border: 1px solid black; */
    /* margin: auto; */
    overflow-y: auto;
  }

  .orderRight {
    border: 1px solid rgb(219, 215, 215);
    display: grid;
    grid-template-rows: 85% 15%
    /* margin: auto; */
  }
  .itemRows {
    display: grid;
    /* border: 1px inset red; */
    border-bottom: 1px inset gray;
    grid-template-columns: 1fr 1fr;
    row-gap: 2px;
  }
  .orderDetail {
		/* padding-top: 20px; */
		display: grid;
		/* margin: auto; */
		/* justify-content: center; */
		/* grid-template-rows: repeat(15, 1fr);  */
		/* grid-template-columns: 50% 50%;  */
    row-gap: 1px;
    /* background-color: rgb(236, 236, 229); */
		/* align-self:flex-end; */
		/* border: 1px solid red; */
    /* border: 1px 1px 1px 1px inset rgb(228, 8, 8);  */
	}

  .itemEtc {
		/* padding-top: 20px; */
		display: grid;
		/* margin: auto; */
		text-align: center; 
		/* justify-content: center; */
		/* grid-template-rows: repeat(15, 1fr);  */
		grid-template-columns: repeat(5, 1fr); 
    line-height: 35px;
    /* background-color: rgb(236, 236, 229); */
    font-size: 14px;
    font-family: 'Nanum Myeongjo', serif;  
		/* align-self:flex-end; */
		/* border: 1px inset rgb(235, 230, 230);  */
	}

	.itemList {
		/* padding-top: 20px; */
		display: grid;
		/* margin: auto; */
		text-align: left; 
		/* justify-content: center; */
		/* grid-template-rows: repeat(15, 1fr);  */
		/* grid-template-columns: repeat(4, 1fr);  */
    padding: 2px 0px 0px 5px;
    font-family: 'Nanum Myeongjo', serif; 
    font-size: 12px;
    line-height: 35px;
    /* background-color: rgb(236, 236, 229); */
		/* align-self:flex-end; */
		/* border: 1px inset rgb(235, 230, 230); */
    /* border: 1px solid red; */
	}

	.orderTitle {
		/* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
    /* border:1px solid blue; */
    background-color: rgb(104, 102, 102);
    width: 100%;
    font-size: 15px;
    text-align: center;
    color: whitesmoke;
	/* font-family: "@경기천년제목V"; */
    /* font-family: "HY견고딕";   */
    /* font-family: 'Nanum Myeongjo', serif;   */
    line-height: 35px;
	}  

  .orderList {
		/* padding-top: 20px; */
		display: grid;
		/* padding: 5px; */
		grid-template-rows: repeat(10 1fr);  
		/* grid-template-columns: 4fr 1fr;  */
    /* overflow-x: hidden; */
    /* overflow-y: auto; */
    /* width:auto; */
		/* row-gap: 5px; */
		/* align-self:flex-end; */
		/* font-size: 12px; */
		/* text-align: center; */
		/* color: whitesmokes; */
		/* font-family: "@경기천년제목V"; */
    font-family:'Roboto', sans-serif;
    /* font-weight: 600; */
		/* font-family: "HY견고딕";   */
 
		/* border: 1px solid red; */
    /* margin:auto; */
	}  
  
  .top-btn {
    /* font-size: 20px; */
    border: 1.5px solid #aaa;
    border-radius: 5px 5px;
		box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
    /* padding: 5px 10px 5px 10px; */
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
      /* font-family: "HY견고딕";  */
      font-family: 'Nanum Myeongjo', serif;  
      /* border: 1px solid purple; */
    }

    .btn {
      width: 100%;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      /* font-family: "HY견고딕";  */
      font-family: 'Nanum Myeongjo', serif;  
      line-height: 60px;
      /* border: 1px solid purple; */
      
    }

    .btn.btn-order {
      color: whitesmoke;
      font-size: 20px;
      text-align: center;
      vertical-align: middle;
      /* font-family: "HY견고딕";  */
      font-family: 'Nanum Myeongjo', serif;  
      line-height: 60px;
      background-color: rgb(167, 165, 165);
      /* border: 1px solid purple; */
    }

    .btn.btn-del{
      color: whitesmoke;
      font-size: 20px;
      text-align: center;
      vertical-align: middle;
      /* font-family: "HY견고딕";  */
      font-family: 'Nanum Myeongjo', serif;  
      line-height: 60px;
      background-color: rgb(26, 185, 5);
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
    /* font-family: "HY견고딕";   */
    font-family: 'Nanum Myeongjo', serif;  
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
    /* font-family: "HY견고딕";   */
    font-family: 'Nanum Myeongjo', serif;  
  }
  .kiosk-tail-qty {
    text-align: end;
    /* padding: 10px; */
    font-size: 20px;
    text-align:end;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    /* font-family: "HY견고딕";  */
    font-family: 'Nanum Myeongjo', serif;  
  }
  .kiosk-tail-amount {
    text-align: end;
    /* padding: 10px; */
    font-size: 20px;
    /* color: whitesmokes; */
	/* font-family: "@경기천년제목V"; */
    /* font-family: "HY견고딕";  */
    font-family: 'Nanum Myeongjo', serif;  
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
    /* font-family: "HY견고딕";   */
    font-family: 'Nanum Myeongjo', serif;  
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
		margin: 10px;
    background-color: white;
    /* border: 1px solid blue; */
	} 

  .flag {
      width: 20px; height: 15px; cursor: pointer;
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