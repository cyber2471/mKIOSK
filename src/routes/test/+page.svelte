<script>
// 1. 아임포트 REST API 호출에 필요한 모듈을 불러옵니다.
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
const { Banks } = Request;
const { BankCodeEnum } = Enum; 

// 2. 아임포트 객체를 생성합니다. 귀하의 API 정보는 아임포트 관리자페이지 > 시스템설정 > 내정보를 참고해주세요.
const iamport = new Iamport({
  apiKey: '1437563852368337', 
  apiSecret: 'pWeBTRP5dvDi005DJu0lcFd1XVM7bzWeU34PwuvgMwGBCD5YBpxtTRBo2bDzhN4KKUyM5X04heL55BgW',
});

// EX1. 모든 은행 정보를 조회합니다.
const getBanks = Banks.getBanks();
getBanks.request(iamport)
.then(response => console.log('response: ', response.data))
.catch(error => console.log('error: ', error.response.data));

// EX2. 특정 은행 정보를 조회합니다.
const getBank = Banks.getBank({
  code: BankCodeEnum.SC,
});

async function callBank() {
await getBank.request(iamport)
.then(response => console.log('response: ', response.data))
.catch(error => console.log('error: ', error.response.data));
}
</script>

