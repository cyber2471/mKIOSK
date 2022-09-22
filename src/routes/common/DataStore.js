import { DBStore } from './DataUtils';
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    orderList: '++id, gName, gAttr, gQty, gPrice, ctime, utime, userid, remark', // Primary key and indexed props
  });

db.version(1).stores({
  gMeatadata: '++id, order_item, order_qty, order_amount, total_del, cash, card, menu, qty, price, screen_title',
});
 
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

db.on("populate", () => {
    db.gMeatadata.bulkAdd(szText);
});            

/* var drops = [];

for (var i=0;i<100000;++i) {
    drops.push({id: i, position: [Math.random(),Math.random(),Math.random()]})
}

db.raindrops.bulkAdd(drops).then(function(lastKey) {
    console.log("Done adding 100,000 raindrops all over the place");
    console.log("Last raindrop's id was: " + lastKey); // Will be 100000.
}).catch(Dexie.BulkError, function (e) {
    // Explicitely catching the bulkAdd() operation makes those successful
    // additions commit despite that there were errors.
    console.error ("Some raindrops did not succeed. However, " +
       100000-e.failures.length + " raindrops was added successfully");
}); */

// import Dexie from "https://unpkg.com/dexie@latest/dist/modern/dexie.mjs";

// const idxedDB = window.indexedDB;
// export let db;

// // 2. 브라우저에서 지원하는지 체크하기
// if (!idxedDB) window.alert('해당 브라우저에서는 indexedDB를 지원하지 않습니다.')
// else {
//   const request = idxedDB.open('cyberaprk');   // 3. SampleDB(db) 열기
//   request.onerror =(e)=> alert('failed');
//   request.onsuccess =(e)=> db = request.result;

// }

export const Storage = DBStore('orderList', []); 