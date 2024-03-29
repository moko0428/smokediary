# 작품 소개

날이 갈수록 흡연 구역은 적어지고 있다.
처음 각 지역 혹은 어디선가 흡연을 하고 싶을 때 담배를 물고 건물 벽을 보았을 때 금연구역 딱지가 붙어 있으면 주위의 CCTV를 확인하고 주변 바닥을 보며 담배꽁초가 많이 떨어져 있느가로 흡연을 하기 시작한다.

물론 이 흡연 방법은 범법행위로 간주될 수 있습니다.
지나가는 행인에게 간접흡연으로 인해 불쾌감을 줄 수도 있구요.
그래서 이 흡연구역을 알 수 있는 앱이 있으면 어떨까 생각을 해보았습니다.

이유 1: 흡연구역이 적어져 밖에서는 흡연 부스/흡연 구역을 찾기 힘들다.
이유 2: 정해지지 않은 곳에서 흡연을 하게 되면 행인이나 여러가지 등의 피해를 줄 수 있다.
이유 3: 이유 2와 같은 이유로 길거리/하수구에 담배꽁초로 인해 환경오염의 주범이 될 수 있다.

해결: 앱 지도를 통해 내 주변의 흡연구역을 보여줌으로써 흡연자가 비흡연자 등에게 피해를 덜 줄 수 있고 길바닥을 좀 더 깨끗하게 만들 수 있다.

## 앱을 통해 얻을 수 있는 사용자 정보

흡연구역에 대한 api를 제공해주는가 –
사용자들이 직접 지도에 없는 흡연구역(법으로 허용된)을 추가할 수 있다.
금연에 대한 정보 : 노담 캠페인같은 정보 제공
흡연에 대한 정보 : 누적 흡연량과 비용, 건강을 직접적으로 확인할 수 있다.

## 유사 앱

구름방 알리미 – 안드로이드
5천 이상 다운
회원가입 필요 x
UI 개편이 필요해 보임
위치정보 수집 – 검색을 통해 흡연 구역의 유무를 파악하고 로드뷰를 통해 검증된 데이터만 디비에 등록(위도 경도)
앱 내부에 제보기능을 이용해 사용자에게 흡연구역 위치를 제보 받아 검증하여 디비에 등록

흡연 기록을 통해 금연 목표치를 설정하여 금연을 도와주는 기능
흡연 기록은 사용자가 직접 터치하여 횟수 등록
앱은 언제 담배를 피웠는지 히스토리를 제공, 금연 목표와 월 흡연 개피를 알림으로 확인
구글API 사용

기술 - 구글 API로 지도 연동할 때 플레이스토어에 맞게 SHA-1을 넣어줘야한다.

## 다른 앱과의 차별점

iOS의 앱은 노담, 금연에 대한 앱만 존재
안드로이드는 흡연구역과 유사한 어플이 존재

기존에 있던 유사한 앱들은 서비스 종료

구름방 알리미 하나 있음

## 기능목록

- Home :
  - 현재 날짜 표기 ✅
  - 금일 흡연 카운팅 표기 ✅
    - 사용자 시간 기준 하루가 지나면 초기화가 되고 카운팅은 보고서에 기록되어야 한다. ❌
  - 카운팅 버튼 ✅
    - id, count, date
    - localStorage에 id, count, date 저장
    - 3초 딜레이
- SmokeList :
  - 흡연 금일 카운팅 기록 ✅
  - 최근 흡연 시간 표기 ✅
  - 금일 흡연 로그 표기 ✅
- Report :
  - 카운팅으로 오늘, 주, 달, 년, 원, 갑, 합계 표기 ❌
- Diary :
  - 깃헙 잔디로 흡연 카운팅 표시
- Place :
  - 흡연 구역 및 사용자가 흡연한 위치 정보 표시 ❌
- Settings :
  - 담배 종류 입력 저장 ❌
  - 담배 가격 저장 ❌
    - 담배 가격에 따라 흡연 보고서 정보 반영
  - 테마 설정 ❌
    - 사용하는 담배에 따라 메인컬러 등 테마 설정

## TODO

- useEffect로 하루가 지나면 count 초기화 시키기
- 리프레쉬 버튼 최적화, counting button 최적화 필요

## 이슈

- count 렌더링을 현재 data.length로 하는 이유는 로그를 삭제했을 때 카운트가 감소되지 않는 현상 때문 ✅

## 고민

흡연 로그에 reset 버튼으로 로그를 비워내는 기능 or filter로 해당 날짜만을 렌더

하루가 지난 데이터는 어떻게 보관하는가?

부르스크랩을 사용하면 기존 css가 이상해지네..
