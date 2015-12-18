import express from 'express';
import { conf } from './config.js';
import routes from './routes/index';

let app = express ();
let router = express.Router();

app.set('port', process.env.PORT || conf.get('port'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');
  next();
});

// app.get ('/', (req, res) => {
// 	res.send('Hello');
// });

let ro = routes(app, router);

let server = app.listen(conf.get('port'),'localhost', () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

export { app }
