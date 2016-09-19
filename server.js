var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name =viewport content="width-device-width, initial-scale-1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <div>
        <a href = "/"> Home </a>
    </div>
    <h4> ${date} </h4>
    <hr/>
    <div class = container>
    <p> Festival in India - ${content} </p>
    </div>
</html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article1',function(req,res){
  res.send(createTemplate(article1));
});

app.get('/article2',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
