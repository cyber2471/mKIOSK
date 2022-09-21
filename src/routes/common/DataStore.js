import { DBStore } from './DataUtils';
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  friends: '++id, name, age', // Primary key and indexed props
});


db.version(1).stores({
    raindrops: 'id,position'
});

var drops = [];

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
});

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