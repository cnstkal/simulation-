import info from './info.js';
import characterOverrides from './characters.js';
export { info, characterOverrides };
export const createGameAdapter = (engine) => ({
  id:info.id,
  getScenario:()=>engine,
  characterOverrides
});
