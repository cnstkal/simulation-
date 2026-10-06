# 게임 추가 방법

새 미연시 게임은 `games/<game-id>/` 아래에 독립적으로 추가합니다.

권장 파일:
- `info.js` 게임 정보
- `characters.js` 공통 캐릭터 게임별 override
- `scenario.js` 시나리오
- `choices.js` 선택지
- `routes.js` 루트
- `endings.js` 엔딩
- `variables.js` 게임 전용 변수
- `assets/` 게임 전용 에셋

공통 캐릭터 기본값은 `platform/characters.js`에서만 관리합니다. 게임별 저장 데이터는 `platform/storage.js`의 gameId 네임스페이스를 사용합니다.
