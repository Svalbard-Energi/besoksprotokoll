export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Icon.png","manifest.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DvYFmo8C.js",app:"_app/immutable/entry/app.HKcifdBe.js",imports:["_app/immutable/entry/start.DvYFmo8C.js","_app/immutable/chunks/CMydVFT6.js","_app/immutable/chunks/CpVw7o9V.js","_app/immutable/chunks/BS9sz1bQ.js","_app/immutable/entry/app.HKcifdBe.js","_app/immutable/chunks/CpVw7o9V.js","_app/immutable/chunks/CDx0Lwq2.js","_app/immutable/chunks/CgHiuSKY.js","_app/immutable/chunks/BS9sz1bQ.js","_app/immutable/chunks/BF-RqIGF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
