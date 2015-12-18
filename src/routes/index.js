import { AppRouter } from './../middleware/router'
import { Video } from './videos';
import { News } from './news';
import requestify from 'requestify';
 
export default function (app, routes) {
	let router = AppRouter.create(app, routes);
	let videoController = new Video(router, requestify);
	let newsController = new News(router, requestify);
	videoController.initialize();
	newsController.initialize();
	// console.log(JSON.stringify());
}