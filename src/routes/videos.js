//import { referenceAs } from './../di.Inject';
 //@referenceAs(Router)
export class Video {
	constructor (router, http) {
		this.router = router;
		this.http = http;
	}

	youtubeOption (playlistId = 'PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj', maxResult = 20, 
		apiKey = 'AIzaSyAete76X55EfBAlXIHQX-OcktfSaj5P15s') {
		let base = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet';
		return `${base}&maxResults=${maxResult}&playlistId=${playlistId}&key=${apiKey}`;
	} 

    getVideos () {
		this.router.get('/videos', (request, response) => {
			this.http
			.get(this.youtubeOption())
			.then ((res, err) => {
				res.getBody();
				response.json({
					version: '0.1',
					response: res.body
				});
			}).catch(error => {
				response.json({
					version: '0.1',
					response: '',
					error: error
				});
			});
		});
	}

	getVideo () {
		this.router.get('/video/:id', (request, response) => {
			this.http
			.get(this.youtubeOption(request.params.id))
			.then ((res, err) => {
				res.getBody();

				response.json({
					version: '0.1',
					response: res.body
				});
			}).catch(error => {
				response.json({
					version: '0.1',
					response: '',
					error: error
				});
			});
		});
	} 

	initialize () {
		this.getVideo ();
		this.getVideos ()
	}
}
