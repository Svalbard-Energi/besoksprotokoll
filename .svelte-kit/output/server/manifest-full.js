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
		client: {start:"_app/immutable/entry/start.Cyarup4X.js",app:"_app/immutable/entry/app.BPKpJzmD.js",imports:["_app/immutable/entry/start.Cyarup4X.js","_app/immutable/chunks/UWyHaBao.js","_app/immutable/chunks/BovqA5zf.js","_app/immutable/chunks/DnkeOe0L.js","_app/immutable/entry/app.BPKpJzmD.js","_app/immutable/chunks/BovqA5zf.js","_app/immutable/chunks/CW8YZ50g.js","_app/immutable/chunks/DDoxhlaG.js","_app/immutable/chunks/DnkeOe0L.js","_app/immutable/chunks/Dhg4dCd-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
