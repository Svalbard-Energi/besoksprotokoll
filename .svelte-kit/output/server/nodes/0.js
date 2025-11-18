

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CR6wX1-o.js","_app/immutable/chunks/CgHiuSKY.js","_app/immutable/chunks/CpVw7o9V.js","_app/immutable/chunks/BF-RqIGF.js"];
export const stylesheets = [];
export const fonts = [];
