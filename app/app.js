var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Joshs Swisshiglights';
app.locals.allHighlights = dataFile.data.highlights;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/highlights'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
