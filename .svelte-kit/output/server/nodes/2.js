

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dn8a7FZX.js","_app/immutable/chunks/CgHiuSKY.js","_app/immutable/chunks/CpVw7o9V.js","_app/immutable/chunks/DhtqSGh1.js"];
export const stylesheets = [];
export const fonts = [];
