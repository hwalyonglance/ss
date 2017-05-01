import * as BodyParser from 'body-parser';
import * as CookieParser from 'cookie-parser';
import * as Express from 'express';
import * as Morgan from 'morgan';
import * as ServeFavicon from 'serve-favicon';
// import * as  from '';
// import * as  from '';
// import * as  from '';
// import * as  from '';

// __dirname: any;

let app = Express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(Morgan('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());
app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', function($Request, $Response) {
	$Response.sendFile(path.join(__dirname), 'public', 'index.html');
});

// catch 404 and forward to error handler
app.use(function($Request, $Response, $Next) {
 	var err = new Error('Not Found');
 	err.status = 404;
 	$Next(err);
});

// error handler
app.use(function($Error, $Request, $Response, $Next) {
 	// render the error page
 	$Response.sendFile(path.join(__dirname), 'public', 'index.html');
});