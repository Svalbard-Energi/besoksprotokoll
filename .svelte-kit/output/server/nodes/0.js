

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.pSvOdBH0.js","_app/immutable/chunks/DDoxhlaG.js","_app/immutable/chunks/BovqA5zf.js","_app/immutable/chunks/Dhg4dCd-.js"];
export const stylesheets = [];
export const fonts = [];
