/*

  메모리관리 - Garbage Collection

      1. 가비지 컬렉터 - 변수를 선언하면 자동으로 메모리를 할당하고,
         더이상 필요하지 않을 때 자동으로 해제한다.

      2. 메모리 생존주기
          1) 메모리 생존주기는 프로그래밍 언어와 상관없이 대부분 비슷하다.
          2) 필요할 때 할당한다. - 예)변수를 선언할 때 자동으로 메모리 할당
          3) 할당된 메모리를 사용한다. (읽기, 쓰기)
          4) 더이상 필요하지 않으면 자동으로 해제한다.

      3. 자바스크립트와 같은 고수준 언어들은 '가비지컬렉터(GC)'라는
         자동메모리관리기법을 사용한다.

      4. 가비지켈렉터의 목적은 메모리 할당을 추적하고,
         할당된 메모리 블록이 더이상 필요하지 않은지를 판단하여 회수하는 것이다.
*/
