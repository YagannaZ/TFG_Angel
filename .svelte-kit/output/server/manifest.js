export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.79bf7bad.js","app":"_app/immutable/entry/app.f4c7af4d.js","imports":["_app/immutable/entry/start.79bf7bad.js","_app/immutable/chunks/index.29592d34.js","_app/immutable/chunks/singletons.57069308.js","_app/immutable/chunks/index.dc0f4426.js","_app/immutable/entry/app.f4c7af4d.js","_app/immutable/chunks/index.29592d34.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/alumnos",
				pattern: /^\/alumnos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/carniceria",
				pattern: /^\/carniceria\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/colaboradores",
				pattern: /^\/colaboradores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
