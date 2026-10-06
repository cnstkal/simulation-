export const STORAGE_PREFIX = 'vn-platform:';
const key=(gameId,suffix)=>STORAGE_PREFIX+gameId+':'+suffix;
export function getGameState(gameId,fallback=null){try{const v=localStorage.getItem(key(gameId,'state'));return v?JSON.parse(v):fallback}catch{return fallback}}
export function setGameState(gameId,state){try{localStorage.setItem(key(gameId,'state'),JSON.stringify(state))}catch{}}
export function getGameSettings(gameId,fallback={}){try{const v=localStorage.getItem(key(gameId,'settings'));return v?JSON.parse(v):fallback}catch{return fallback}}
export function setGameSettings(gameId,value){try{localStorage.setItem(key(gameId,'settings'),JSON.stringify(value))}catch{}}
export function getGameCollection(gameId,name,fallback=[]){try{const v=localStorage.getItem(key(gameId,name));return v?JSON.parse(v):fallback}catch{return fallback}}
export function setGameCollection(gameId,name,value){try{localStorage.setItem(key(gameId,name),JSON.stringify(value))}catch{}}
