import { get, writable } from 'svelte/store'

// 세션 스토리지에서 키 'numValue'로 설정된 값을 가져옴
// const sessionNumValue = () => sessionStorage.getItem('goods');

// // sessionNumValue() 함수의 결과가 null인 경우 1로 설정
// const {subscribe, update} = writable(sessionNumValue() || "아메리카노");

// export const goods = {
//   subscribe,
//   updateValue: () => update(selectedItem => {
//     // doubleCalc() 함수가 호출되면 세션 스토리지에 등록된 값을 갱신함
//     sessionStorage.setItem('goods', selectedItem);
//     return result;
//   })
// };

function persist(key, value) {
    // localStorage.setItem(key, JSON.stringify(value)); // localStorage
    sessionStorage.setItem(key, JSON.stringify(value)); // sessionStorage
    // console.log(key, value)
}
  
export function DBStore(key, initialValue) {
    // const sessionValue = JSON.parse(localStorage.getItem(key)); //localStorage
    const sessionValue = JSON.parse(sessionStorage.getItem(key)); //sessionStorage
    if (!sessionValue) persist(key, initialValue);
  
    const store = writable(sessionValue || initialValue);
    store.subscribe(value => persist(key, value));
    return store;
}