 /*
   달의 중력은 지구의 17%입니다.
   지구에서 몸무게가 100kg인 사람은 달에 가면 17kg 입니다.
   과연 당신의 몸무게는 달에서 얼마일까요?

   아래의 조건을 만족하는 코드를 작성하세요.

   1. 사용자로부터 몸무게를 입력받아 myWeigt 변수에 저장한다.
   2. 달에서의 몸무게를 계산하여 moonWeight 변수에 저장한다.

   3. "당신의 몸무게는 달에서 ~~kg 입니다." 라고 출력하시오. 
   ~~자리에는 직접 계산된 수치를 넣지말고 변수를 사용하시오 
   (단 소수점 발생시 2번째 자리까지만 표기)
 */

   const myWeight = '75.6'; //사용자로부터 입력받은 몸무게 
   const moonWeight = parseInt(myWeight) * 0.17; //계산을 위한 형변환 해줌 

   console.log(`당신의 몸무게는 달에서 ${moonWeight.toFixed(2)}kg 입니다`);