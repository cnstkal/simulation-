export const GAME_REGISTRY = [
  {id:'ace-night',title:'정윤호의 밤',subtitle:'어느 밤의 에이스에 대한 이야기',description:'현대 성인 로맨스 · 30챕터 확장판',cover:'./images/16.png',entry:'./games/ace-night/index.js',characters:'shared'}
];
export function getGame(gameId){ return GAME_REGISTRY.find(g=>g.id===gameId) || null; }
