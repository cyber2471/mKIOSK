<script>
  import '../../app.css';
  import { db } from "../common/DataStore"
  import { liveQuery } from "dexie"
  import Box from "../common/Box.svelte";
  import Coffee from "$lib/assets/coffee001.png"
  import QRCode from "../common/QRJS.svelte";
  import Accordion, { Header, Content } from '@smui-extra/accordion';
  // import QrCode from "svelte-qrcode"

  import {
    App,
    useTheme,
    Page,
    Navbar,
    Tabbar,
    TabbarLink,
    // Stepper,
    // NavbarBackLink,
    Popup,
    Popover,
    Panel,
    Block,
    BlockTitle,
    List,
    ListItem,
    ListButton,
    ListInput,
    Link,
    Button, 
    // Segmented,
    // SegmentedButton,   
  } from 'konsta/svelte'; 

  let leftPanelOpened = false;
  let rightPanelOpened = false;
 
  let total_qty = 0;
  let total_amounts = 0;
  let popupOpened = false;
  let searchName;
  
  let popoverOpened = false;
  let popoverTargetEl = null;

  const openPopover = (targetEl) => {
    popoverTargetEl = targetEl;
    popoverOpened = true;
  };

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
      let szPrice = orderList.map((item) => item.gPrice)
      
     //  console.log("szQty:",szQty.length)
      if (szQty.length > 0) 
      {
        szQty.reduce((PrevVal, Currval) => PrevVal + Currval)
        total_qty = szQty.reduce((sum, cur) => sum + cur )

        szPrice.reduce((PrevVal, Currval) => PrevVal + Currval)
        total_amounts = szPrice.reduce((sum, cur) => sum + cur )
      }
      else
      {
        total_qty = 0;
        total_amounts = 0;
      }


    return  await orderList
      ;
  });

  function fvPayments() {
    alert('미개발 내역입니다.')
  }

  async function clearItems() {

    // alertOpened = true;

    if (total_qty == 0)
    {
      alert('주문내역이 없습니다.');
      return;
    }

    let bConfirm = confirm("모두 삭제하시겠습니까?")
    // console.log("proc_fg:",bConfirm)
    if (bConfirm) {

      const bclear = await db.orderList.clear()
         .then((resp) => {total_qty = 0; total_amounts = 0; })
         .catch((err) => console.log(err))

      const bDel = await db.delete()
          .then(() => db.open())

      console.log("db open:",bDel)
    }
  }

  async function orderDel(idx, Name)
  {

    console.log("key value:",idx)

    const bDelete = await db.orderList.delete(idx)
      .then((resp) => console.log("success!!"))
      .catch((err) => console.log(err))

  }

  function AddComma(num)             
  {                
    var regexp = /\B(?=(\d{3})+(?!\d))/g;                
    return num.toString().replace(regexp, ',');            
  } 

  function orderOption(idx)
  {
    console.log(idx)
  }

  let order_qty = 1;
  let nation_flag = 0;

