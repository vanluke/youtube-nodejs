import { Router } from 'express';

// let app = express ();

let applicationRouter = (app, router) => {
	// console.log(app, router);
	app.use('/api/v1', router);
	return router;
}

class AppRouter {
	static create (app, router) {
		return applicationRouter(app, router);
	}
}

export { AppRouter }