function orderUpdate(idx,curQty,nextQty,curPrice,uPrice) {

  let nQty = curQty + nextQty;

  if (nQty == 0)
  {
    alert('최소수량입니다.')
    return;
  }

  let nPrice = curPrice + (uPrice * nextQty);

  const bDelete = db.orderList.update(idx, {
        "gQty": nQty,
        "gPrice": nPrice
      })
      .then((resp) => console.log("success!!"))
      .catch((err) => console.log(err))

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

   $: mgoodstb = liveQuery( async () => {

    // const searchName = ""
    const regex = new RegExp(searchName)
 
    const objGoods = await db.mgoodstb
      .filter (function (res) { return regex.test(res.name); })
      .toArray()

        return  await objGoods;
  });

  async function fvSelected(name, qty, price) {

  try {

    const id = await db.orderList.add({
		gName:name, 
		gQty:qty,
		gAttr: {shot:'0', size:{tall:'0', grande:'0', vanti:'0'}, decaf:{decaf:'0', half_decaf:'0'}, 
		        cup:{single_use:'0', mug_cup:'0', personal_cup:'0'}, syrup:{vanila:'0', hazelnut:'0', caramel:'0'},
                whipping: {nomal_whipping:{less:0, normal:0, more:0 }, espreso_whipping:{less:0, normal:0, more:0 }},
				drizzle: {caramel:{less:0, normal:0, more:0 }, chocolate: {less:0, normal:0, more:0 }}
			   }, 
		gPrice:price, 
		uPrice:price,
		ctime:'20220921121212', 
		utime:'20220921121212', 
		userid:'cyberpark', 
		remark:''
    });

    status = `gMeatadata successfully added. Got id ${id}`;
    

  } catch (error) {
    status = `Failed to add ${gName}: ${error}`;
  }

}	

function fvSearching() {
  console.log(name.value)
  searchName = name.value
  leftPanelOpened = false;
}

let name = { value: '', changed: false };
  let demoValue = '';

const onNameChange = (e) => {
  name = { value: e.target.value, changed: true };
};

  const onDemoValueChange = (e) => {
    demoValue = e.target.value;
  };
  const onDemoValueClear = () => {
    demoValue = '';
  };

  // import Logo from "$lib/assets/logo.png"
  // import KOR from "$lib/assets/KOR.png"
  // import JAN from "$lib/assets/JAN.png"
  // import VTM from "$lib/assets/VTM.png"
  // import USA from "$lib/assets/USA.png"
  // import CHA from "$lib/assets/CHA.png"
  import DEL from "$lib/assets/delete.png"
  import OPT from "$lib/assets/option.png"  
  // import { identity } from 'svelte/internal';

  let size = 'Default';
  let isTransparent = false;
</script>

<svelte:head>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
  />
</svelte:head>

  <Page >
      <Navbar 
       title="메뉴주문"
       subtitle="Web KIOSK"
      class="top-0 sticky"
      medium={size === 'Medium'}
      large={size === 'Large'}
      transparent={isTransparent}
      >
      <Tabbar 
    class="left-0 bottom-0 fixed">
  <div class="tab-body">
    <div class="tab-title">
      <div class="tab-qty-title">총수량</div>
      <div class="tab-qty">{total_qty}</div>
      <div class="tab-amounts-title">총금액</div>
      <div class="tab-amounts">{AddComma(total_amounts)}</div>
    </div>
    <div class="tab-order" on:click={() => (popupOpened = true)}>QR주문</div>
    <div class="tab-delete" on:click={clearItems}>삭제</div>
  </div>
  </Tabbar> 

    <Block class="flex space-x-1">
      <Button onClick={() => (leftPanelOpened = true)}>기타</Button>
      <Button onClick={() => (rightPanelOpened = true)}>내역</Button>
      <Button onClick={fvPayments}>결제</Button>
    </Block>
    </Navbar>

    <Panel
    side="left"
    size="w-60 h-screen"
    opened={leftPanelOpened}
    onBackdropClick={() => (leftPanelOpened = false)}
  >
    <Page>
      <Navbar title="분류 및 검색" >
        <Link slot="right" navbar onClick={() => (leftPanelOpened = false)}>
          Close
        </Link>
      </Navbar>
      <!-- <Block class="space-y-4"> -->

        <!-- <List strongIos >
          <ListItem class="Selected-Class" title="분류선택" header="선호하는 상품별" link onClick={() => openPopover('.Selected-Class')}/>
        </List> -->

        <!-- <BlockTitle>Outline + Floating Labels</BlockTitle> -->
        <List strongIos insetIos>
          <ListInput 
            outline
            label="상품명 검색"
            floatingLabel
            type="text"
            value={name.value}
            onInput={onNameChange}
            placeholder="검색어 입력"
          >
          </ListInput>
            <center>
               <Button style="width:160px" onClick={() => (fvSearching())}>검색</Button>
            </center>
        </List>


      <!-- </Block> -->
    </Page>
  </Panel>

  <Panel
  side="left"
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
          {#each $orderList as order (order.id)} 
          <div class="itemRows">
            <div class="itemList">{order.gName}</div>
            <div class="itemEtc">
              <div class="itemCell"><img style="width:17px;cursor:pointer" src={OPT} alt='KOR' on:click={()=>orderOption(order.id)}/></div>
              <div class="minus" on:click={() => orderUpdate(order.id,order.gQty,-1,order.gPrice,order.uPrice)}>-</div>
              <div class="">{order.gQty}</div>
              <div class="plus" on:click={() => orderUpdate(order.id,order.gQty,1,order.gPrice,order.uPrice)}>+</div>
              <div class="itemCell"><img style="width:17px;cursor:pointer" src={DEL} alt='KOR' on:click={()=>orderDel(order.id)}/></div>
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
      <Block margin>
        <App theme="material">


  <div class="container">
    <div class="itemGrid">
    {#if $mgoodstb}
    {#each $mgoodstb as {name, price}}
      <Box>
        <center>
          <div on:click={() => fvSelected( name, 1, price)}>
            <img  width=65px height=85px src={Coffee} alt="download icon"/>
          </div>
          <div class="name">{name}</div>
          <div class="price">￦{AddComma(price)}</div>
        </center>
      </Box>	
    {/each} 
    {:else}
      <center>...Waiting</center>
    {/if}

    </div>
  </div>


        </App>
      </Block>

      <Popup opened={popupOpened} onBackdropClick={() => (popupOpened = false)}>
        <Page>
          <Navbar title="QR Code">
            <Link slot="right" navbar onClick={() => (popupOpened = false)}>
              Close
            </Link>
          </Navbar>
          <Block class="space-y-4">
            <div class="QR-display">
              <div>
                <QRCode style="width:500px" codeValue="https://7114-125-129-62-2.jp.ngrok.io/mobileA" squareSize=500/>
                <!-- <QrCode style="width:500px" value="https://cdae-125-129-62-2.jp.ngrok.io/mobileA"/> -->
              </div>
              <div class="QR-text">
               <p class="center">[ 주문결제용 QR코드 ] </p>
                다음 절차에 따라 KIOSK를<br>
                통해 결제하시면 됩니다.
              </div>
            </div>

<pre>
1. KIOSK상단의 QR결제(주문결제용)를 선택
2. 예약주문내역의 예약명을 확인하고 선택 
   또는 QR코드결제 버튼 클릭 후 QR코드 
   스캐너에 생성된 QR코드 인식
3. 선택된 예약주문 또는 인식된 QR코드의 
   상세 주문내역을 확인
4. 포인트 및 결제수단을 선택하여 결제처리
   ( 결제전 메뉴의 추가나 변경가능 )
</pre>

          </Block>
        </Page>
      </Popup>

      <Popover style="width:200px"
      opened={popoverOpened}
      target={popoverTargetEl}
      onBackdropClick={() => (popoverOpened = false)}
    >
      <List nested>
        <ListItem title="Item 1" link onClick={() => (popoverOpened = false)} />
        <ListItem
          title="List Item 2"
          link
          onClick={() => (popoverOpened = false)}
        />
        <ListItem title="Item 3" link onClick={() => (popoverOpened = false)} />
        <ListItem
          title="List Item 4"
          link
          onClick={() => (popoverOpened = false)}
        />
        <ListItem title="Item 5" link onClick={() => (popoverOpened = false)} />
      </List>
    </Popover>

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
  .QR-display {
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* border: 1px solid red; */
  }

  .QR-text {
    text-align: left;
    padding: 20px 0px 0px 10px;
    /* margin-left: 10px; */
  }
  .minus {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    background-color: rgb(236, 236, 233);
    font-family: 'Nanum Myeongjo', serif; 
    cursor: pointer;
    border-radius: 8px;
  }
  .plus {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    background-color: rgb(236, 236, 233);
    font-family: 'Nanum Myeongjo', serif; 
    cursor: pointer;
    border-radius: 8px;
  }
  .tab-title {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  .tab-body {
    width:100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 4px;
    /* border: 1px solid red; */
    padding: 2px;
  }
  .tab-qty-title {
    /* border: 1px solid blue; */

		/* transition-duration: 0.1s; */
  }
  .tab-amounts-title {
    /* border: 1px solid blue; */

		/* transition-duration: 0.1s; */
  }
  .tab-qty {
    /* border: 1px solid blue; */
    text-align: right;
    padding-right: 10px;
		/* transition-duration: 0.1s; */
  }
  .tab-amounts {
    /* border: 1px solid blue; */
    text-align: right;
    padding-right: 10px;
		/* transition-duration: 0.1s; */
  }
  .tab-order {
    /* border: 1px solid blue; */
    line-height: 50px;
    text-align: center;
    background-color: rgb(255,193,7);
    font-family: 'Nanum Myeongjo', serif; 
    cursor: pointer;
    /* color: whitesmoke; */
    font-size: 15px;
    border-radius: 10px;
		box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
		/* transition-duration: 0.1s; */
  }

  .tab-delete {
    /* border: 1px solid blue; */
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    background-color: rgb(25,135,84);
    font-family: 'Nanum Myeongjo', serif; 
    font-size: 15px;
    color: whitesmoke;
    border-radius: 10px;
		box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
		/* transition-duration: 0.1s; */
  }
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
  .itemCell {
		/* padding-top: 20px; */
		/* display: grid; */
		/* margin: auto; */
    padding: 13px 1px 1px 0px;
		text-align: center; 
    vertical-align: middle;
		/* justify-content: center; */
		/* grid-template-rows: repeat(15, 1fr);  */
		/* grid-template-columns: repeat(5, 1fr);  */
    /* line-height: 35px; */
    /* background-color: rgb(236, 236, 229); */
    /* font-size: 13px; */
    /* font-family: 'Nanum Myeongjo', serif;   */
		/* align-self:flex-end; */
		/* border: 1px inset rgb(235, 230, 230);  */
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
		/* display: grid; */
		/* margin: auto; */
		text-align: left; 
		/* justify-content: center; */
		/* grid-template-rows: repeat(15, 1fr);  */
		/* grid-template-columns: repeat(4, 1fr);  */
    padding: 2px 0px 0px 5px;
    font-family: 'Nanum Myeongjo', serif; 
    font-size: 15px;
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
      /* border-bottom: 1px solid lightgray; */
      vertical-align: middle;
    }

    .center {
      border-bottom: 1px solid lightgray;
      text-align: center;
    }

    .hline {
      border-bottom: 1px solid lightgray;
      vertical-align: middle;
    }

    .container {
		padding-top: 10px;
		display: grid;
		width: 100%;
		margin: auto;
		/* grid-template-columns: repeat(1, 1fr); */
		/* grid-template-columns: 2fr 1fr;  */
		/* column-gap: 10px; */
		/* align-self:flex-end; */
		margin: 0px 0px 0px 0px;
		/* border: 1px solid blue; */
	}

	.itemGrid {
		/* padding-top: 20px; */
		display: grid;
		margin: auto;
		text-align: center;
		justify-content: center;
		grid-template-columns: repeat(3, 1fr); 
		/* grid-template-columns: 2fr 1fr;  */
		column-gap: 10px;
		row-gap: 10px;
		/* align-self:flex-end; */
		/* border: 1px solid red; */
	}

	.name {
		font-size: 12px;
		line-height: 10px;
		margin: auto;
		/* border: 1px solid red; */
    }
    .price {
 		font-size: 12px;
		 line-height: 10px;
		 margin: auto;
		 /* border: 1px solid blue; */
	 }
</style>